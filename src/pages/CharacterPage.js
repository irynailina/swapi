import React, { Component } from "react";
import { fetchCharacter } from "../services/Api";
import CharacterDescription from "../components/CharacterDescription";

class CharacterPage extends Component {
  state = {
    character: null,
  };
  componentDidMount() {
    this.getCharacterInfo();
  }

  getCharacterInfo = () => {
    fetchCharacter(this.props.match.params.id)
      .then((data) => {
        this.setState({
          character: data.data,
        });
      })
      .catch((err) => console.warn(err));
  };

  render() {
    const { character } = this.state;
    return (
      <div>{character && <CharacterDescription character={character} />}</div>
    );
  }
}

export default CharacterPage;
