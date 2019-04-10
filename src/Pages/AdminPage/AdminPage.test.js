import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import AdminPage from "./AdminPage";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:8080"
  : "https://staging-introspection-api.herokuapp.com";

describe("Admin Page", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("admin page", () => {
    test("renders choose file button and send button upon page load", () => {
      const { getByText, getByTestId } = render(<AdminPage />);
      expect(getByText(/send/i)).toBeInTheDocument();
      expect(getByTestId(/uploader/i)).toHaveAttribute("type", "file");
    });

    test("Should render successfully upload if file type is accepted", () => {
      fetch.mockResponseOnce(JSON.stringify(`👍 Successfully uploaded file!`));

      const { getByTestId, getByText, container } = render(<AdminPage />);
      const inputEl = getByTestId("file-submit");
      const file = new File(["(⌐□_□)"], "chucknorris.csv", {
        type: ".csv"
      });
      fireEvent.change(inputEl, { target: { files: [file] } });
      // expect(getByTestId("form")).toEqual(`👍 Successfully uploaded file!`);
      // expect(getByText("successfully uploaded")).toBeDefined();
      expect(container).toContainElement(getByTestId("form"));
      // expect(container).toContainElement(
      // getByText("Successfully uploaded file!")
      // );
      // expect(getByText(/Successfully uploaded file/i)).toBeInTheDocument();
      // expect(fetch.mock.calls.length).toEqual(1);
      // expect(fetch.mock.calls[0][0]).toEqual(`${getUrl}/upload`);
    });
  });
});
