import React, { Component } from "react";
import { fetchSpecies } from "../services/Api";
import SpeciesDescription from "../components/SpeciesDescription";

class SpeciesPage extends Component {
  state = {
    species: null,
  };

  componentDidMount() {
    this.getSpecies();
  }

  getSpecies = () => {
    fetchSpecies(this.props.match.params.id)
      .then((data) => {
        this.setState({
          species: data.data,
        });
      })
      .catch((err) => console.warn(err));
  };

  render() {
    const { species } = this.state;
    return <>{species && <SpeciesDescription species={species} />}</>;
  }
}

export default SpeciesPage;
