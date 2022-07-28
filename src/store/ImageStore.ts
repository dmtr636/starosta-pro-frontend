import {IImage} from "../interfaces/IImage";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/config";
import {swiperStore} from "./SwiperStore";

class ImageStore {
	images: IImage[] = []

	constructor() {
		makeAutoObservable(this)
	}

	fetchImages() {
		axios.get(SERVER_HOST + "/api/images")
			.then((res) => {
				this.images = res.data.result
				swiperStore.swiper?.slideTo(swiperStore.swiper?.activeIndex)
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
}

export const imageStore = new ImageStore()