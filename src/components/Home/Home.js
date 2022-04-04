import React from "react";
import { useNavigate } from "react-router-dom";
import Cycle from "../../assests/image/cycle.jpg";
import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Home.css";

const Home = () => {
  const [cycles] = useReview();
  const navigate = useNavigate();
  return (
    <>
      <div className="banner">
        <div className="banner-left">
          <p className="banner-left-1">Life is like riding a bicycle</p>
          <p className="banner-left-2">
            To keep your balance you must keep moving
          </p>
          <p className="banner-left-3">
            Cycle is something that you need in your life that you did not know
            until you ride one .See what peoples say about our cycles.Choose one
            according to your need.you will never dissappoint.
          </p>
        </div>
        <div className="banner-right">
          <img src={Cycle} alt="" />
        </div>
      </div>
     <div>
         <hr />
     <p className="my-8 py-3 text-center font-bold text-3xl text-gray">
        Reviews
      </p>
     <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-item-center">
        {(cycles.map((cycle) => (
          <ReviewCard key={cycle.id} cycle={cycle}></ReviewCard>
        ))).slice(0,3)}
      </div>
      <button className="text-xl p-2 border m-5 bg-lime-600 text-white rounded-md " onClick={() => navigate('/reviews')}>See more reviews</button>
     </div>
    </>
  );
};

export default Home;
