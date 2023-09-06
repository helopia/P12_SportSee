import React from "react";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";

const RadarComponent = ({performance}) => {
    console.log("performance", performance)
    return (

        <section className="performance">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    data={performance}
                >
                    <PolarGrid/>
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="white"
                        tickLine={false}
                    />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6}/>
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}
export default RadarComponent;

