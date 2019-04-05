import React, { Component } from "react";
import Plot from "react-plotly.js";
import "./App.css";

class App extends Component {
  getrandom = (num, mul) => {
    const value = [];
    for (let i = 0; i <= num; i++) {
      const rand = Math.random() * mul;
      value.push(rand);
    }
    return value;
  };
  render() {
    return (
      <Plot
        data={[
          {
            r: this.getrandom(62, 3),
            t: this.getrandom(62, 250),
            mode: "markers",
            name: "Trial 5",
            marker: {
              color: "rgb(0,0,0)",
              size: 10,
              line: { color: "red" },
              opacity: 1
            },
            type: "scatterpolar",
            subplot: "polar"
          },
          {
            r: this.getrandom(62, 3),
            t: this.getrandom(62, 250),
            mode: "markers",
            name: "Trial 6",
            marker: {
              color: "rgb(255,0,0)",
              size: 10,
              line: { color: "red" },
              opacity: 1
            },
            type: "scatterpolar",
            subplot: "polar"
          }
        ]}
        layout={{
          polar: {
            sector: [45, 90],
            domain: {
              x: [0, 0.4],
              y: [0, 1]
            }
          },
          showlegend: false,
          title: "Hobbs-Pearson Trials",
          font: { size: 15 },
          plot_bgcolor: "rgb(223, 223, 223)",
          angularaxis: { tickcolor: "rgb(253,253,253)" }
        }}
      />
    );
  }
}

export default App;
