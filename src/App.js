import logo from "./logo.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { useState } from "react";
import Filter from "./components/Filter";
import { Route, Routes } from "react-router-dom";
import MovieDesc from "./Pages/MovieDesc";

const movies = [
  {
    id: uuidv4(),
    movieName: "John Wick 1",
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    movieRating: 5,
    trailer: "https://www.youtube.com/embed/C0BMx-qxsP4",
    desc: "John Wick is a fictional character and the titular protagonist of the neo-noir action thriller film series John Wick, portrayed by Keanu Reeves. John is a legendary hitman who had retired until a gang invades his house, steals his car, and kills the puppy that his late wife Helen had given him.",
  },
  {
    id: uuidv4(),
    movieName: "Creed",
    movieImg: "https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/embed/Uv554B7YHk4",
    desc: "Creed is a 2015 American sports drama film directed by Ryan Coogler from a story by Coogler and a screenplay written by Coogler, Aaron Covington, and Sylvester Stallone who wrote all the scenes and dialogues with his character in the film.[4] Both a sequel and spin-off to the Rocky franchise,[5][6][7] serving as the seventh installment of the series and a sequel to 2006's Rocky Balboa, Michael B. Jordan stars as Adonis Donnie Johnson Creed, Apollo Creed's son, with Sylvester Stallone reprising the role of Rocky Balboa. It also features Tessa Thompson, Phylicia Rashad, Tony Bellew, and Graham McTavish. The film reunites Jordan with 2013's Fruitvale Station writer-director Coogler, as well as Wood Harris, with whom Jordan had worked on the television series The Wire.",
  },
  {
    id: uuidv4(),
    movieName: "Avengers Endgame",
    movieImg:
      "https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg",
    movieRating: 3,
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    desc: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War.",
  },
  {
    id: uuidv4(),
    movieName: "Spiderman Homecoming",
    movieImg:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
    movieRating: 3,
    trailer: "https://www.youtube.com/embed/n9DwoQ7HWvI",
    desc: "Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the second Spider-Man film reboot and the 16th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, from a screenplay by the writing teams of Jonathan Goldstein and John Francis Daley, Watts and Christopher Ford, and Chris McKenna and Erik Sommers. Tom Holland stars as Peter Parker / Spider-Man, alongside Michael Keaton, Jon Favreau, Gwyneth Paltrow, Zendaya, Donald Glover, Jacob Batalon, Laura Harrier, Tony Revolori, Bokeem Woodbine, Tyne Daly, Marisa Tomei, and Robert Downey Jr. In Spider-Man: Homecoming, Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture (Keaton).",
  },
];
function App() {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setsearchInput] = useState("");
  const [star, setstar] = useState(0);
  const getData = (info) => {
    setMovieList([...movieList, info]);
  };
  const FilterIn = (info) => {
    setsearchInput(info);
  };
  const filterStar = (info) => {
    setstar(info);
  };

  return (
    <div className="App">
      <AddMovie getData={getData} />
      <Filter FilterIn={FilterIn} filterStar={filterStar} />
      <Routes>
        <Route
          path="/MovieDesc/:id"
          element={<MovieDesc movies={movieList} />}
        />
        <Route
          path="/"
          element={
            <MovieList
              movies={
                movieList.filter((movie) =>
                  movie.movieName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase().trim())
                ) && movieList.filter((movie) => movie.movieRating >= star)
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
