import React from "react";
// import {useParams} from "react-router-dom";
// import {getUserActivity} from "../utils/api";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {ReactComponent as Dot} from "../assets/images/Dot.svg";

const CustomToolTip = ({active, payload}) => {
    return active && payload ? (
        <div className="tooltip">
            <div className="weight">{`${payload[0].value} Kg`}</div>
            <div className="calories">{`${payload[1].value} KCal`}</div>
        </div>
    ) : null;
};

const Weight = ({activity}) => {
    console.log("activity", activity)
    return (
        <div className="activity">
            <div className="activity__header">
                <h3>Activité quotidienne</h3>
                <div className="activity__header__legend">
                    <Dot fill="#282D30" className="activity__legend__dot"/>
                    <span>Poids (kg)</span>
                    <Dot fill="#E60000" className="activity__legend__dot"/>
                    <span>Calories brûlées (kCal)</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="70%">
                <BarChart
                    data={activity}
                    width={500}
                    height={300}
                    barCategoryGap={35}
                    barGap={8}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="day" axisLine={false} tickLine={false}/>
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
                    <Tooltip content={<CustomToolTip/>}/>
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[50, 50, 0, 0]}
                        yAxisId={"kil"}
                        barSize={15}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[50, 50, 0, 0]}
                        yAxisId={"cal"}
                        barSize={15}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Weight;
