import React from "react";
import { Link } from "react-router-dom";
import css from "./filmsList.module.css";

const FilmsList = ({ allFilms, props }) => (
  <>
    <h2 className={css.title}>All Films</h2>
    <ul className={css.filmsList}>
      {allFilms.map((film) => (
        <li className={css.filmsItem} key={film.episode_id}>
          <Link
            to={{
              pathname: `/films/${film.url.slice(27)}`,
            }}
          >
            {film.title}
          </Link>
          <span> (Episode {film.episode_id})</span>
        </li>
      ))}
    </ul>
  </>
);

export default FilmsList;
