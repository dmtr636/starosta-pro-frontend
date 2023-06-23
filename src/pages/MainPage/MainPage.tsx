import styles from "../../pages/MainPage/style.module.scss";
import { store } from "@/stores/store.ts";
import { observer } from "mobx-react-lite";
import { WorkList } from "@/components/WorkList/WorkList.tsx";
import useWindowDimensions from "@/hooks/useWindowDimensions.ts";
import { isMobile } from "@/utils/utils.ts";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper as SwiperClass } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const MainPage = observer(() => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { width } = useWindowDimensions();

    useEffect(() => {
        thumbsSwiper?.slideTo(activeIndex);
    }, [activeIndex, thumbsSwiper]);

    if (!store.categories || !store.works) {
        return <div>Загрузка</div>;
    }

    return (
        <div className={styles.list}>
            {isMobile(width) ? (
                <>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={12}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        className={styles.navSwiper}
                    >
                        {store.categories.map((category, index) => (
                            <SwiperSlide key={index} className={styles.navSlide}>
                                <div
                                    className={classNames(styles.category, {
                                        [styles.active]: index === activeIndex,
                                    })}
                                    onClick={() => thumbsSwiper?.slideTo(index)}
                                >
                                    {category.name}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        loop={false}
                        spaceBetween={40}
                        slidesPerView={1}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Thumbs]}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className={styles.worksSwiper}
                    >
                        {store.categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <WorkList works={store.filterWorksByCategory(category)} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                <WorkList works={store.filteredWorks} />
            )}
        </div>
    );
});
