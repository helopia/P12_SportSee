import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Sidenav from "./Sidenav";

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
