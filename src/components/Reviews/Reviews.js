import React from "react";
import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";
// import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);
  const [cycles] = useReview();
  console.log(cycles);
  // useEffect(() => {
  //     fetch('data.json')
  //     .then(res => res.json())
  //     .then( data => setReviews(data))
  // }, ([]))
  return (
    <div>
      <p className="my-8 py-3 text-center font-bold text-3xl text-gray">
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
