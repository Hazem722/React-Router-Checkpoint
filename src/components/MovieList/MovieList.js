import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { nanoid } from "nanoid";

function MovieList({ movies, searchValue, stars }) {
  const filteredMovies = movies.filter((movie) => {
    if (searchValue === "" && stars === 0) {
      return movie;
    } else if (searchValue) {
      return movie.Title.toLowerCase().includes(searchValue);
    } else if (stars) {
      return movie.rating === stars;
    }
  });
  return (
    <div className="styles">
      {filteredMovies.length ? (
        filteredMovies.map((movie) => (
          <MovieCard
            key={nanoid()}
            title={movie.Title}
            ImgUrl={movie.Poster}
            description={movie.Type}
            rating={movie.rating}
            clickable={movie.clickable}
          />
        ))
      ) : (
        <h1 className="text-danger"> No movies found </h1>
      )}
    </div>
  );
}

export default MovieList;
