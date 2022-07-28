import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useLocation, useMatch, useRoutes} from "react-router-dom";
import {imageStore} from "./store/ImageStore";
import {Images} from "./components/images/Images";
import {categoryStore} from "./store/CategoryStore";
import {observer} from "mobx-react-lite";
import {Page404} from "./pages/Page404";
import {MainPage} from "./pages/MainPage";
import useWindowDimensions from "./hooks/hooks";
import {device} from "./constants/breakpoints";
import {ImagesSwiper} from "./components/images/ImagesSwiper";

export const App = observer(() => {
	useEffect(() => {
		categoryStore.fetchCategories()
		imageStore.fetchImages()
	}, [])

	const {width} = useWindowDimensions()

	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<MainPage/>}>
					{width <= device.tablet
						?
						<>
							<Route index element={<ImagesSwiper />} />
							<Route path={"*"} element={<ImagesSwiper />} />
						</>
						:
						<>
							<Route index element={<Images/>}/>
							{categoryStore.categories.map(category =>
								<Route
									path={`/${category.path}`}
									element={<Images categoryId={category.id}/>}
									key={category.path}
								/>
							)}
						</>
					}
				</Route>
				{categoryStore.categories.length === 0 &&
                    <Route path={"*"} element={<MainPage/>}/>
				}
				<Route path={"*"} element={<Page404/>}/>
			</Routes>
		</BrowserRouter>
	)
})