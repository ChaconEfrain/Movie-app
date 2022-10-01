import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Movies from "./components/Movies/Movies";
import MovieDetail from "./components/MovieDetails/MovieDetail";

function App() {
  const apiKey = "8b6748e9";
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});

  const getMovies = (movieTitle) =>
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`).then(
      (res) => res.json().then((data) => setMovies(data.Search))
    );

  const getMovieDetail = (id) =>
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`).then((res) =>
      res.json().then((data) => setMovieDetail(data))
    );

  return (
    <div className="App">
      <Nav getMovies={getMovies} />
      <Routes>
        <Route
          path="/"
          element={<Movies getMovieDetail={getMovieDetail} movies={movies} />}
        />
        <Route
          path="/movie/:movieId"
          element={<MovieDetail movieDetail={movieDetail} />}
        />
      </Routes>
    </div>
  );
}

export default App;
