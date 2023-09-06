import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserMainData} from "../utils/api";
import Card from "./Card";
import Calories from "../assets/images/calories-icon.svg";
import Protein from "../assets/images/proteines-icon.svg";
import Carbs from "../assets/images/glucides-icon.svg";
import Fat from "../assets/images/lipides-icon.svg";

const Macronutriments = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            const infos = await getUserMainData(id);
            setData(infos);
        }

        getData();
    }, [id]);

    return (
        <div className="informations">
            <Card
                className="calories"
                src={Calories}
                alt="Logo Flamme"
                textClassName="calories"
                data={`${data?.keyData.calorieCount}kCal`}
                text="Calories "
            />

            <Card
                className="protein"
                src={Protein}
                alt="Logo poulet"
                textClassName="protein"
                data={`${data?.keyData.proteinCount}g`}
                text="Protéines"
            />

            <Card
                className="carbs"
                src={Carbs}
                alt="Logo pomme"
                textClassName="carbs"
                data={`${data?.keyData.carbohydrateCount}g`}
                text="Glucides"
            />

            <Card
                className="fat"
                src={Fat}
                alt="Logo burger"
                textClassName="fat"
                data={`${data?.keyData.lipidCount}g`}
                text="Lipides"
            />
        </div>
    )
}
export default Macronutriments;
