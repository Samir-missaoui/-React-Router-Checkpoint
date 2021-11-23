import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

const initialition = {
  movieName: "",
  movieImg: "",
  movieRating: "",
  trailer: "",
  desc: "",
};

const AddMovie = ({ setMovieContainer }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState(initialition);
  const handleInput = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieContainer((prev) => [...prev, { ...newMovie, id: uuidv4() }]);
    handleClose();
    setNewMovie(initialition);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form>
          <input
            value={newMovie.movieName}
            type="text"
            placeholder="Movie title"
            name="movieName"
            onChange={handleInput}
          />
          <input
            value={newMovie.movieImg}
            type="text"
            placeholder="Movie image"
            name="movieImg"
            onChange={handleInput}
          />
          <input
            value={newMovie.movieRating}
            type="text"
            placeholder="Movie rating"
            name="movieRating"
            onChange={handleInput}
          />
          <input
            value={newMovie.trailer}
            type="text"
            placeholder="Movie trailer"
            name="trailer"
            onChange={handleInput}
          />
          <input
            value={newMovie.desc}
            type="text"
            placeholder="Movie description"
            name="desc"
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>Add Movie</button>
        </form>
      </Modal>
    </>
  );
};

export default AddMovie;
