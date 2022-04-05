import React from "react";
import { useNavigate } from "react-router-dom";
import Cycle from "../../assests/image/cycle.jpg";
import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const Home = () => {
  const [cycles] = useReview();
  const navigate = useNavigate();
  
  
  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 justify-item-center ">
       <div className="flex gap-4 justify-center items-center">
       <div className="flex flex-col justify-end">
          <p className="text-3xl font-sans font-semibold text-cyan-900">Life is like riding a bicycle</p>
          <p className="text-2xl font-sans font-semibold text-teal-900">
            To keep your balance you must keep moving
          </p>
          <p className="text-center p-5 text-xl align-middle text-slate-900">
            Cycle is something that you need in your life that you did not know
            until you ride one .See what peoples say about our cycles.Choose one
            according to your need.you will never dissappoint.
          </p>
          <a  className="text-xl p-2 border w-1/4 text-center mx-auto text-white rounded-md bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300" href="https://dashing-travesseiro-d7f3ae.netlify.app" target="_blank">Visit Shop</a>
          
        </div>
        
       </div>
       
        <div className="banner-right">
          <img className="mx-auto p-5 bg-white object-cover h-full w-full" src={Cycle} alt="" />
        </div>
       
      </div>
     
      <div className="review-container p-8">
        <hr />
        <p className="my-8 py-3 text-center font-bold text-3xl text-lime-800 underline decoration-stone-600 underline-offset-8">
          Reviews
        </p>
       
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-item-center">
          {cycles
            .map((cycle) => (
              <ReviewCard key={cycle.id} cycle={cycle}></ReviewCard>
            ))
            .slice(0, 3)}
        </div>
        <button
          className="text-xl p-2 border m-5 text-white rounded-md bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300"
          onClick={() => navigate("/reviews")}
        >
          See more reviews
        </button>
      </div>
    </>
  );
};

export default Home;
