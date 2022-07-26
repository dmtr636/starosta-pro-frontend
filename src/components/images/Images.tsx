import styled from "styled-components";
import {observer} from "mobx-react-lite"
import {imageStore} from "../../store/ImageStore";
import {SERVER_HOST} from "../../constants/config";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	margin-top: 37px;
	margin-bottom: 37px;
	padding: 0 20px;
`
const Image = styled.img<{width: number}>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	grid-column: span ${props => props.width};
`

export const Images = observer((props: {categoryId?: number}) => {
	const images = imageStore.filterImages(props.categoryId)

	return (
		<Container>
			{images.map(image =>
				<Image
					src={SERVER_HOST + image.url}
					width={image.width}
				/>
			)}
		</Container>
	)
})