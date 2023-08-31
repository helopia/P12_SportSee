import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserData} from "../utils/api";

const Informations = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        getUserData(id).then(r => setUserData(r.data))
    }, [id])
    if (!userData)
        return "bad getaway"
    return (
        <section>
            <h1>Bonjour {userData?.userInfos?.firstName}</h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </section>
    )
}
export default Informations;
