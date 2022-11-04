import {SERVER_HOST} from "../../constants/config";
import styled from "styled-components";
import {media} from "../../constants/breakpoints";
import {observer} from "mobx-react-lite";
import {IImage} from "../../interfaces/IImage";

const Container = styled.div<{width: number}>`
	position: relative;
    grid-column: span ${props => props.width};
`
const StyledImg = styled.img<{width: number}>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
    -webkit-tap-highlight-color: transparent;

    ${media.tablet} {
        grid-column: span ${props => props.width <= 3 ? props.width : 3};
    }
    ${media.phone} {
        grid-column: span ${props => props.width <= 2 ? props.width : 2};
    }
`

export const Image = observer((props: {image: IImage}) => {
	const {image} = props

	return (
		<Container width={image.image_width}>
			<StyledImg
				src={`${SERVER_HOST}/${image.image}`}
				width={image.image_width}
			/>
		</Container>
	)
})