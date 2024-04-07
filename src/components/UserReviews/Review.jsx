import React from "react";
import { FaStar } from "react-icons/fa6";

const Review = ({ reviews }) => {
  return (
    <div>
      {reviews.map((data) => {
        const cl=(data.id===6)? "":"border-b border-gray-300";
        const cl_name=`flex flex-col gap-6 ${cl} pb-6 mb-6`;
        return (
          <div
            key={data.id}
            className={cl_name}>
            <div className="flex gap-2 text-2xl">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-700">
              {data.name}
            </h1>
            <p className="text-xl text-gray-500 text-justify">{data.review}</p>
            <p className="py-2 px-6 text-sm border border-gray-300 text-gray-700 rounded-full w-fit">
              {data.category}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
