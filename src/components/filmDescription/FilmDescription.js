import React from "react";
import css from "./filmDescription.module.css";

const FilmDescription = ({ film }) => {
  return (
    <div>
      <h2 className={css.title}>{film.title}</h2>
      <p className={css.date}>{film.release_date}</p>
      <p className={css.description}>{film.opening_crawl}</p>
    </div>
  );
};

export default FilmDescription;
