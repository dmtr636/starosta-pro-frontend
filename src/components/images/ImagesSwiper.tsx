import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative} from "swiper";
import {swiperStore} from "../../store/SwiperStore";
import {useLocation, useNavigate} from "react-router-dom";
import {categoryStore} from "../../store/CategoryStore";
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Images} from "./Images";
import "swiper/css";
import "swiper/css/bundle";
import {imageStore} from "../../store/ImageStore";

export const ImagesSwiper = observer(() => {
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const index = categoryStore.categories.findIndex(category => `/${category.path}` === location.pathname)
		if (swiperStore.swiper?.activeIndex !== index) {
			swiperStore.swiper?.slideTo(index)
		}
	}, [location, categoryStore.categories])

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
				modules={[EffectCreative]}
				slidesPerView={1}
				autoHeight
				style={{width: "100%"}}
				onSwiper={swiper => swiperStore.setSwiper(swiper)}
				onActiveIndexChange={swiper => navigate(`/${categoryStore.categories[swiper.activeIndex].path}`)}
			>
				{categoryStore.categories.map((category, index) =>
					<SwiperSlide key={index} style={{minHeight: "calc(100vh - 315px)"}}>
						<Images categoryId={category.id} />
					</SwiperSlide>
				)}
			</Swiper>
		</>
	)
})