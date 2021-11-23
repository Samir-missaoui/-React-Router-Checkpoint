import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDesc = ({ movieContainer }) => {
  const params = useParams();
  const navigate = useNavigate();
  const newmovie = movieContainer.find((movie) => movie.id === params.id);
  return (
    <div>
      <button onClick={() => navigate(-1)}>goBack</button>
      <div>{newmovie.desc}</div>
      <div>{newmovie.trailer}</div>
    </div>
  );
};

export default MovieDesc;
