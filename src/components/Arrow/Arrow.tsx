import styles from "./style.module.scss";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { store } from "@/stores/store.ts";

export const Arrow = observer(() => {
    const [showArrow, setShowArrow] = useState(false);

    const handleScroll = () => {
        setShowArrow(window.scrollY > 60);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showArrow || store.showCookie) {
        return null;
    }

    return (
        <button
            className={styles.arrow}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 10.13L21.6861 12.9428L13.8072 6.29158L13.8072 24L10.1928 24L10.1928 6.29158L2.31386 12.9428L1.44876e-06 10.13L12 -5.06473e-07L24 10.13Z"
                    fill="white"
                />
            </svg>
        </button>
    );
});
