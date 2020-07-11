import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";
import css from './foundCharacter.module.css'

const FoundCharacter = ({ searchResult }) => (
  <>
    <ul>
      {searchResult ? searchResult.map((one) => (
        <li key={uuid()}>
          <h3 className={css.name}>
            {one.name}:{" "}
            <span>
              <Link
                to={{
                  pathname: `/people/${one.url.slice(28)}`,
                }}
              >
                {one.url}
              </Link>
            </span>
          </h3>
        </li>
      )) : <p>hello</p>}
    </ul>
  </>
);

export default FoundCharacter;
