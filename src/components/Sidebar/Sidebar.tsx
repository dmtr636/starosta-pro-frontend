import styles from "./style.module.scss";
import { store } from "@/stores/store.ts";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { ICategory } from "@/interfaces/ICategory.ts";

export const Sidebar = () => {
    const categories = store.use.categories();
    const activeCategory = store.use.activeCategory();
    const setActiveCategory = store.use.setActiveCategory();

    const genMenuLink = (category: ICategory | null) => (
        <NavLink
            to={"/"}
            className={classNames(styles.menuLink, {
                [styles.active]: activeCategory === category,
            })}
            onClick={() => setActiveCategory(category)}
        >
            {category?.name ?? "ALL"}
        </NavLink>
    );

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.name}>STAROSTA</div>
                <div className={styles.specialty}>PRODUCT DESIGNER</div>
                <div className={styles.specialty}>3D ARTIST</div>
            </div>
            <div className={styles.links}>
                <a href="https://ru.linkedin.com/" target="_blank" className={styles.link}>
                    LINKEDIN
                </a>
                <a href="mailto:starosta-2000@mail.ru" target="_blank" className={styles.link}>
                    EMAIL
                </a>
            </div>
            {categories.length > 0 && (
                <div className={styles.menu}>
                    {genMenuLink(null)}
                    {categories.map(genMenuLink)}
                </div>
            )}
        </div>
    );
};
