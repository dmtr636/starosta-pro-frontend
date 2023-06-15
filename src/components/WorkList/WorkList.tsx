import styles from "./style.module.scss";
import { store } from "@/stores/store.ts";
import { domain } from "@/constants/config.ts";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

export const WorkList = observer(() => {
    const navigate = useNavigate();

    return (
        <div className={styles.list}>
            {store.filteredWorks.map((work) => (
                <div
                    className={styles.work}
                    onClick={() => navigate(`/work/${work.id}`)}
                >
                    {work.type === "image" ? (
                        <img className={styles.image} src={`${domain}${work.image}`} alt={work.name}/>
                    ) : (
                        <video className={styles.image} src={`${domain}${work.image}`} />
                    )}
                    <div className={styles.name}>{work.name}</div>
                    <div className={styles.year}>{work.year}</div>
                </div>
            ))}
        </div>
    );
});
