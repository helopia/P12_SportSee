import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <main className="main homepage">
                <h2>Select User</h2>
                <NavLink to="users/12">👦 Karl </NavLink>
                <NavLink to="users/18">👩 Cecilia </NavLink>
            </main>
        </>
    )
}
export default Home;



