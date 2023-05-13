import { RouteObject } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout.tsx";
import { MainPage } from "@/pages/MainPage/MainPage.tsx";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <MainPage/>,
            },
        ],
    },
]
