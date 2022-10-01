import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({ title, year, poster, id, getMovieDetail }) {
  return (
    <article className={styles.movieContainer}>
      <NavLink
        className={styles.detailsLink}
        onClick={() => getMovieDetail(id)}
        to={`/movie/${id}`}
      >
        <aside className={styles.sidebar}>Details →</aside>
      </NavLink>
      <img src={poster} alt={title} />
      <footer className={styles.movieInfo}>
        <span>{title}</span>
        <span>{year}</span>
      </footer>
    </article>
  );
}
