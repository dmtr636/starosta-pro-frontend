import { useParams } from "react-router-dom";
import { store } from "@/stores/store.ts";
import { observer } from "mobx-react-lite";
import styles from "./style.module.scss";
import { domain } from "@/constants/config.ts";

export const WorkPage = observer(() => {
    const params = useParams<{ id: string }>();

    let work;
    if (params.id) {
        work = store.getWorkById(params.id);
    }

    if (store.works.length && !work) {
        return <div>Ошибка</div>;
    }

    return (
        <div className={styles.layout}>
            <div className={styles.info}>
                <div className={styles.nameRow}>
                    <div className={styles.name}>{work?.name ?? "Загрузка..."}</div>
                    <div className={styles.type}>{work?.purpose || "STUDY"}</div>
                </div>
                <div className={styles.description}>
                    {work?.description}
                </div>
            </div>
            <div className={styles.imageList}>
                {work?.additional_images.map(image =>
                    image.type === "image" ? (
                        <img
                            className={styles.image}
                            src={`${domain}${image.image}`}
                            alt={""}
                        />
                    ) : (
                        <video
                            className={styles.image}
                            src={`${domain}${image.image}`}
                            muted
                            playsInline
                            autoPlay
                            loop
                        />
                    )
                )}
            </div>
        </div>
    );
});
