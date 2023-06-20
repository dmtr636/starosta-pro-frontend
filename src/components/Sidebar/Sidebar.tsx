import styles from "./style.module.scss";
import { store } from "@/stores/store.ts";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { ICategory } from "@/interfaces/ICategory.ts";
import {observer} from "mobx-react-lite";

export const Sidebar = observer(() => {
    const genMenuLink = (category: ICategory | null) => (
        <NavLink
            to={"/"}
            className={classNames(styles.menuLink, {
                [styles.active]: store.activeCategory === category,
            })}
            onClick={() => store.setActiveCategory(category)}
        >
            {category?.name ?? "ALL"}
        </NavLink>
    );

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.name}>STAROSTA</div>
                <div className={styles.specialties}>
                    <div className={styles.specialty}>PRODUCT DESIGNER</div>
                </div>
            </div>
            <div className={styles.links}>
                <a href="https://www.linkedin.com/in/starosta-kirill" target="_blank" className={styles.link}>
                    LINKEDIN
                </a>
                <a href="mailto:starosta-2000@mail.ru" target="_blank" className={styles.link}>
                    EMAIL
                </a>
            </div>
            {store.categories.length > 0 && (
                <div className={styles.menu}>
                    {genMenuLink(null)}
                    {store.categories.map(genMenuLink)}
                </div>
            )}
        </div>
    );
});
