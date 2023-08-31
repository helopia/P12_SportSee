import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import {getUserActivity, getUserAverageSessions, getUserData, getUserPerformance} from "../router/mockedData";
import {getUserActivity, getUserMainData, getUserPerformance, getUserSession} from "../utils/api";


const Users = () => {
    // tout regroupé ici avec un seul objet général pour les objectives etc etc... et la page envoies via les props, a faire, attention c'est pas conseillé de faire des appels de service dans les components
    const {id} = useParams();
    const [data, setData] = useState({});
    useEffect(() => {

        async function getData() {
            try {
                const user = await getUserMainData(id);
                const activity = await getUserActivity(id);
                const sessions = await getUserSession(id);
                const performance = await getUserPerformance(id);
                setData({user, activity, sessions, performance});
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, [id]);
    console.log("data", data)
    return (
        <main>
            <h1>Bonjour {data?.user?.firstName}</h1>
            {/*<Informations></Informations>*/}
            {/*<Weight></Weight>*/}
            {/*<Objectives></Objectives>*/}
            {/*<Radar></Radar>*/}
        </main>
    )
}
export default Users;