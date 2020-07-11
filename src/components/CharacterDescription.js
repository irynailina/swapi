import React from "react";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";

const CharacterDescription = ({
  character: {
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    films,
    starships,
    vehicles,
    homeworld,
    species,
  },
}) => (
  <>
    <h2>Name: {name}</h2>
    <table>
      <tbody>
        <tr>
          <td>Gender</td>
          <td>{gender}</td>
        </tr>
        <tr>
          <td>Birth year</td>
          <td>{birth_year}</td>
        </tr>
        <tr>
          <td>Hair color</td>
          <td>{hair_color}</td>
        </tr>
        <tr>
          <td>Eye color</td>
          <td>{eye_color}</td>
        </tr>

        <tr>
          <td>Height</td>
          <td>{height}</td>
        </tr>
        <tr>
          <td>Mass</td>
          <td>{mass}</td>
        </tr>
        <tr>
          <td>Homeworld</td>
          <td>
            <Link
              to={{
                pathname: `/planets/${homeworld.slice(29)}`,
              }}
            >
              {homeworld}
            </Link>
          </td>
        </tr>
        <tr>
          <td>Species</td>
          <td>
            {species.length ? (
              <ul>
                {species.map((one) => (
                  <li key={uuid()}>
                    <Link
                      to={{
                        pathname: `/species/${one.slice(29)}`,
                      }}
                    >
                      {one}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span>no data</span>
            )}
          </td>
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
          <td>Starships</td>
          <td>
            {" "}
            <ul>
              {starships.length ? (
                starships.map((starship) => (
                  <li key={uuid()}>
                    <Link
                      to={{
                        pathname: `/starships/${starship.slice(31)}`,
                      }}
                    >
                      {starship}
                    </Link>
                  </li>
                ))
              ) : (
                <span>no data</span>
              )}
            </ul>
          </td>
        </tr>
        <tr>
          <td>Vehicles</td>
          <td>
            {" "}
            <ul>
              {vehicles.length ? (
                vehicles.map((vehicle) => (
                  <li key={uuid()}>
                    <Link
                      to={{
                        pathname: `/vehicles/${vehicle.slice(30)}`,
                      }}
                    >
                      {vehicle}
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

export default CharacterDescription;
