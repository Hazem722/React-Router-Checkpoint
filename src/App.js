import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import data from "./data.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [stars, setStars] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  }, []);

  return (
    <Router>
      <div>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          stars={stars}
          setStars={setStars}
        />
        <AddMovie setMovies={setMovies} />
        <div className="Content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  movies={movies}
                  setMovies={setMovies}
                  searchValue={searchValue}
                  stars={stars}
                />
              }
            />
            <Route path="/:title" element={<Movie movies={movies} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
