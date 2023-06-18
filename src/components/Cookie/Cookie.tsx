import styles from "./style.module.scss";
import { observer } from "mobx-react-lite";
import { useState } from "react";

export const Cookie = observer(() => {
    const [showCookie, setShowCookie] = useState(
        JSON.parse(localStorage.getItem("showCookie") ?? "true"),
    );

    if (!showCookie) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.text}>Привет! Этот сайт использует cookies</div>
            <button
                className={styles.button}
                onClick={() => {
                    setShowCookie(false);
                    localStorage.setItem("showCookie", "false");
                }}
            >
                ОК
            </button>
        </div>
    );
});
