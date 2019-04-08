import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./HPJumbotron.css";

function HPJumbotron() {
  return (
    <Jumbotron fluid className="jumbotron">
      <p className="mx-auto button">
        <Button color="info" className="btn-lg">
          Take the Survey
        </Button>
      </p>
    </Jumbotron>
  );
}

export default HPJumbotron;
