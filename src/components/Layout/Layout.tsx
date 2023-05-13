import { Outlet } from "react-router-dom";
import styles from "./style.module.scss";
import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    )
}
