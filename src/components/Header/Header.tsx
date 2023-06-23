import styles from "./style.module.scss";
import { observer } from "mobx-react-lite";
import Burger from "@/components/Burger/Burger.tsx";
import { useState } from "react";
import classNames from "classnames";

export const Header = observer(() => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMenuExiting, setMenuExiting] = useState(false);

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
            setMenuExiting(true);
            setTimeout(() => {
                setMenuExiting(false);
            }, 250);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.name}>STAROSTA</div>
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
                        <div className={styles.specialty}>PRODUCT DESIGNER</div>
                        <div className={styles.links}>
                            <a
                                href="https://www.linkedin.com/in/starosta-kirill"
                                target="_blank"
                                className={styles.link}
                            >
                                LINKEDIN
                            </a>
                            <a
                                href="mailto:starosta-2000@mail.ru"
                                target="_blank"
                                className={styles.link}
                            >
                                EMAIL
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
});
