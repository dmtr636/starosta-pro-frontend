import styles from "./style.module.scss";
import { store } from "@/stores/store.ts";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
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
            {category?.name ?? "ВСЕ"}
        </NavLink>
    );

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <Link to={"/"} className={styles.name}>СТАРОСТА К.</Link>
            </div>
            <div className={styles.links}>
                <a href="https://t.me/starostakirill" target="_blank" className={styles.link}>
                    ТЕЛЕГРАМ
                </a>
                <a href="mailto:starosta-2000@mail.ru" target="_blank" className={styles.link}>
                    ПОЧТА
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
