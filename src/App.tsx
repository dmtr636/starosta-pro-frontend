import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";
import { store } from "@/stores/store.ts";
import { useEffect } from "react";

export const App = () => {
    const router = createBrowserRouter(routes);

    useEffect(() => {
        store.fetchCategories().catch(console.error);
        store.fetchWorks().catch(console.error);
    }, []);

    return <RouterProvider router={router} />;
};
