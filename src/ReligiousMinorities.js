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
        background={"45-90"}
        bgposition={[0.2, 4.04, 5.1]}
      />
    );
  }
}

export default ReligiousMinorities;
