import {
    RouterProvider,
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import MainLayout from "../layout/mainLayout/mainLayout";
import {ItemsPage} from "../pages/itemsPage";
import MainView from "../pages/MainView/mainView";



const privateRoutes: RouteObject[] = [
    {
        path: "/",
        element: <ItemsPage />,
    },
    {
        path: "/mainView",
        element: <MainView />,
    },

];


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: privateRoutes,
    },

]);


export const Router = () => {
    return <RouterProvider router={router} />;
};