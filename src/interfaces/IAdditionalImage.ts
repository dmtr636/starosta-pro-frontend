import {IImage} from "./IImage";

export interface IAdditionalImage extends IImage {
	id: number,
	image: string,
	width: number,
	position?: number
}