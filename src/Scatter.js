import React, { Component } from "react";
import Plot from "react-plotly.js";
import data from "./static/info";

import _ from "lodash";

class Scatter extends Component {
  render() {
    return (
      <React.Fragment>
        <Plot
          data={[
            {
              r: [_.random(0.1, 0.9), _.random(1.1, 1.9), _.random(2.1, 2.9)],
              theta: [_.random(47, 88), _.random(47, 88), _.random(47, 88)],
              text: ["John Doe", "Mary Jane", "Sue Sanna"],
              hoverinfo: "text",
              hoverlabel: {
                bgcolor: "pink",
                bordercolor: "blue",
                font: { family: "calibri", color: "navy" }
              },
              mode: "markers",
              name: "Religious Minorities",
              marker: {
                symbol: "triangle-up-dot",
                color: "rgb(138,43,226)",
                size: 8,
                opacity: 0.8
              },

              type: "scatterpolar",
              subplot: "polar"
            }
          ]}
          layout={{
            barmode: "overlay",
            paper_bgcolor: "transparent",
            width: 500,
            height: 500,
            images: [
              {
                source: "img/radar_background.png",
                xref: "x",
                yref: "paper",
                x: -1,
                y: 1.03,
                sizex: 7,
                sizey: 7,
                opacity: 0.7,
                layer: "above"
              }
            ],
            showlegend: false,
            polar: {
              paper_bgcolor: "rgba(0,0,0,0)",
              sector: this.props.sector,
              opacity: 1,
              layer: "above",
              radialaxis: {
                visible: false,
                tickfont: {
                  size: 8
                },
                range: [0, 5]
              },
              angularaxis: {
                visible: true,
                tickfont: {
                  size: 8
                }
              }
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default Scatter;
