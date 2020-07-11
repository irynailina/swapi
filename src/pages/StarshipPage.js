import React, { Component } from "react";
import { fetchStarship } from "../services/Api";
import StarshipDescription from "../components/StarshipDescription";

class StarshipPage extends Component {
  state = {
    starship: null,
  };

  componentDidMount() {
    this.getStarship();
  }

  getStarship = () => {
    fetchStarship(this.props.match.params.id)
      .then((data) => {
        this.setState({
          starship: data.data,
        });
      })
      .catch((err) => console.warn(err));
  };

  render() {
    const { starship } = this.state;
    return <>{starship && <StarshipDescription starship={starship} />}</>;
  }
}

export default StarshipPage;
