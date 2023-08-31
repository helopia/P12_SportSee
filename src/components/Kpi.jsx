import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserData} from "../utils/api";

const Kpi = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        getUserData(id).then(r => setUserData(r.data))
    }, [id])
    if (!userData)
        return "bad getaway"
    return (
        <section>
            <h3>Score</h3>
        </section>
    )
}
export default Kpi;
