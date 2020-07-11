import React, { useState } from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import ShowMoreBtn from "../showMoreBtn/ShowMoreBtn";
import css from "./planets.module.css";

const Planets = ({ film }) => {
  const [showPlanets, setshowPlanets] = useState(false);
  const showInfo = () => {
    setshowPlanets(!showPlanets);
  };

  return (
    <ul>
      <li key={uuid()}>
        <p className={css.subtitle}>
          Planets <ShowMoreBtn showInfo={showInfo} />
        </p>
        {showPlanets && (
          <ul>
            {film.planets.map((planet) => (
              <li className={css.item} key={uuid()}>
                <Link
                  to={{
                    pathname: `/planets/${planet.slice(29)}`,
                  }}
                >
                  {planet}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default Planets;
