import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const AddMovie = ({ getData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({});
  const handleInput = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(newMovie);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form>
          <input
            type="text"
            placeholder="Movie title"
            name="movieName"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Movie image"
            name="movieImg"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Movie rating"
            name="movieRating"
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>Add Movie</button>
        </form>
      </Modal>
    </>
  );
};

export default AddMovie;
