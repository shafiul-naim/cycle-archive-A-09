import React, { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const SimpleRadarChart = () => {
    const [chartData, setChartData] = useState([]);

  useEffect(() => {
      fetch("rechartData.json")
      .then(res => res.json())
      .then((data) => {
        setChartData(data);
      });
  }, []);
    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="60%" cy="50%" outerRadius="50%" data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis />
          <Radar  dataKey="sell" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
};

export default SimpleRadarChart;