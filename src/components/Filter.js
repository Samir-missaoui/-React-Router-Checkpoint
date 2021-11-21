import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ FilterIn, filterStar }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search movie"
        onChange={(e) => FilterIn(e.target.value)}
      />
      <StarRatingComponent
        name="rate1"
        starCount={5}
        onStarClick={(rating) => filterStar(rating)}
      />
    </div>
  );
};

export default Filter;
