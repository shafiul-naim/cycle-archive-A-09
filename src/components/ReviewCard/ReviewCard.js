import React from "react";


const ReviewCard = ({ cycle }) => {
  const { name, Ratings, review, img } = cycle;

  return (
    <div className="shadow-lg rounded-2xl w-{250px} bg-white p-4 h-15">
      <div className="flex gap-4 justify-center items-center">
        <div className="flex-shrink-0 px-2">
          <img
            className="mx-auto object-cover rounded-full h-16 w-16"
            src={img}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-end">
          <span className="font-bold text-gray-600 text-2xl">{name}</span>
          <span className="text-gray-600 text-lg py-2">{review}</span>
          <p className="text-3xl font-sans font-semibold text-yellow-900">Ratings: <span className="text-3xl text-yellow-600  py-2">{Ratings}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
