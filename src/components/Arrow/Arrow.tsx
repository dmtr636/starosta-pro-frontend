import styles from "./style.module.scss";
import { observer } from "mobx-react-lite";
import arrow from "@/assets/arrow.svg";
import { useEffect, useState } from "react";

export const Arrow = observer(() => {
    const [showArrow, setShowArrow] = useState(false);

    const handleScroll = () => {
        setShowArrow(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showArrow) {
        return null;
    }

    return (
        <button
            className={styles.arrow}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <img src={arrow} alt={""} />
        </button>
    );
});
