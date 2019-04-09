import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { createMemoryHistory } from "history";
import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { render, fireEvent } from "react-testing-library";
import NavBar from "./NavBar";
import App from "./../../App";

test("should render 5 links upon load", () => {
  const { getByText } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(getByText(/About Introspection/i)).toBeInTheDocument();
  expect(getByText(/Introspection Radar/i)).toBeInTheDocument();
  expect(getByText(/Action Plan/i)).toBeInTheDocument();
  expect(getByText(/Admin Panel/i)).toBeInTheDocument();
  expect(getByText(/Esther T./i)).toBeInTheDocument();
});

test("should link to home page when name is clicked", () => {
  const history = createMemoryHistory({ initialEntries: ["/radar"] });
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const homepageLink = getByTestId("homepage-link");
  fireEvent.click(homepageLink);

  expect(getByText(/Singapore's Introspection Radar/i)).toBeInTheDocument();
});
