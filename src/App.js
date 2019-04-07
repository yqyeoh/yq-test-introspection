import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h1>Introspection Radar (Singapore)</h1>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
