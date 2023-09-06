import React from "react";
// import "../../assets/sass/layout/_header.scss";
import Bike from "../../assets/images/Bike.svg"
import Haltere from "../../assets/images/Haltere.svg"
import Medium from "../../assets/images/Medium.svg"
import Swim from "../../assets/images/Swim.svg"
import {NavLink} from "react-router-dom";

const Sidenav = () => {
    return (
        <nav className="sidenav">
            <div className="sidenav__content">
                <div className="sidenav__content__links">
                    <NavLink to="#">
                        <img src={Medium} alt="Medium"/>
                    </NavLink>
                    <NavLink to="#">
                        <img src={Swim} alt="Swim"/>
                    </NavLink>
                    <NavLink to="#">
                        <img src={Bike} alt="Bike"/>
                    </NavLink>
                    <NavLink to="#">
                        <img src={Haltere} alt="Haltere"/>
                    </NavLink>
                </div>
                <p className="sidenav__content__copyright">Copyright, SportSee 2020</p>
            </div>
        </nav>
    );
};
export default Sidenav;
