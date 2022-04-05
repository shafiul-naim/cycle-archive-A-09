import React, { useEffect, useState } from "react";
import { BarChart, Bar, Tooltip, XAxis, YAxis } from "recharts";

const SpecialLineChart = () => {
    const [chartData, setChartData] = useState([]);

  useEffect(() => {
      fetch("rechartData.json")
      .then(res => res.json())
      .then((data) => {
        setChartData(data);
      });
  }, []);
    return (
        <BarChart width={300} height={300} data={chartData}>
      <Bar dataKey="investment" fill="#8884d8" />
      <XAxis dataKey="sell"></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </BarChart>
    );
};

export default SpecialLineChart;