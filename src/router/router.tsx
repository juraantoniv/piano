import {
    RouterProvider,
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import MainLayout from "../layout/mainLayout/mainLayout";
import {ItemsPage} from "../pages/itemsPage";
import MainView from "../pages/MainView/mainView";

// Defining an array of private routes, which will be used by the router

const privateRoutes: RouteObject[] = [
    {
        path: "piano", // URL path for the piano page
        element: <ItemsPage />, // Component to be rendered for the piano page
    },
    {
        path: "/mainView", // URL path for the mainView page
        element: <MainView />, // Component to be rendered for the MainView page
    },

];

// Creating the router with the defined routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: privateRoutes,
    },

]);

// Exporting the Router component, which provides the router context to the application
export const Router = () => {
    return <RouterProvider router={router} />;
};