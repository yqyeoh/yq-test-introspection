import React, { Component } from "react";
import Scatter from "./Scatter";

class FullChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Scatter
        sector={[0, 360]}
        background={"full-radar-no-color"}
        bgposition={[0.5, 1.016, 1.05]}
      />
    );
  }
}

export default FullChart;
