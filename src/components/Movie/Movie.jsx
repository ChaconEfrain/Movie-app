import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({ title, poster, id, getMovieDetail }) {
  return (
    <article className={styles.movieContainer}>
      <NavLink
        className={styles.detailsLink}
        onClick={() => getMovieDetail(id)}
        to={`/movie/${id}`}
      >
        <aside className={styles.sidebar}>Details →</aside>
      </NavLink>
      <img
        src={
          poster !== "N/A"
            ? poster
            : "https://store-images.microsoft.com/image/apps.46713.13510798886206986.e1e7e0cb-5610-4e39-bcf7-7ea0d34190c6.1e099cc1-5726-4cc4-9a8a-f9944fad66e3"
        }
        alt={title}
      />
      <footer className={styles.movieInfo}>
        <span>{title}</span>
      </footer>
    </article>
  );
}
