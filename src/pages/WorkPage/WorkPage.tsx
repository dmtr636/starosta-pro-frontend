import { useParams } from "react-router-dom";
import { store } from "@/stores/store.ts";
import { observer } from "mobx-react-lite";
import styles from "./style.module.scss";

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
            <div className={styles.nameRow}>
                <div className={styles.name}>{work?.name ?? "Загрузка..."}</div>
                <div className={styles.type}>{work?.purpose || "STUDY"}</div>
            </div>
            <div className={styles.description}>
                {work?.description}
            </div>
        </div>
    );
});
