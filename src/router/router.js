import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import ErrorPage from "../pages/Error";
// import { logementsloader } from "../api/api";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                // loader: logementsloader,
            },
        ],
    },
]);
