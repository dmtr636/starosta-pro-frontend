export interface IImage {
	id: number,
	url: string,
	width: number,
	position?: number,
	category_id?: number,
	additional_images: string[],
	currentIndex?: number
}