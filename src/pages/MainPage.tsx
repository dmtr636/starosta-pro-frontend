import {Header} from "../components/header/Header";
import {Nav} from "../components/nav/Nav";
import React from "react";
import {Cookie} from "../components/cookie/Cookie";
import {Footer} from "../components/Footer/Footer";
import styled from "styled-components";
import {device} from "../constants/breakpoints";
import {ImagesSwiper} from "../components/projects/ImagesSwiper";
import {ProjectsGrid} from "../components/projects/ProjectsGrid";
import useWindowDimensions from "../hooks/hooks";
import {observer} from "mobx-react-lite";

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #111111;
    padding: 0 20px;
`

export const MainPage = observer(() => {
	const {width} = useWindowDimensions()

	return (
		<Container>
			<Header/>
			<Nav/>
			{width <= device.tablet
				? <ImagesSwiper/>
				: <ProjectsGrid/>
			}
			<Footer/>
			<Cookie/>
		</Container>
	)
})