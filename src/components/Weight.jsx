import React from "react";
// import {useParams} from "react-router-dom";
// import {getUserActivity} from "../utils/api";
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const CustomToolTip = ({active, payload}) => {
    return active && payload ? (
        <div className="tooltip">
            <div className="poids">{`${payload[0].value} Kg`}</div>
            <div className="calories">{`${payload[1].value} KCal`}</div>
        </div>
    ) : null;
};

const Weight = ({activity}) => {
    console.log("activity", activity)
    return (
        <section>
            <h3>Activité quotidienne</h3>
            <p>Poids (kg)</p>
            <p>Calories brûlées (kCal)</p>
            <BarChart
                width={730}
                height={250}
                data={activity}
                
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="day"/>
                <YAxis/>
                <Tooltip content={<CustomToolTip/>}/>
                <YAxis
                    yAxisId={"kil"}
                    domain={["dataMin - 2", "dataMax + 1"]}
                    tickLine={false}
                    orientation="right"
                    dataKey="kilogram"
                    axisLine={false}
                />
                <YAxis
                    yAxisId={"cal"}
                    hide={true}
                    domain={["dataMin - 100", "dataMax + 50"]}
                />
                <Bar
                    dataKey="kilogram"
                    fill="#282D30"
                    radius={[50, 50, 0, 0]}
                    // yAxisId={"kil"}
                    barSize={15}/>
                <Bar
                    dataKey="calories" fill="#E60000"
                    radius={[50, 50, 0, 0]}
                    // yAxisId={"cal"}
                    barSize={15}
                />
            </BarChart>
        </section>
    )
}
export default Weight;
