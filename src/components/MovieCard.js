import React from "react";
import { Link, usehi } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/MovieDesc/${movie.id}`}>
        <h5>{movie.movieName}</h5>
        <img src={movie.movieImg} />
      </Link>
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={5}
        value={movie.movieRating}
      />
    </div>
  );
};

export default MovieCard;
