import React, {useEffect} from 'react';
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {BrowserRouter} from "react-router-dom";
import {imageStore} from "./store/ImageStore";
import {Images} from "./components/images/Images";

export const App = () => {
	useEffect(() => {
		imageStore.fetchImages()
	}, [])

	return (
		<BrowserRouter>
			<Header/>
			<Nav/>
			<Images/>
		</BrowserRouter>
	)
}