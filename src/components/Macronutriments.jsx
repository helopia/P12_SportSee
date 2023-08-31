import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserData} from "../utils/api";

const Macronutriments = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        getUserData(id).then(r => setUserData(r.data))
    }, [id])
    if (!userData)
        return "bad getaway"
    return (
        <section>
            <p>calories protéines glucides lipides</p>
        </section>
    )
}
export default Macronutriments;
