import React from "react";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const StarRatingSM = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => {
  return (
    <div className="ratings flex items-center justify-center">
      <StarRatings
        rating={rating}
        starRatedColor="red"
        starDimension="17px"
        starSpacing="1px"
      />
      <span className="ml-2 cinzel text-darkGold">({reviews} Reviews)</span>
    </div>
  );
};

export default StarRatingSM;
