import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";

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

xtest("should link to home page when name is clicked", () => {
  const { getByTestId, getByText } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const homepageLink = getByTestId("homepage-link");
  fireEvent.click(homepageLink);

  expect(getByText(/Singapore's Introspection Radar/i)).toBeInTheDocument();
});
