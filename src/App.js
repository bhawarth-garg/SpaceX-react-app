import { Component } from "react";
import Modal from "./components/Modal"

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launchpads: [],
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then((response) => response.json())
      .then((launchpads) => this.setState({ launchpads: launchpads }));

  }

  render() {

    return (
      <div className="container">
        <h1>SpaceX LAunchPads Description</h1>
        <div className="row">
          {this.state.launchpads?.map((launchpad) => (
            <>
            <Card launchpad={launchpad} />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
