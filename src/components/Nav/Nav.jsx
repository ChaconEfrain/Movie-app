import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ getMovies }) {
  const [search, setSearch] = useState("");

  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.home} to="/">
        <span>Home</span>
      </NavLink>
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
  );
}
