import React, { Component } from "react";
import { fetchPlanet } from "../services/Api";
import PlanetDescription from "../components/PlanetDescription";

class PlanetPage extends Component {
  state = {
    planet: null,
  };

  componentDidMount() {
    this.getPlanet();
  }

  getPlanet = () => {
    fetchPlanet(this.props.match.params.id)
      .then((data) =>
        this.setState({
          planet: data.data,
        })
      )
      .catch((err) => console.warn(err));
  };

  render() {
    const { planet } = this.state;
    return <>{planet && <PlanetDescription planet={planet} />}</>;
  }
}

export default PlanetPage;
