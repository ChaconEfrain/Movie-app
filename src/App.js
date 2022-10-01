import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Movies from "./components/Movies/Movies";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const apiKey = "8b6748e9";
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [favorites, setFavorites] = useState([]);

  const getMovies = (movieTitle) =>
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`).then(
      (res) => res.json().then((data) => setMovies(data.Search))
    );

  const getMovieDetail = (id) =>
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`).then((res) =>
      res.json().then((data) => setMovieDetail(data))
    );

  const addToFavorites = (movie) => {
    if (!favorites.includes(movie)) {
      setFavorites((oldMovies) => [...oldMovies, movie]);
    }
  };

  return (
    <div className="App">
      <Nav getMovies={getMovies} />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              addToFavorites={addToFavorites}
              getMovieDetail={getMovieDetail}
              movies={movies}
            />
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieDetail movieDetail={movieDetail} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} getMovieDetail={getMovieDetail} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
