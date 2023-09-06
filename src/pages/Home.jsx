import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav className="homepage">
                <h2 className="homepage__title">Select User</h2>
                <NavLink to="users/12">👦 Karl </NavLink>
                <NavLink to="users/18">👩 Cecilia </NavLink>
            </nav>
        </>
    )
}
export default Home;



