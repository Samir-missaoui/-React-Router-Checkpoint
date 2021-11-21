import React from "react";
import { useParams } from "react-router-dom";

const MovieDesc = ({ movies }) => {
  const params = useParams();
  const newmovie = movies.find((movie) => movie.id == +params.id);
  return <div>{newmovie.movieName}</div>;
};

export default MovieDesc;
