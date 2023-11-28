import styles from "./style.module.scss";
import { observer } from "mobx-react-lite";
import Burger from "@/components/Burger/Burger.tsx";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Header = observer(() => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMenuExiting, setMenuExiting] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            document.body.style.overflow = "auto";
            setMenuExiting(true);
            setTimeout(() => {
                setMenuExiting(false);
            }, 250);
        } else {
            window.scrollTo({top: 0});
            document.body.style.overflow = "hidden";
        }
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <Link to={"/"} className={styles.name}>СТАРОСТА К.</Link>
            <button onClick={toggleMenu}>
                <Burger open={isMenuOpen} />
            </button>

            {(isMenuOpen || isMenuExiting) && (
                <div
                    className={classNames(styles.overlay, {
                        [styles.overlayFadingOut]: isMenuExiting,
                    })}
                    onClick={toggleMenu}
                >
                    <div
                        className={classNames(styles.menu, { [styles.menuExiting]: isMenuExiting })}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className={styles.links}>
                            <a href="https://t.me/starostakirill" target="_blank" className={styles.link}>
                                ТЕЛЕГРАМ
                            </a>
                            <a href="mailto:starosta-2000@mail.ru" target="_blank" className={styles.link}>
                                ПОЧТА
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
});
