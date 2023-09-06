import React from "react";
import {Link, NavLink} from "react-router-dom";
// import "../../assets/sass/layout/_header.scss";
import Navbarlogo from "../../assets/images/Navbarlogo.svg"

const Header = () => {
    return (
        <header className="navbar">
            <Link to={"/"}>
                <img className="navbar__logo" src={Navbarlogo} alt="Logo Kasa"/>
            </Link>
            <NavLink className="navbar__navlink" to={"/"}>
                Accueil
            </NavLink>
            <NavLink className="navbar__navlink" to={"/"}>
                Profil
            </NavLink>
            <NavLink className="navbar__navlink" to={"#"}>
                Réglage
            </NavLink>
            <NavLink className="navbar__navlink" to={"#"}>
                Communauté
            </NavLink>

        </header>
    );
};
export default Header;
