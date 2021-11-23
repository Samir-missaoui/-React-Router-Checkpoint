import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MovieDesc from "./Pages/MovieDesc";
import movies from "./components/Movies";
import Home from "./Pages/Home";

function App() {
  const [movieContainer, setMovieContainer] = useState(movies);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movieContainer={movieContainer}
              setMovieContainer={setMovieContainer}
            />
          }
        />
        <Route
          path="/MovieDesc/:id"
          element={<MovieDesc movieContainer={movieContainer} />}
        />
      </Routes>
    </div>
  );
}

export default App;
