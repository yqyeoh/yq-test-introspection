import React, { Component } from "react";
import Plot from "react-plotly.js";
import { findOne, findAllExcept } from "./static/info";

import _ from "lodash";

class Scatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: [],
      theta: [],
      names: [],
      searchField: "Nellie Melba",
      radiusOne: [],
      thetaOne: [],
      namesOne: []
    };
  }

  componentDidMount() {
    this.renderOthers();
    this.renderOne();
  }

  renderOthers = () => {
    const newRadius = [],
      newTheta = [],
      newNames = [];
    findAllExcept(this.state.searchField).forEach(function(element) {
      element.categories.forEach(function(element) {
        newRadius.push(
          element.level === 1
            ? _.random(0.7, 1.8)
            : element.level === 2
            ? _.random(2.3, 3.2)
            : element.level === 3
            ? _.random(3.5, 4.5)
            : element.level === 4
            ? _.random(5, 5.8)
            : undefined
        );
        newTheta.push(
          _.random(
            element.category.sector[0] + 10,
            element.category.sector[1] - 10
          )
        );
        newNames.push(element.name);
      });
    });
    this.setState({ radius: newRadius, theta: newTheta, names: newNames });
  };
  renderOne = () => {
    const newRadius = [],
      newTheta = [],
      newNames = [];
    findOne(this.state.searchField).forEach(function(element) {
      element.categories.forEach(function(element) {
        newRadius.push(
          element.level === 1
            ? _.random(0.7, 1.8)
            : element.level === 2
            ? _.random(2.3, 3.2)
            : element.level === 3
            ? _.random(3.5, 4.5)
            : element.level === 4
            ? _.random(5, 5.8)
            : undefined
        );
        newTheta.push(
          _.random(
            element.category.sector[0] + 10,
            element.category.sector[1] - 10
          )
        );
        newNames.push("You");
      });
    });
    this.setState({
      radiusOne: newRadius,
      thetaOne: newTheta,
      namesOne: newNames
    });
  };

  handleSearchField = async event => {
    await this.setState({ searchField: event.target.value });
    await this.renderOthers();
    await this.renderOne();
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span> Who are you? </span>
          <input
            type="button"
            onClick={this.handleSearchField}
            value="James Salisbury"
          />
          <input
            type="button"
            onClick={this.handleSearchField}
            value="Anna Pavlova"
          />
          <input
            type="button"
            onClick={this.handleSearchField}
            value="John Dory"
          />
          <input
            type="button"
            onClick={this.handleSearchField}
            value="Nellie Melba"
          />
        </div>
        <Plot
          data={[
            {
              r: this.state.radius,
              theta: this.state.theta,
              text: this.state.names,
              hoverinfo: "text",
              hoverlabel: {
                bgcolor: "black",
                bordercolor: "black",
                font: { family: "calibri", color: "white", size: 20 }
              },
              mode: "markers",

              marker: {
                symbol: "triangle-up-dot",
                color: "rgb(138,43,226)",
                size: 13,
                opacity: 1
              },
              type: "scatterpolar",
              subplot: "polar"
            },
            {
              r: this.state.radiusOne,
              theta: this.state.thetaOne,
              text: this.state.namesOne,
              hoverinfo: "text",
              hoverlabel: {
                bgcolor: "black",
                bordercolor: "black",
                font: { family: "calibri", color: "white", size: 20 }
              },
              mode: "markers",

              marker: {
                symbol: "triangle-up-dot",
                color: "rgb(50,200,50)",
                size: 13,
                opacity: 1
              },
              type: "scatterpolar",
              subplot: "polar"
            }
          ]}
          layout={{
            xaxis: { fixedrange: true },
            yaxis: { fixedrange: true },
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: "rgba(0,0,0,0)",
            width: 800,
            height: 800,

            images: [
              {
                source: `img/${this.props.background}.png`,
                xref: "paper",
                yref: "paper",
                xanchor: "center",
                x: this.props.bgposition[0],
                y: this.props.bgposition[1],
                sizex: this.props.bgposition[2],
                sizey: this.props.bgposition[2],
                opacity: 0.8,
                layer: "above"
              }
            ],
            showlegend: false,

            polar: {
              sector: this.props.sector,
              opacity: 1,
              layer: "below",
              radialaxis: {
                dragmode: false,
                visible: false,
                tickfont: {
                  size: 8
                },
                range: [0, 7]
              },
              angularaxis: {
                dragmode: false,
                visible: false,
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
