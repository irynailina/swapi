import React, { useState } from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import ShowMoreBtn from "../showMoreBtn/ShowMoreBtn";
import css from "./vehicles.module.css";

const Vehicles = ({ film }) => {
  const [showVehicles, setshowVehicles] = useState(false);
  const showInfo = () => {
    setshowVehicles(!showVehicles);
  };

  return (
    <>
      <ul>
        <li key={uuid()}>
          <p className={css.subtitle}>
            Vehicles <ShowMoreBtn showInfo={showInfo} />
          </p>
          <ul>
            {showVehicles &&
              film.vehicles.map((vehicle) => (
                <li className={css.item} key={uuid()}>
                  <Link
                    to={{
                      pathname: `/vehicles/${vehicle.slice(30)}`,
                    }}
                  >
                    {vehicle}
                  </Link>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Vehicles;
