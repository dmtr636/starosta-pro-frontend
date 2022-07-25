import {IImage} from "../interfaces/IImage";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/config";

class ImageStore {
	images: IImage[] = []

	constructor() {
		makeAutoObservable(this)
	}

	fetchImages() {
		axios.get(SERVER_HOST + "/api/images")
			.then((res) => {
				this.images = res.data.result
				console.log(res.data.result)
			}
		)
	}
}

export const imageStore = new ImageStore()