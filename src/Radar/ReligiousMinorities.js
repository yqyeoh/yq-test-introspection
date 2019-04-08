import React, { Component } from "react";
import Scatter from "./Scatter";

class ReligiousMinorities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Scatter
        sector={[45, 90]}
        background={"45-90-nocolor-annote"}
        bgposition={[0.455, 1.025, 1.03]}
      />
    );
  }
}

export default ReligiousMinorities;
