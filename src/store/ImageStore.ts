import {IImage} from "../interfaces/IImage";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/config";
import {swiperStore} from "./SwiperStore";

function moveElement(arr: any[], fromIndex: number, toIndex: number) {
	const element = arr[fromIndex];
	arr.splice(fromIndex, 1);
	arr.splice(toIndex, 0, element);
}

class ImageStore {
	images: IImage[] = []

	constructor() {
		makeAutoObservable(this, {}, {deep: true})
	}

	fetchImages() {
		axios.get(SERVER_HOST + "/api/images")
			.then((res) => {
				this.images = res.data.result
				console.log(res.data.result)
			}
		)
	}

	filterImages(categoryId?: number) {
		if (categoryId) {
			return this.images.filter(image => image.category_id === categoryId)
		} else {
			return this.images
		}
	}

	adaptImagesTo2Col(images: IImage[]) {
		let count = 0
		images.forEach((value, index) => {
			if (value.width === 1) {
				count++
			} else if (count % 2 === 1) {
				for (let i = index + 1; i < images.length; i++) {
					if (images[i].width === 1) {
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
			if (value.width === 1) {
				count1++
			} else if (count1 % 3 === 2) {
				for (let i = index + 1; i < images.length; i++) {
					if (images[i].width === 1) {
						moveElement(images, i, index)
						count1 = 0
						break
					}
				}
				if (count1) {
					//moveElement(images, index - 1, images.length - 1)
				}
			}
		})
		return images
	}

	getCurrentImageUrl(image: IImage) {
		if (image.currentIndex === undefined) {
			image.currentIndex = 0
		}
		if (image.currentIndex === 0) {
			return image.url
		}
		return image.additional_images[image.currentIndex - 1]
	}

	nextImage(image: IImage) {
		const nextIndex = image.currentIndex!! + 1
		const totalCount = image.additional_images.length + 1
		image.currentIndex = nextIndex % totalCount
	}
}

export const imageStore = new ImageStore()