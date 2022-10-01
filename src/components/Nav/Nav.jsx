import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ getMovies }) {
  const [search, setSearch] = useState("");
  const [about, setAbout] = useState(false);

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navMenu}>
          <h1>The movie App</h1>
          <NavLink className={styles.home} to="/">
            <span>Home</span>
          </NavLink>
          <span className={styles.home} onClick={() => setAbout(true)}>
            About
          </span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getMovies(search);
            setSearch("");
          }}
        >
          <input
            className={styles.search}
            type="text"
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </nav>
      <div className={about ? styles.overlayShow : styles.overlayNotShow}>
        <article className={styles.aboutContainer}>
          <div className={styles.aboutDiv}>
            <p>
              Welcome to my first ever web application! This app was made with
              React, pure CSS and a lot of coding hours. I hope you find this
              amusing and of course, any feedback is welcome!
            </p>
            <button
              className={styles.closeAbout}
              onClick={() => setAbout(false)}
            >
              x
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
