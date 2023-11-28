export interface IImage {
    id: number,
    image: string,
    image_width: number,
    type: "image" | "video",
    name: string | null,
    text: string,
}

export interface IWork {
    id: number,
    image: string,
    image_width: number,
    type: "image" | "video",
    position: number,
    category_id: number,
    name: string,
    description: string,
    year: number,
    url: string,
    role: string,
    purpose: string,
    additional_images: IImage[]
}
