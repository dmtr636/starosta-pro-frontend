import {Header} from "../components/header/Header";
import {Nav} from "../components/nav/Nav";
import React from "react";
import {Outlet} from "react-router-dom";
import {Cookie} from "../components/cookie/Cookie";
import {Footer} from "../components/Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: #111111;
	padding: 0 20px;
`

export const MainPage = () => {
	return (
		<Container>
			<Header/>
			<Nav/>
			<Outlet/>
			<Footer/>
			<Cookie/>
		</Container>
	)
}