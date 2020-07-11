import React, { useState } from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import ShowMoreBtn from "../showMoreBtn/ShowMoreBtn";
import css from "./species.module.css";

const Species = ({ film }) => {
  const [showSpecies, setshowSpecies] = useState(false);
  const showInfo = () => {
    setshowSpecies(!showSpecies);
  };

  return (
    <>
      <ul>
        <li key={uuid()}>
          <p className={css.subtitle}>
            Species <ShowMoreBtn showInfo={showInfo} />
          </p>
          {showSpecies && (
            <ul>
              {film.species.map((item) => (
                <li className={css.item} key={uuid()}>
                  <Link
                    to={{
                      pathname: `/species/${item.slice(29)}`,
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default Species;
