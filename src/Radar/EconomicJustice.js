import React, { Component } from "react";
import Scatter from "./Scatter";

class EconomicJustice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Scatter
        sector={[315, 360]}
        background={"315-360-nocolor-annote"}
        bgposition={[0.495, 0.92, 1.03]}
      />
    );
  }
}

export default EconomicJustice;
