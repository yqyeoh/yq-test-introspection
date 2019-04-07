import React, { Component } from "react";
import Scatter from "./Scatter";

class SocietyAndPrivilege extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Scatter
        sector={[90, 135]}
        background={"90-135"}
        bgposition={[0.1, 4.04, 5.1]}
      />
    );
  }
}

export default SocietyAndPrivilege;
