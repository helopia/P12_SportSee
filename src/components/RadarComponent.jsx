import React from "react";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart} from "recharts";

const RadarComponent = ({performance}) => {
    console.log("performance", performance)
    return (

        <section>
            <p>ici radar</p>
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
                <Radar
                    dataKey="value"
                    fill="#FF0101"
                    fillOpacity={0.6}/>
            </RadarChart>
        </section>
    )
}
export default RadarComponent;

