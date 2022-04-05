import React, { useEffect, useState } from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip} from "recharts";

const MyLineChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch("rechartData.json")
        .then(res => res.json())
        .then((data) => {
          setChartData(data);
        });
    }, []);
    return (
        <LineChart width={300} height={300} data={chartData}>
      <Line dataKey={"investment"}></Line>
      <Line dataKey={"sell"}></Line>
      <XAxis dataKey={"revenue"}></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </LineChart>
    );
};

export default MyLineChart;