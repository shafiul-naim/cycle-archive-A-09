import React from "react";
import MyLineChart from "../MyLineChart/MyLineChart";
import SpecialLineChart from "../SpecialLineChart/SpecialLineChart";


const Dashboard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 justify-item-center">
   <MyLineChart></MyLineChart>
   <SpecialLineChart></SpecialLineChart>
   </div>
     
  );
};

export default Dashboard;
