import React, { Component } from "react";
import axios from "axios";
import { fetchFilms } from "../services/Api";
import FilmsList from "../components/filmsList/FilmsList";
import SearchForm from "../components/searchForm/SearchForm";
import FoundCharacter from "../components/foundCharacter/FoundCharacter";

class HomePage extends Component {
  state = {
    allFilms: [],
    query: "",
    searchResult: null,
  };

  componentDidMount() {
    this.getAllFilms();
  }

  getAllFilms = () => {
    fetchFilms()
      .then(({ data }) => {
        this.setState({
          allFilms: [...data.results],
        });
      })
      .catch((err) => console.warn(err));
  };

  handleQueryChange = (e) => {
    e.persist();
    this.setState({
      query: e.target.value,
    });
  };

  searchCharacter = () => {
    axios
      .get(`https://swapi.dev/api/people/?search=${this.state.query}`)
      .then((data) =>
        this.setState({
          searchResult: data.data.results,
        })
      )
      .catch((err) => console.warn(err));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchCharacter(e);
  };

  render() {
    const { allFilms, query, searchResult } = this.state;
    return (
      <>
        <SearchForm
          handleQueryChange={this.handleQueryChange}
          handleSubmit={this.handleSubmit}
          query={query}
        />
        {searchResult && <FoundCharacter searchResult={searchResult} />}
        <FilmsList props={this.props} allFilms={allFilms} />
      </>
    );
  }
}

export default HomePage;
