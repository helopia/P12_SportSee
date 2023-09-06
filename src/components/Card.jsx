import React from "react";

const Card = (props) => {
    console.log("props", props)
    return (
        <div
            className={`informations__${props.className}`}
        >
            <img src={props.src} alt={props.alt}/>
            <div className={`${props.textClassName}__text`}>
                <h1>{props.data}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default Card;
