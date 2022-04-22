import React from "react";
import MovieList from "./MovieList/MovieList";

function Home({ movies, searchValue, stars }) {
  return (
    <div className="home">
      <MovieList movies={movies} searchValue={searchValue} stars={stars} />
    </div>
  );
}

export default Home;
