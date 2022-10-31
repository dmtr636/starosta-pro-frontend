import styled from "styled-components";
import {observer} from "mobx-react-lite"
import {imageStore} from "../../store/ImageStore";
import {SERVER_HOST} from "../../constants/config";
import {device, media} from "../../constants/breakpoints";
import useWindowDimensions from "../../hooks/hooks";
import {Image} from "./Image";

const Container = styled.div`
	display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
	margin-top: 30px;

	${media.tablet} {
        grid-template-columns: repeat(3, 1fr);
	}
	${media.phone} {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const ImagesGrid = observer((props: {categoryId?: number}) => {
	let images = imageStore.filterImages(props.categoryId)

	const {width} = useWindowDimensions()

	if (width < device.tablet) {
		images = imageStore.adaptImagesTo2Col(images)
	} else if (width < device.desktop) {
		images = imageStore.adaptImagesTo3Col(images)
	}

	return (
		<Container>
			{images.map(image =>
				<Image image={image}/>
			)}
		</Container>
	)
})