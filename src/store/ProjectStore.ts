import {IProject} from "../interfaces/IProject";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/config";
import {categoryStore} from "./CategoryStore";
import {IImage} from "../interfaces/IImage";

function moveElement(arr: any[], fromIndex: number, toIndex: number) {
	const element = arr[fromIndex];
	arr.splice(fromIndex, 1);
	arr.splice(toIndex, 0, element);
}

class ProjectStore {
	projects: IProject[] = []

	constructor() {
		makeAutoObservable(this, {}, {deep: true})
	}

	fetchProjects() {
		axios.get(SERVER_HOST + "/api/projects")
			.then((res) => {
				this.projects = res.data.result
				console.log(res.data.result)
			}
		)
	}

	getProject(projectId: number) {
		return this.projects.find(project => project.id === projectId)
	}

	getProjects(categoryId: number) {
		return projectStore.filterImages(categoryId)
	}

	getAdditionalImages(projectId: number) {
		return this.getProject(projectId)?.additional_images
	}

	filterImages(categoryId?: number) {
		if (categoryId) {
			return this.projects.filter(image => image.category_id === categoryId)
		} else {
			return this.projects
		}
	}

	adaptImagesTo2Col(images: IImage[]) {
		let count = 0
		images.forEach((value, index) => {
			if (value.image_width === 1) {
				count++
			} else if (count % 2 === 1) {
				for (let i = index + 1; i < images.length; i++) {
					if (images[i].image_width === 1) {
						moveElement(images, i, index)
						count = 0
						break
					}
				}
				if (count) {
					moveElement(images, index - 1, images.length - 1)
				}
			}
		})
		return images
	}

	adaptImagesTo3Col(images: IImage[]) {
		let count1 = 0
		images.forEach((value, index) => {
			if (value.image_width === 1) {
				count1++
			} else if (count1 % 3 === 2) {
				for (let i = index + 1; i < images.length; i++) {
					if (images[i].image_width === 1) {
						moveElement(images, i, index)
						count1 = 0
						break
					}
				}
				if (count1) {
					//moveElement(projects, index - 1, projects.length - 1)
				}
			}
		})
		return images
	}

	getCurrentImageUrl(image: IProject) {
		if (image.currentIndex === undefined) {
			image.currentIndex = 0
		}
		if (image.currentIndex === 0) {
			return image.image
		}
		return image.additional_images[image.currentIndex - 1]
	}

	nextImage(image: IProject) {
		const nextIndex = image.currentIndex!! + 1
		const totalCount = image.additional_images.length + 1
		image.currentIndex = nextIndex % totalCount
	}
}

export const projectStore = new ProjectStore()