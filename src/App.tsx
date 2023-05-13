import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/routes/routes.tsx";
import { store } from "@/stores/store.ts";
import { useEffect } from "react";

export const App = () => {
    const fetchCategories = store.use.fetchCategories();
    const fetchWorks = store.use.fetchWorks();
    const router = createBrowserRouter(routes);

    useEffect(() => {
        fetchCategories().catch(console.error);
        fetchWorks().catch(console.error);
    }, [fetchCategories, fetchWorks]);

    return <RouterProvider router={router} />;
};
