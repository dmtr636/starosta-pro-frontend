import {IAdditionalImage} from "./IAdditionalImage";
import {IImage} from "./IImage";

export interface IProject extends IImage {
	id: number,
	name: string,
	description: string,
	year: number,
	image: string,
	image_width: number,
	position?: number,
	category_id?: number,
	additional_images: IAdditionalImage[],
	currentIndex?: number,
	purpose?: string,
	role?: string,
	url?: string
}