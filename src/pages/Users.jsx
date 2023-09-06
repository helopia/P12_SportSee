import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import {getUserActivity, getUserAverageSessions, getUserData, getUserPerformance} from "../router/mockedData";
import {getUserActivity, getUserMainData, getUserPerformance, getUserSession} from "../utils/api";
import Macronutriments from "../components/Macronutriments";
import Weight from "../components/Weight";
import Objectives from "../components/Objectives";
import RadarComponent from "../components/RadarComponent";
import Score from "../components/Score";


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

        <section className="user">
            <div className="user__welcome">
                <h1>
                    Bonjour <span>{data?.user?.firstName}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="user__chart">
                <article className="user__chart__box">
                    <Weight activity={data?.activity?.sessions}></Weight>
                    <div className="user__chart__box-bottom">
                        <Objectives sessions={data?.sessions?.sessionData}></Objectives>
                        <RadarComponent performance={data?.performance?.formatPerf}/>
                        <Score score={data?.user?.score[0]?.value}></Score>
                    </div>
                </article>
                <article className="user__chart__macronutriments">
                    <Macronutriments></Macronutriments>
                </article>
            </div>
        </section>

    )
}
export default Users;
