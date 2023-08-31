import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import ErrorPage from "../pages/Error";
import Users from "../pages/Users";
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
                // loader: Userloader,
            },
            {
                path: "/users/:id",
                element: <Users/>,
                // loader: logementsloader,
            },

        ],
    },
]);
