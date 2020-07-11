import React, { Component } from "react";
import { fetchVehicle } from "../services/Api";
import VehicleDescription from "../components/VehicleDescription";

class VehiclePage extends Component {
  state = {
    vehicle: null,
  };

  componentDidMount() {
    this.getVehicle();
  }

  getVehicle = () => {
    fetchVehicle(this.props.match.params.id)
      .then((data) => {
        this.setState({
          vehicle: data.data,
        });
      })
      .catch((err) => console.warn(err));
  };

  render() {
    const { vehicle } = this.state;
    return <>{vehicle && <VehicleDescription vehicle={vehicle} />}</>;
  }
}

export default VehiclePage;
