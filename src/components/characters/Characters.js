import React, { useState } from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import ShowMoreBtn from "../showMoreBtn/ShowMoreBtn";
import css from "./characters.module.css";

const Characters = ({ film }) => {
  const [showCharacters, setShowCharacters] = useState(false);
  const showInfo = () => {
    setShowCharacters(!showCharacters);
  };
  return (
    <ul>
      <li key={uuid()}>
        <p className={css.subtitle}>
          Characters <ShowMoreBtn showInfo={showInfo} />
        </p>
        {showCharacters && (
          <ul>
            {film.characters.map((character) => (
              <li className={css.item} key={uuid()}>
                <Link
                  to={{
                    pathname: `/people/${character.slice(28)}`,
                  }}
                >
                  {character}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default Characters;
