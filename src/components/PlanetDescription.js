import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";

const PlanetDescription = ({
  planet: {
    name,
    climate,
    diameter,
    gravity,
    orbital_period,
    population,
    residents,
    rotation_period,
    surface_water,
    terrain,
    films,
  },
}) => (
  <>
    <h2>Name: {name}</h2>
    <table>
      <tbody>
        <tr>
          <td>Climate</td>
          <td>{climate}</td>
        </tr>
        <tr>
          <td>Diameter</td>
          <td>{diameter}</td>
        </tr>
        <tr>
          <td>Gravity</td>
          <td>{gravity}</td>
        </tr>
        <tr>
          <td>Orbital period</td>
          <td>{orbital_period}</td>
        </tr>

        <tr>
          <td>Population</td>
          <td>{population}</td>
        </tr>
        <tr>
          <td>Rotation period</td>
          <td>{rotation_period}</td>
        </tr>
        <tr>
          <td>Surface water</td>
          <td>{surface_water}</td>
        </tr>
        <tr>
          <td>Terrain</td>
          <td>{terrain}</td>
        </tr>

        <tr>
          <td>Films</td>
          <td>
            {" "}
            <ul>
              {films.map((film) => (
                <li key={uuid()}>
                  <Link
                    to={{
                      pathname: `/films/${film.slice(27)}`,
                    }}
                  >
                    {film}
                  </Link>
                </li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td>Residents</td>
          <td>
            {" "}
            <ul>
              {residents.length ? (
                residents.map((resident) => (
                  <li key={uuid()}>
                    <Link
                      to={{
                        pathname: `/people/${resident.slice(28)}`,
                      }}
                    >
                      {resident}
                    </Link>
                  </li>
                ))
              ) : (
                <span>no data</span>
              )}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

export default PlanetDescription;
