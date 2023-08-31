import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserAverageSessions} from "../utils/api";
import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {request} from "axios";

const Objectives = () => {
    const {id} = useParams();
    const [userAverageSessions, setUserAverageSessions] = useState(null);
    useEffect(() => {
        getUserAverageSessions(id).then(r => setUserAverageSessions(r.data.sessions))
    }, [id])
    if (!userAverageSessions)
        return "bad getaway"
    console.log("userAverageSessions", userAverageSessions)

    const reformatUserAverageSessions = request.data.sessions.map((userAverageSessions) => {
        switch (userAverageSessions.day) {
            case 1 :
                return {...userAverageSessions, day: "L"};
            case 2 :
                return {...userAverageSessions, day: "M"};
            case 3 :
                return {...userAverageSessions, day: "M"};
            case 4 :
                return {...userAverageSessions, day: "J"};
            case 5 :
                return {...userAverageSessions, day: "V"};
            case 6 :
                return {...userAverageSessions, day: "S"};
            case 7 :
                return {...userAverageSessions, day: "D"};
            default:
                return {...userAverageSessions};
        }
    });
    setUserAverageSessions(reformatUserAverageSessions);

    return (
        <>
            <h3>Durée moyenne des sessions</h3>
            <LineChart data={setUserAverageSessions} strokeWidth={1}
            >
                <XAxis
                    type="category"
                    dataKey="day"
                    tickLine={true}
                    stroke="red"
                    padding={{right: 5, left: 5}}
                    tick={{fontSize: 13, stroke: "white", opacity: 0.8}}
                />
                <YAxis
                    dataKey="sessionLength"

                />
                <Tooltip/>
                <Line
                    type="monotone"
                    dataKey="sessionLength"

                />
            </LineChart>
        </>
    )
}
export default Objectives;

