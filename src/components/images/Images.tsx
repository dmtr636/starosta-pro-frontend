import styled from "styled-components";
import {observer} from "mobx-react-lite"
import {imageStore} from "../../store/ImageStore";
import {SERVER_HOST} from "../../constants/config";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, calc(100% / 4));
`
const Image = styled.img`
	width: 100%;
	object-fit: cover;
`

export const Images = observer(() => {
	return (
		<Container>
			{imageStore.images.map(image =>
				<Image src={SERVER_HOST + image.url}/>
			)}
		</Container>
	)
})