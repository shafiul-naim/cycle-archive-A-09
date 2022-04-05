import React from "react";
import MyLineChart from "../MyLineChart/MyLineChart";
import SimpleAreaChart from "../SimpleAreaChart/SimpleAreaChart";
import SimpleScatterChart from "../SimpleScatterChart/SimpleScatterChart";
import SpecialLineChart from "../SpecialLineChart/SpecialLineChart";


const Dashboard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 justify-items-center p-3 m-3">
   <SimpleScatterChart></SimpleScatterChart>
   <SpecialLineChart></SpecialLineChart>
   <SimpleAreaChart></SimpleAreaChart>
   <MyLineChart></MyLineChart>
   </div>
     
  );
};

export default Dashboard;
