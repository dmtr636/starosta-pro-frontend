import styled from "styled-components";
import {observer} from "mobx-react-lite"
import {imageStore} from "../../store/ImageStore";
import {SERVER_HOST} from "../../constants/config";
import {media} from "../../constants/breakpoints";

const Container = styled.div`
	display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
	margin-top: 37px;
	margin-bottom: 37px;
	padding: 0 20px;

	${media.tablet} {
        grid-template-columns: repeat(3, 1fr);
	}
	${media.phone} {
		grid-template-columns: repeat(2, 1fr);
	}
`
const Image = styled.img<{width: number}>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
	grid-column: span ${props => props.width};

    ${media.tablet} {
        grid-column: span ${props => props.width <= 3 ? props.width : 3};
    }
    ${media.phone} {
        grid-column: span ${props => props.width <= 2 ? props.width : 2};
    }
`

export const Images = observer((props: {categoryId?: number}) => {
	const images = imageStore.filterImages(props.categoryId)

	return (
		<Container>
			{images.map(image =>
				<Image
					src={SERVER_HOST + image.url}
					width={image.width}
					key={image.id}
				/>
			)}
		</Container>
	)
})