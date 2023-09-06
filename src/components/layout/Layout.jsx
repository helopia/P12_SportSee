import React from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Sidenav/>
        </>
    );
};

export default Layout;
