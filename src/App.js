import React, { Component } from "react";
import Scatter from "./Scatter";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Introspection Radar (Singapore)</h1>
        <Scatter sector={[0, 360]} />
        <Scatter sector={[0, 45]} />
        <Scatter sector={[45, 90]} />
        <Scatter sector={[90, 135]} />
        <Scatter sector={[135, 180]} />
        <Scatter sector={[180, 225]} />
        <Scatter sector={[225, 270]} />
        <Scatter sector={[270, 315]} />
        <Scatter sector={[315, 360]} />
      </React.Fragment>
    );
  }
}

export default App;
