import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./style.module.scss";
import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";
import { Cookie } from "@/components/Cookie/Cookie.tsx";
import { Arrow } from "@/components/Arrow/Arrow.tsx";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <Cookie/>
            <Arrow/>
            <ScrollRestoration/>
        </div>
    )
}
