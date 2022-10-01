import React from "react";
import styles from "./MovieDetail.module.css";

export default function MovieDetail({ movieDetail }) {
  return (
    <article className={styles.container}>
      <img src={movieDetail.Poster} alt={`${movieDetail.Title} poster`} />
      <div className={styles.detailsContainer}>
        <header className={styles.containerHeader}>
          <span>{movieDetail.Title}</span>
          <span>{movieDetail.Released}</span>
          <span>{movieDetail.Rated}</span>
        </header>
        <div className={styles.overview}>
          <p>{movieDetail.Plot}</p>
        </div>
        <div className={styles.detailsList}>
          <p>{`Genre: ${movieDetail.Genre}`}</p>
          <p>{`Actors: ${movieDetail.Actors}`}</p>
          <p>{`Director: ${movieDetail.Director}`}</p>
          <p>{`Awards: ${movieDetail.Awards}`}</p>
        </div>
        <span
          className={styles.rating}
        >{`Rating: ${movieDetail.imdbRating}`}</span>
      </div>
    </article>
  );
}
