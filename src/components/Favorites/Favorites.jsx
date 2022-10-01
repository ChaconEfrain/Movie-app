import React from "react";
import Movie from "../Movie/Movie";
import styles from "./Favorites.module.css";

export default function Favorites({ favorites, getMovieDetail }) {
  return (
    <div className={styles.moviesContainer}>
      {favorites.map((movie) => (
        <Movie
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          getMovieDetail={() => getMovieDetail(movie.imdbID)}
        />
      ))}
    </div>
  );
}
