import styles from "./style.module.scss"
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { domain } from "@/constants/config.ts";
import { IWork } from "@/interfaces/IWork.ts";

export const WorkList = observer((props: {
    works: IWork[]
}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.list}>
            {props.works.map((work) => (
                <div
                    className={styles.work}
                    onClick={() => navigate(`/work/${work.id}`)}
                    key={work.id}
                >
                    {work.type === "image" ? (
                        <img
                            className={styles.image}
                            src={`${domain}${work.image}`}
                            alt={work.name}
                        />
                    ) : (
                        <video
                            className={styles.image}
                            src={`${domain}${work.image}`}
                            muted
                            playsInline
                            autoPlay
                            loop
                        />
                    )}
                    <div className={styles.info}>
                        <div className={styles.name}>{work.name}</div>
                        <div className={styles.year}>{work.year}</div>
                    </div>
                </div>
            ))}
        </div>
    )
})
