import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserActivity} from "../utils/api";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";


const Weight = () => {
    const {id} = useParams();
    const [userActivity, setUserActivity] = useState([]);
    useEffect(() => {
        getUserActivity(id).then(r => setUserActivity(r.data.sessions))
    }, [id])
    if (!userActivity)
        return "bad getaway"
    console.log("userActivity", userActivity)
    return (
        <section>
            <h3>Activité quotidienne</h3>
            <p>Poids (kg)</p>
            <p>Calories brûlées (kCal)</p>
            <BarChart width={730} height={250} data={userActivity}>
                <CartesianGrid strokeDasharray="1 1"/>
                <XAxis dataKey="day"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <YAxis yAxisId="kilogram" dataKey="kilogram" domain={['dataMin - 2', 'dataMax + 1']}
                       orientation="right"/>
                <YAxis yAxisId="calories" type="number" dataKey="calories" hide={true}
                       domain={['dataMin - 20', 'dataMax + 10']}
                />
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
            </BarChart>

        </section>
    )
}
export default Weight;
