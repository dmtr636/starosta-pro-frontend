import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {projectStore} from "./store/ProjectStore";
import {categoryStore} from "./store/CategoryStore";
import {observer} from "mobx-react-lite";
import {Page404} from "./pages/Page404";
import {MainPage} from "./pages/MainPage";
import {ProjectPage} from "./pages/ProjectPage";

export const App = observer(() => {
	useEffect(() => {
		categoryStore.fetchCategories()
		projectStore.fetchProjects()
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<MainPage/>}/>
				<Route path={"projects/:id"} element={<ProjectPage/>}/>
				<Route path={"*"} element={<Page404/>}/>
			</Routes>
		</BrowserRouter>
	)
})