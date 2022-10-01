import React from "react";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

export default function Movies({ movies, getMovieDetail, addToFavorites }) {
  return (
    <div className={styles.moviesContainer}>
      {movies &&
        movies.map((movie) => (
          <div key={movie.imdbID} className={styles.movieContainer}>
            <Movie
              id={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              getMovieDetail={() => getMovieDetail(movie.imdbID)}
            />
            <button
              className={styles.favButton}
              onClick={() => addToFavorites(movie)}
            >
              ❤
            </button>
          </div>
        ))}
    </div>
  );
}
