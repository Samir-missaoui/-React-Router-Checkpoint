import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";
import { useState } from "react";
import Filter from "../components/Filter";

const Home = ({ movieContainer, setMovieContainer }) => {
  const [searchInput, setsearchInput] = useState("");
  const [star, setstar] = useState(0);

  return (
    <div>
      <AddMovie setMovieContainer={setMovieContainer} />
      <Filter setsearchInput={setsearchInput} setstar={setstar} />
      <MovieList
        movies={movieContainer.filter((movie) =>
          searchInput && star
            ? movie.movieName
                .toLowerCase()
                .includes(searchInput.toLowerCase().trim()) &&
              movie.movieRating === star
            : searchInput
            ? movie.movieName
                .toLowerCase()
                .includes(searchInput.toLowerCase().trim())
            : star
            ? movie.movieRating === star
            : movie
        )}
      />
    </div>
  );
};

export default Home;
