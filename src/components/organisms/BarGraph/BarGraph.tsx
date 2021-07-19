import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

interface BarGraphProps {
    weatherData: any,
    currentCardDate: string,
    temperatureUnit: string
}

const BarGraph = ({weatherData, currentCardDate, temperatureUnit}: BarGraphProps) => {
    const graphData = weatherData && weatherData[currentCardDate].segments;

    return (weatherData &&
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={graphData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="time"
                />
                <YAxis />
                <Tooltip />
                <Legend />
                {temperatureUnit === 'celsius' && <Bar dataKey="temperatureInCelsius" fill="#3f50b5" />}
                {temperatureUnit === 'fahrenheit' && <Bar dataKey="temperatureInFahrenheit" fill="#f50057" />}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarGraph;
