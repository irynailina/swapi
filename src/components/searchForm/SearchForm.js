import React from "react";
import css from "./searchForm.module.css";

const SearchForm = ({ handleQueryChange, handleSubmit }) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <input
      onChange={handleQueryChange}
      type="text"
      placeholder="enter character name"
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchForm;
