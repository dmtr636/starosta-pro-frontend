import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative} from "swiper";
import {swiperStore} from "../../store/SwiperStore";
import {categoryStore} from "../../store/CategoryStore";
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {ProjectsGrid} from "./ProjectsGrid";
import "swiper/css";
import "swiper/css/bundle";

export const ProjectsSwiper = observer(() => {
	useEffect(() => {
		const index = categoryStore.categories.findIndex(category => category.id === categoryStore.currentCategory.id)
		if (swiperStore.swiper?.activeIndex !== index) {
			swiperStore.swiper?.slideTo(index)
		}
	}, [categoryStore.currentCategory])

	return (
		<>
			<Swiper
				effect={"creative"}
				creativeEffect={{
					limitProgress: 2,
					prev: {
						translate: ["-100%", 0, 0],
					},
					next: {
						translate: ["100%", 0, 0],
						opacity: 0.2
					},
				}}
				initialSlide={categoryStore.categories.findIndex(category => category.id === categoryStore.currentCategory.id)}
				modules={[EffectCreative]}
				slidesPerView={1}
				autoHeight
				style={{width: "100%"}}
				onSwiper={swiper => swiperStore.setSwiper(swiper)}
				onActiveIndexChange={swiper => {
					categoryStore.setCurrentCategory(categoryStore.categories[swiper.activeIndex])
				}}
			>
				{categoryStore.categories.map(category =>
					<SwiperSlide key={category.id} style={{minHeight: "calc(100vh - 315px)", width: "100%"}}>
						<ProjectsGrid category={category}/>
					</SwiperSlide>
				)}
			</Swiper>
		</>
	)
})