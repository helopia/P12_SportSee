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
            <nav className="navbar__nav">
                <NavLink className="navbar__nav__link" to={"/"}>
                    Accueil
                </NavLink>
                <NavLink className="navbar__nav__link" to={"/"}>
                    Profil
                </NavLink>
                <NavLink className="navbar__nav__link" to={"/"}>
                    Réglage
                </NavLink>
                <NavLink className="navbar__nav__link" to={"/"}>
                    Communauté
                </NavLink>
            </nav>
        </header>
    );
};
export default Header;
