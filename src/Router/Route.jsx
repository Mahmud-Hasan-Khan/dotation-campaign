import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Dotation from "../pages/Dotation/Dotation";
import Statistics from "../pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: "/dotation",
                element: <Dotation></Dotation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    },
]);

export default myCreatedRoute