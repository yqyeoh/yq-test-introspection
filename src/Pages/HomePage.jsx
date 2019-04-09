import React from "react";
import { Container } from "reactstrap";
import HPJumbotron from "../components/HPJumbotron/HPJumbotron";
import FullChart from "./../Radar/FullChart";

function HomePage() {
  return (
    <>
      <HPJumbotron />
      <Container className="mx-auto" style={{ width: "100vw" }}>
        <FullChart />
      </Container>
    </>
  );
}

export default HomePage;
