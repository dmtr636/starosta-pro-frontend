import {makeAutoObservable} from "mobx";
import {ICategory} from "../interfaces/ICategory";
import axios from "axios";
import {SERVER_HOST} from "../constants/config";
import {swiperStore} from "./SwiperStore";

const defaultCategory: ICategory = {
	id: 0,
	name: "ВСЕ",
	path: "",
	position: 0
}

class CategoryStore {
	categories: ICategory[] = []

	constructor() {
		makeAutoObservable(this)
	}

	fetchCategories() {
		axios.get(SERVER_HOST + "/api/categories")
			.then(res => {
				this.categories = [defaultCategory, ...res.data.result]
				swiperStore.swiper?.slideTo(swiperStore.swiper?.activeIndex)
			})
	}
}

export const categoryStore = new CategoryStore()
