import {Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis} from "recharts";


const CustomToolTip = ({active, payload}) => {
    return active && payload ? (
        <div className="tooltip-session">
            <div className="min">{`${payload[0].value} min`}</div>
        </div>
    ) : null;
};


const Cursor = ({points}) => {
    return (
        <Rectangle
            fill="#000000"
            opacity={0.1}
            x={points[1].x}
            width={1000}
            height={300}
        />
    );
};
const Objectives = (sessions) => {
    console.log("sessions", sessions)
    return (
        <div className="session">
            <div className="session__header">
                <h1>Durée moyenne des sessions</h1>
            </div>
            <ResponsiveContainer width="100%" height="70%">
                <LineChart
                    data={sessions.sessions}
                    width={500}
                    height={300}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <XAxis
                        tickLine={false}
                        dataKey="day"
                        axisLine={false}
                        stroke="#fff"
                    />
                    <Tooltip content={<CustomToolTip/>} cursor={<Cursor/>}/>
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#fff"
                        dot={false}
                        activeDot={{r: 3}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default Objectives;

