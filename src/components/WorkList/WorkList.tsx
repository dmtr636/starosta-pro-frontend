import styles from "./style.module.scss";
import { store } from "@/stores/store.ts";
import { domain } from "@/constants/config.ts";

export const WorkList = () => {
    const works = store.use.works();

    return (
        <div className={styles.list}>
            {works.map((work) => (
                <div className={styles.work}>
                    {work.type === "image" ? (
                        <img className={styles.image} src={`${domain}${work.image}`} />
                    ) : (
                        <video className={styles.image} src={`${domain}${work.image}`} />
                    )}
                </div>
            ))}
        </div>
    );
};
