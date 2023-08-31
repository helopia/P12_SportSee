import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserPerformance} from "../utils/api";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, ResponsiveContainer} from "recharts";

const Radar = () => {
    const {id} = useParams();
    const [userPerformance, setUserPerformance] = useState(null);
    useEffect(() => {
        getUserPerformance(id).then(r => setUserPerformance(r.data))
    }, [id])
    if (!userPerformance)
        return "bad getaway"
    console.log("userPerformance", userPerformance)

    return (
        <section>
            coucou radar
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance}>
                    <PolarGrid gridType="polygon"/>
                    <PolarAngleAxis dataKey="subject"/>
                    <PolarRadiusAxis dataKey="kind"/>
                    <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.7}/>
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}
export default Radar;
