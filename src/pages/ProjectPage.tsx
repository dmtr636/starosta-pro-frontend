import {Header} from "../components/header/Header";
import {Nav} from "../components/nav/Nav";
import React from "react";
import {Outlet, Route, useParams} from "react-router-dom";
import {Cookie} from "../components/cookie/Cookie";
import {Footer} from "../components/Footer/Footer";
import styled from "styled-components";
import {device} from "../constants/breakpoints";
import {ImagesSwiper} from "../components/projects/ImagesSwiper";
import {ProjectsGrid} from "../components/projects/ProjectsGrid";
import {categoryStore} from "../store/CategoryStore";
import useWindowDimensions from "../hooks/hooks";
import {projectStore} from "../store/ProjectStore";
import {ImagesGrid} from "../components/image/ImagesGrid";
import {observer} from "mobx-react-lite";

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: #111111;
	padding: 0 20px;
`
const ProjectInfo = styled.div`
	margin-top: 30px;
	display: grid;
	justify-content: center;
`
const ProjectName = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
	text-transform: uppercase;
	text-align: center;
    max-width: 510px;
`
const ProjectDescription = styled.div`
    max-width: 510px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.06em;
    color: #FFFFFF;
	margin-top: 15px;
`
const ProjectYear = styled.div`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
	margin-top: 30px;
`

export const ProjectPage = observer(() => {
	const params = useParams<{id: string}>()
	const id = Number(params.id)
	const {width} = useWindowDimensions()
	const project = projectStore.getProject(id)

	return (
		<Container>
			<Header/>
			<ProjectInfo>
				<ProjectName>{project?.name}</ProjectName>
				<ProjectDescription>{project?.description}</ProjectDescription>
				<ProjectYear>{project?.year}</ProjectYear>
			</ProjectInfo>
			{width <= device.tablet
				? <ImagesSwiper/>
				: <ImagesGrid projectId={id}/>
			}
			<Footer/>
			<Cookie/>
		</Container>
	)
})