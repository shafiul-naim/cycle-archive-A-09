import React from 'react';

const ReviewDetails = ({review}) => {
    console.log(review)
    return (
        <div className='shadow-lg rounded-2xl w-{250px} bg-white p-4'>
            <div className="flex gap-4 justify-between items-center">
          <div className="flex-shrink-0">
            <img
              className="mx-auto object-cover rounded-full h-16 w-16"
              src={review.image}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-end">
            <span className="font-bold text-gray-600 text-2xl">{review.name}</span>
            <span className="text-gray-600 text-lg py-2">{review.review}</span>
            <span className="text-blue-800 text-lg py-2">Rating: {review.Ratings}</span>
          </div>
        </div>
        </div>
    );
};

export default ReviewDetails;