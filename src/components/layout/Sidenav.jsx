import React from "react";
// import "../../assets/sass/layout/_header.scss";
import Bike from "../../assets/images/Bike.svg"
import Haltere from "../../assets/images/Haltere.svg"
import Medium from "../../assets/images/Medium.svg"
import Swim from "../../assets/images/Swim.svg"

const Sidenav = () => {
    return (
        <nav className="sidenav">
            <img src={Medium} alt="Medium"/>
            <img src={Swim} alt="Swim"/>
            <img src={Bike} alt="Bike"/>
            <img src={Haltere} alt="Haltere"/>
        </nav>
    );
};
export default Sidenav;
