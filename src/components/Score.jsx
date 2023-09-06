import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";

const Score = ({score}) => {
    const data = [{uv: score, fill: "#E60000"}];
    return (

        <div className="score">
            <div className="score__header">
                <h1>Score</h1>
            </div>
            <ResponsiveContainer width="100%" height="80%">
                <RadialBarChart
                    data={data}
                    width={250}
                    height={250}
                    innerRadius={70}
                    startAngle={80}
                    endAngle={450}
                    barCategoryGap={0}
                >
                    <circle cx="50%" cy="50%" fill="white" r="82"></circle>
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={1}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="uv"
                        angleAxisId={1}
                        cornerRadius="10"
                    />
                </RadialBarChart>
            </ResponsiveContainer>


            <div className="score__label">
                <div className="score__label__number">{score} %</div>
                <div className="score__label__text">de votre objectif</div>
            </div>
        </div>
    )

}
export default Score;
