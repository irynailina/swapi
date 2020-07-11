import React, { Component } from "react";
import { fetchFilmInfo } from "../services/Api";
import FilmDescription from "../components/filmDescription/FilmDescription";
import Characters from "../components/characters/Characters";
import Planets from "../components/planets/Planets";
import Species from "../components/species/Species";
import Starships from "../components/starships/Starships";
import Vehicles from "../components/vehicles/Vehicles";

class FilmInfoPage extends Component {
  state = {
    film: null,
  };

  componentDidMount() {
    this.getFilmInfo();
  }

  getFilmInfo = () => {
    fetchFilmInfo(this.props.match.params.id)
      .then((film) =>
        this.setState({
          film: film.data,
        })
      )
      .catch((err) => console.warn(err));
  };

  render() {
    const { film } = this.state;

    return (
      film && (
        <div>
          <FilmDescription film={film} />
          <Characters film={film} />
          <Planets film={film} />
          <Species film={film} />
          <Starships film={film} />
          <Vehicles film={film} />
        </div>
      )
    );
  }
}

export default FilmInfoPage;
