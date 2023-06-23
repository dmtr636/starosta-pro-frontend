import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./style.module.scss";
import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";
import { Cookie } from "@/components/Cookie/Cookie.tsx";
import { Arrow } from "@/components/Arrow/Arrow.tsx";
import useWindowDimensions from "@/hooks/useWindowDimensions.ts";
import { isMobile } from "@/utils/utils.ts";
import { Header } from "@/components/Header/Header.tsx";

export const Layout = () => {
    const { width } = useWindowDimensions();

    return (
        <div className={styles.layout}>
            {isMobile(width) ? (
                <>
                    <Header/>
                </>
            ) : (
                <Sidebar/>
            )}
            <div className={styles.content}>
                <Outlet/>
            </div>
            <Cookie/>
            <Arrow/>
            <ScrollRestoration/>
        </div>
    )
}
