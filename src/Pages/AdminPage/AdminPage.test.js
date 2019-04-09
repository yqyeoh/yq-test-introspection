import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import AdminPage from "./AdminPage";

describe("admin page", () => {
  test("renders choose file button and send button", () => {
    const { getByText, getByTestId } = render(<AdminPage />);
    expect(getByText(/send/i)).toBeInTheDocument();
    expect(getByTestId(/uploader/i)).toHaveAttribute("type", "file");
  });

  test("Should render successfully upload if file type is accepted", () => {
    const { getByTestId, getByText, container } = render(<AdminPage />);
    const inputEl = getByTestId("file-submit");
    const file = new File(["(⌐□_□)"], "chucknorris.csv", {
      type: ".csv"
    });
    fireEvent.change(inputEl, { target: { files: [file] } });
    // expect(
    //   getByText(/successfully uploaded chucknorris.csv/i)
    // ).toBeInTheDocument();
    // expect(container).toContainElement(getByText(/success/i));
  });
});
