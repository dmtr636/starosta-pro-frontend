import {IImage} from "../../interfaces/IImage";
import {SERVER_HOST} from "../../constants/config";
import styled from "styled-components";
import {media} from "../../constants/breakpoints";
import {imageStore} from "../../store/ImageStore";
import {observer} from "mobx-react-lite";

const Container = styled.div<{width: number}>`
	position: relative;
    grid-column: span ${props => props.width};
	cursor: pointer;
`
const StyledImg = styled.img<{width: number}>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
	cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    ${media.tablet} {
        grid-column: span ${props => props.width <= 3 ? props.width : 3};
    }
    ${media.phone} {
        grid-column: span ${props => props.width <= 2 ? props.width : 2};
    }
`
const ProjectInfo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 30px;
	opacity: 0;
    background: rgba(255, 255, 255, 0.74);
    backdrop-filter: blur(7px);
    transition: opacity 200ms;

    &:hover {
		opacity: 1;
    }
`
const ProjectName = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #111111;
	max-width: 330px;
`
const ProjectDescription = styled.div`
	margin-top: 15px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.06em;
    color: #111111;
	max-width: 520px;
`
const ProjectYear = styled.div`
	margin-top: 30px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #111111;
`

export const Image = observer((props: {image: IImage}) => {
	return (
		<Container width={props.image.width}>
			<StyledImg
				onClick={() => imageStore.nextImage(props.image)}
				src={SERVER_HOST + imageStore.getCurrentImageUrl(props.image)}
				width={props.image.width}
				key={props.image.id}
			/>
			<ProjectInfo>
				<ProjectName>Синхронизация контактов и всякое такое</ProjectName>
				<ProjectDescription>
					Его описание, как проекта который лежит где-то там
					и ждёт чуда, как 10 лет назад. Проект пока не увидел свет,
					но скоро это повиксится
				</ProjectDescription>
				<ProjectYear>2022</ProjectYear>
			</ProjectInfo>
		</Container>
	)
})