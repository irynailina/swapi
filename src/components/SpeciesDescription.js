import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";

const SpeciesDescription = ({
  species: {
    name,
    average_height,
    average_lifespan,
    designation,
    eye_colors,
    films,
    hair_colors,
    homeworld,
    language,
    people,
    skin_colors,
  },
}) => (
  <>
    <h2>Name: {name}</h2>
    <table>
      <tbody>
        <tr>
          <td>Average height</td>
          <td>{average_height}</td>
        </tr>
        <tr>
          <td>Average lifespan</td>
          <td>{average_lifespan}</td>
        </tr>
        <tr>
          <td>Designation</td>
          <td>{designation}</td>
        </tr>
        <tr>
          <td>Eye colors</td>
          <td>{eye_colors}</td>
        </tr>

        <tr>
          <td>Hair colors</td>
          <td>{hair_colors}</td>
        </tr>
        <tr>
          <td>Homeworld</td>
          <td>{homeworld}</td>
        </tr>
        <tr>
          <td>Language</td>
          <td>{language}</td>
        </tr>
        <tr>
          <td>Skin colors</td>
          <td>{skin_colors}</td>
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
          <td>People</td>
          <td>
            {" "}
            <ul>
              {people.length ? (
                people.map((one) => (
                  <li key={uuid()}>
                    <Link
                      to={{
                        pathname: `/people/${one.slice(28)}`,
                      }}
                    >
                      {one}
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

export default SpeciesDescription;
