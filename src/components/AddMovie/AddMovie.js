import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function AddMovie({ setMovies }) {
  const [clicked, setClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  function addMovies() {
    setClicked(true);
    document.querySelector(".add-movie-btn").style.display = "none";
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.querySelector("#root").appendChild(overlay);
    setSubmitted(false);
  }
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const ratingChanged = (newRating) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, rating: newRating };
    });
    return newRating;
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setClicked(false);
    setMovies((prevMovies) => {
      return [
        {
          Title: formData.title,
          Type: formData.description,
          Poster: formData.posterURL,
          rating: formData.rating,
        },
        ...prevMovies,
      ];
    });
    setFormData({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
    document
      .querySelector("#root")
      .removeChild(document.querySelector(".overlay"));
  }
  return (
    <div className="add-movie">
      {!clicked && (
        <button className="add-movie-btn" onClick={addMovies}>
          +
        </button>
      )}

      {clicked && !submitted && (
        <form
          className="d-flex flex-column align-items-center justify-content-between form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Type Movie Name"
            onChange={handleChange}
            name="title"
            value={formData.title}
          />
          <input
            type="text"
            placeholder="Type Movie Description"
            onChange={handleChange}
            name="description"
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Movie posterURL"
            onChange={handleChange}
            name="posterURL"
            value={formData.posterURL}
          />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
            value={formData.rating ? formData.rating : 0}
          />
          <input type="submit" value="add" />
        </form>
      )}
    </div>
  );
}

export default AddMovie;
