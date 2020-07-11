import React, { useState } from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import ShowMoreBtn from "../showMoreBtn/ShowMoreBtn";
import css from "./starships.module.css";

const Starships = ({ film }) => {
  const [showStarships, setshowStarships] = useState(false);
  const showInfo = () => {
    setshowStarships(!showStarships);
  };

  return (
    <>
      <ul>
        <li key={uuid()}>
          <p className={css.subtitle}>
            Starships <ShowMoreBtn showInfo={showInfo} />
          </p>

          <ul>
            {showStarships &&
              film.starships.map((starship) => (
                <li className={css.item} key={uuid()}>
                  <Link
                    to={{
                      pathname: `/starships/${starship.slice(31)}`,
                    }}
                  >
                    {starship}
                  </Link>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Starships;
