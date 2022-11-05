import {makeAutoObservable} from "mobx";
import Swiper from "swiper";

class SwiperStore {
	swiper?: Swiper = undefined

	setSwiper(swiper: Swiper) {
		this.swiper = swiper
	}

	constructor() {
		makeAutoObservable(this)

		/*setInterval(() => {
			swiperStore.swiper?.updateAutoHeight()
		}, 100)*/
	}
}

export const swiperStore = new SwiperStore()