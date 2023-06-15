import { RouteObject } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout.tsx";
import { MainPage } from "@/pages/MainPage/MainPage.tsx";
import {WorkPage} from "@/pages/WorkPage/WorkPage.tsx";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <MainPage/>,
            },
            {
                path: "work/:id",
                element: <WorkPage/>,
            },
        ],
    },
]
