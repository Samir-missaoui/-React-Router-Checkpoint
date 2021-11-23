import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ setsearchInput, setstar }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search movie"
        onChange={(e) => setsearchInput(e.target.value)}
      />
      <StarRatingComponent
        name="rate1"
        starCount={5}
        onStarClick={(rating) => setstar(rating)}
      />
    </div>
  );
};

export default Filter;
