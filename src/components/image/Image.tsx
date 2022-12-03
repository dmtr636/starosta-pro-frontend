import {SERVER_HOST} from "../../constants/config";
import styled from "styled-components";
import {media} from "../../constants/breakpoints";
import {observer} from "mobx-react-lite";
import {IImage} from "../../interfaces/IImage";
import {useEffect, useRef} from "react";

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
const StyledVideo = styled.video<{width: number}>`
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

	const refVideo = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (!refVideo.current) {
			return;
		}
		refVideo.current.defaultMuted = true;
		refVideo.current.muted = true;
	}, []);

	return (
		<Container width={image.image_width}>
			{image.type === "image"
				?
				<StyledImg
					src={`${SERVER_HOST}${image.image}`}
					width={image.image_width}
				/>
				:
				<StyledVideo
					width={image.image_width}
					muted
					playsInline
					autoPlay
					loop
					ref={refVideo}
				>
					<source src={`${SERVER_HOST}${image.image}`} type={"video/mp4"}/>
				</StyledVideo>
			}
		</Container>
	)
})