import {Header} from "../components/header/Header";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Cookie} from "../components/cookie/Cookie";
import {Footer} from "../components/Footer/Footer";
import styled from "styled-components";
import {projectStore} from "../store/ProjectStore";
import {ImagesGrid} from "../components/image/ImagesGrid";
import {observer} from "mobx-react-lite";
import {media} from "../constants/breakpoints";
import linkIcon from "../assets/Link.svg"
import {Image} from "../components/image/Image";
import { IAdditionalImage } from "../interfaces/IAdditionalImage";
import useWindowDimensions from "../hooks/hooks";

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: #111111;

	${media.phone} {
		min-height: var(--app-height);
	}
`

const Content = styled.div`
	padding: 0 20px;
`

const ProjectHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0;

	${media.phone} {
		padding: 20px 0;
	}
`
const Role = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.06em;
	color: #FFFFFF;
`

const RoleBold = styled.span`
	font-weight: 600;

	${media.phone} {
	}
`

const Link = styled(Role)`
	display: flex;
	align-items: center;

	${media.phone} {
		margin-top: 20px;
	}
`

const LinkIcon = styled.a`
	margin-left: 12px;
	opacity: 0.7;

	&:hover {
		opacity: 1;
	}
`

const InfoRow = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 30px;

	${media.phone} {
		margin-top: 20px;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}
`

const InfoName = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	letter-spacing: 0.01em;
	color: #FFFFFF;
	text-transform: uppercase;
`

const InfoDescription = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.06em;
	color: #FFFFFF;
`

export const ProjectPage = observer(() => {
	const params = useParams<{ id: string }>()
	const id = Number(params.id)
	const project = projectStore.getProject(id)!
	const {width} = useWindowDimensions()

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const getImagesForImageGrid = () => {
		let width = 0
		const images: IAdditionalImage[] = []
		project.additional_images.slice(1).forEach(image => {
			width += image.image_width
			if (width <= 4) {
				images.push(image)
			}
		})
		return images
	}

	if (!project) {
		return null
	}

	const imagesForGrid = getImagesForImageGrid()
	const otherImages = project.additional_images.slice(1 + imagesForGrid.length)

	return (
		<Container>
			<Header/>

			<Content>
				<ProjectHeader>
					<Role>
						<RoleBold>Роль на проекте: </RoleBold>
						{project?.role}
					</Role>
					{project.url && width >= 700 &&
						<Link>
							Ссылка на проект
							<LinkIcon href={project?.url} target={"_blank"}>
								<img src={linkIcon} />
							</LinkIcon>
						</Link>
					}
				</ProjectHeader>

				<Image image={project.additional_images[0]}/>

				{project.url && width < 700 &&
					<Link>
						Ссылка на проект
						<LinkIcon href={project?.url} target={"_blank"}>
							<img src={linkIcon} />
						</LinkIcon>
					</Link>
				}

				<InfoRow>
					<InfoName>{project.name}</InfoName>
					<InfoDescription>{project.description}</InfoDescription>
				</InfoRow>
			</Content>

			{imagesForGrid &&
				<ImagesGrid images={imagesForGrid} projectId={project.id} />
			}

			<Content>
				<InfoRow>
					<InfoName>Цель</InfoName>
					<InfoDescription>{project.purpose}</InfoDescription>
				</InfoRow>
			</Content>

			{otherImages &&
				<ImagesGrid images={otherImages} projectId={project.id} />
			}

			<Footer/>
			<Cookie/>
		</Container>
	)
})