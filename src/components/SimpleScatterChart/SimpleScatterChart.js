import React, { useEffect, useState } from 'react';
import { CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleScatterChart = () => {
    const [chartData, setChartData] = useState([]);

  useEffect(() => {
      fetch("rechartData.json")
      .then(res => res.json())
      .then((data) => {
        setChartData(data);
      });
  }, []);
    return (
        <ScatterChart
          width={300}
          height={300}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="investment" unit="tk" />
          <YAxis type="number" dataKey="sell"  unit="tk" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={chartData} fill="#8884d8" />
        </ScatterChart>
    );
};

export default SimpleScatterChart;