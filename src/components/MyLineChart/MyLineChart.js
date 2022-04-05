import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import useChart from "../../hooks/useChart";

const MyLineChart = () => {
  const [chartData] = useChart();

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
