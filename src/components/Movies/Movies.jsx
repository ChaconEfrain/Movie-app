import React from "react";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

export default function Movies({ movies, getMovieDetail }) {
  return (
    <div className={styles.moviesContainer}>
      {movies.map((movie) => (
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
