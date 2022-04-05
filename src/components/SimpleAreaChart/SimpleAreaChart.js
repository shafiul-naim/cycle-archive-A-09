import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleAreaChart = () => {
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
        <AreaChart  
          width={300}
          height={300}
          data={chartData}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sell" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
};

export default SimpleAreaChart;