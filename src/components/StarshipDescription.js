import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";

const StarshipDescription = ({
  starship: {
    name,
    cargo_capacity,
    consumables,
    cost_in_credits,
    crew,
    films,
    hyperdrive_rating,
    length,
    manufacturer,
    model,
    passengers,
    pilots,
    starship_class,
  },
}) => (
  <>
    <h2>Name: {name}</h2>
    <table>
      <tbody>
        <tr>
          <td>Starship class</td>
          <td>{starship_class}</td>
        </tr>

        <tr>
          <td>Cargo capacity</td>
          <td>{cargo_capacity}</td>
        </tr>
        <tr>
          <td>Consumables</td>
          <td>{consumables}</td>
        </tr>
        <tr>
          <td>Cost in credits</td>
          <td>{cost_in_credits}</td>
        </tr>
        <tr>
          <td>Crew</td>
          <td>{crew}</td>
        </tr>

        <tr>
          <td>Hyperdrive rating</td>
          <td>{hyperdrive_rating}</td>
        </tr>
        <tr>
          <td>Length</td>
          <td>{length}</td>
        </tr>
        <tr>
          <td>Manufacturer</td>
          <td>{manufacturer}kg</td>
        </tr>
        <tr>
          <td>Model</td>
          <td>{model}kg</td>
        </tr>
        <tr>
          <td>Passengers</td>
          <td>{passengers}</td>
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
          <td>Pilots</td>
          <td>
            {" "}
            <ul>
              {pilots.length ? (
                pilots.map((pilot) => (
                  <li key={uuid()}>
                    <Link
                      to={{
                        pathname: `/people/${pilot.slice(28)}`,
                      }}
                    >
                      {pilot}
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

export default StarshipDescription;
