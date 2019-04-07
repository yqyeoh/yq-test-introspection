import React, { Component } from "react";
import Scatter from "./Scatter";

class DiversityAndInclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Scatter
        sector={[0, 45]}
        background={"0-45"}
        bgposition={[0.495, 0.87, 1.03]}
      />
    );
  }
}

export default DiversityAndInclusion;
