import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {imageStore} from "./store/ImageStore";
import {Images} from "./components/images/Images";
import {categoryStore} from "./store/CategoryStore";
import {observer} from "mobx-react-lite";
import {Page404} from "./pages/Page404";
import {MainPage} from "./pages/MainPage";

export const App = observer(() => {
	useEffect(() => {
		categoryStore.fetchCategories()
		imageStore.fetchImages()
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<MainPage/>}>
					<Route index element={<Images/>}/>
					{categoryStore.categories.map(category =>
						<Route
							path={`/${category.path}`}
							element={<Images categoryId={category.id}/>}
							key={category.path}
						/>
					)}
				</Route>
				{categoryStore.categories.length === 0 &&
                    <Route path={"*"} element={<MainPage/>}/>
				}
				<Route path={"*"} element={<Page404/>}/>
			</Routes>
		</BrowserRouter>
	)
})