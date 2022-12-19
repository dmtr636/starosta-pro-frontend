import {IProject} from "../../interfaces/IProject";
import {SERVER_HOST} from "../../constants/config";
import styled from "styled-components";
import {media} from "../../constants/breakpoints";
import {projectStore} from "../../store/ProjectStore";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {categoryStore} from "../../store/CategoryStore";
import useWindowDimensions from "../../hooks/hooks";

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

    ${media.phone} {
        &:hover {
			opacity: 0;
			overflow: hidden;
		}
    }
`
const ProjectName = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
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
	position: absolute;
	bottom: 30px;
	margin-top: 30px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #111111;
`
const ArchiveYear = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding: 6px 20px;
	background: #111111;
	font-family: 'Oswald';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.01em;
	color: #FFFFFF;
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

export const Project = observer((props: {project: IProject}) => {
	const {project} = props
	const navigate = useNavigate()

	const refVideo = useRef<HTMLVideoElement>(null);
	const [isShowYear, setShowYear] = useState(true)
	const {width} = useWindowDimensions()

	useEffect(() => {
		if (!refVideo.current) {
			return;
		}
		refVideo.current.defaultMuted = true;
		refVideo.current.muted = true;
	}, []);

	return (
		<Container width={project.image_width}>
			{project.type === "image"
				?
				<StyledImg
					src={`${SERVER_HOST}/${project.image}`}
					width={project.image_width}
				/>
				:
				<StyledVideo
					width={project.image_width}
					muted
					playsInline
					autoPlay
					loop
					ref={refVideo}
				>
					<source src={`${SERVER_HOST}/${project.image}`} type={"video/mp4"}/>
				</StyledVideo>
			}
			<ProjectInfo
				onClick={() => {
					if (project.category_id !== categoryStore.archiveCategory?.id) {
						navigate(`projects/${project.id}`)
					}
				}}
				onMouseEnter={() => {
					if (width >= 1280) {
						setShowYear(false)
					}
				}}
				onMouseLeave={() => setShowYear(true)}
			>
				<ProjectName>{project.name}</ProjectName>
				<ProjectDescription>{project.description}</ProjectDescription>
				{project.category_id !== categoryStore.archiveCategory?.id &&
					<ProjectYear>{project.year}</ProjectYear>
				}
			</ProjectInfo>
			{project.category_id === categoryStore.archiveCategory?.id && isShowYear &&
				<ArchiveYear>{project.year}</ArchiveYear>
			}
		</Container>
	)
})