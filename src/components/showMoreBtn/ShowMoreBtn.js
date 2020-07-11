import React from "react";
import css from "./showMoreBtn.module.css";

const ShowMoreBtn = ({ showInfo }) => (
  <button className={css.button} onClick={showInfo}>
    show
  </button>
);

export default ShowMoreBtn;
