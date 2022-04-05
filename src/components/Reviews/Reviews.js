import React from "react";
import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";
// import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);
  const [cycles] = useReview();
  console.log(cycles);
  return (
    <div className="p-8">
      <p className="my-8 py-3 text-center font-bold text-3xl  text-emerald-800">
        What our customer say
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-item-center">
        {cycles.map((cycle) => (
          <ReviewCard key={cycle.id} cycle={cycle}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
