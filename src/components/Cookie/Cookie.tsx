import styles from "./style.module.scss";
import { observer } from "mobx-react-lite";
import { store } from "@/stores/store.ts";

export const Cookie = observer(() => {
    if (!store.showCookie) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.text}>Привет! Этот сайт использует cookies</div>
            <button className={styles.button} onClick={() => store.setShowCookie(false)}>
                ОК
            </button>
        </div>
    );
});
