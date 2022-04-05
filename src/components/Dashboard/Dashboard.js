import React from "react";
import MyLineChart from "../MyLineChart/MyLineChart";
import SimpleAreaChart from "../SimpleAreaChart/SimpleAreaChart";
import SimpleScatterChart from "../SimpleScatterChart/SimpleScatterChart";
import SpecialLineChart from "../SpecialLineChart/SpecialLineChart";


const Dashboard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 justify-items-center">
   <MyLineChart></MyLineChart>
   <SimpleScatterChart></SimpleScatterChart>
   <SpecialLineChart></SpecialLineChart>
   <SimpleAreaChart></SimpleAreaChart>
   </div>
     
  );
};

export default Dashboard;
