import {Header} from "../components/header/Header";
import {Nav} from "../components/nav/Nav";
import React from "react";
import {Cookie} from "../components/cookie/Cookie";
import {Footer} from "../components/Footer/Footer";
import styled from "styled-components";
import {device, media} from "../constants/breakpoints";
import {ProjectsSwiper} from "../components/projects/ProjectsSwiper";
import {ProjectsGrid} from "../components/projects/ProjectsGrid";
import useWindowDimensions from "../hooks/hooks";
import {observer} from "mobx-react-lite";
import {categoryStore} from "../store/CategoryStore";

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #111111;
	overflow-x: hidden;
	
	${media.phone} {
		min-height: var(--app-height);
	}
`

export const MainPage = observer(() => {
	const {width} = useWindowDimensions()

	return (
		<Container>
			<Header/>
			<Nav/>
			{width <= device.tablet
				? <ProjectsSwiper/>
				: <ProjectsGrid category={categoryStore.currentCategory}/>
			}
			<Footer/>
			<Cookie/>
		</Container>
	)
})