import {makeAutoObservable} from "mobx";
import {ICategory} from "../interfaces/ICategory";
import axios from "axios";
import {SERVER_HOST} from "../constants/config";

const defaultCategory: ICategory = {
	id: 0,
	name: "ВСЕ",
	path: "",
	position: 0,
	displayed: true
}

class CategoryStore {
	categories: ICategory[] = []
	currentCategory = defaultCategory

	constructor() {
		makeAutoObservable(this)
	}

	setCurrentCategory(category: ICategory) {
		this.currentCategory = category
	}

	fetchCategories() {
		axios.get(SERVER_HOST + "/api/categories")
			.then(res => {
				this.categories = [defaultCategory, ...res.data.result]
			})
	}

	get archiveCategory() {
		return this.categories.find(category => category.path === "archive")
	}

	get displayedCategories() {
		return this.categories.filter(category => category.displayed)
	}
}

export const categoryStore = new CategoryStore()
