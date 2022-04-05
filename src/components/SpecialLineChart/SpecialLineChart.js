import React from "react";
import { BarChart, Bar, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const SpecialLineChart = () => {
  const [chartData] = useChart();
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
