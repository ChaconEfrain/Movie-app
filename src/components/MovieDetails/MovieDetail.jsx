import React from "react";
import styles from "./MovieDetail.module.css";

export default function MovieDetail({ movieDetail }) {
  return (
    <article className={styles.container}>
      <img
        src={
          movieDetail.Poster !== "N/A"
            ? movieDetail.Poster
            : "https://store-images.microsoft.com/image/apps.46713.13510798886206986.e1e7e0cb-5610-4e39-bcf7-7ea0d34190c6.1e099cc1-5726-4cc4-9a8a-f9944fad66e3"
        }
        alt={`${movieDetail.Title} poster`}
      />
      <div className={styles.detailsContainer}>
        <header className={styles.containerHeader}>
          <h1>{movieDetail.Title}</h1>
          <span>{movieDetail.Released}</span>
          <span>Rated {movieDetail.Rated}</span>
        </header>
        <div className={styles.overview}>
          <p>
            <em>{movieDetail.Plot}</em>
          </p>
        </div>
        <div className={styles.detailsList}>
          <span>
            <strong>Genre: </strong>
            {`${movieDetail.Genre}`}
          </span>
          <span>
            <strong>Actors: </strong>
            {`${movieDetail.Actors}`}
          </span>
          <span>
            <strong>Director: </strong>
            {`${movieDetail.Director}`}
          </span>
          <span>
            <strong>Awards: </strong>
            {`${movieDetail.Awards}`}
          </span>
        </div>
        <span
          className={
            (movieDetail.imdbRating > 8.5 && styles.ratingHigh) ||
            (movieDetail.imdbRating > 7 &&
              movieDetail.imdbRating < 8.5 &&
              styles.ratingMedium) ||
            styles.ratingLow
          }
        >{`Rating: ${movieDetail.imdbRating}`}</span>
      </div>
    </article>
  );
}
