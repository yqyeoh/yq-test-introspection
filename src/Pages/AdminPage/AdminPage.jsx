import { Container } from "reactstrap";
import React, { Component } from "react";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:7890"
  : "https://staging-introspection-api.herokuapp.com";

export class AdminPage extends Component {
  state = {
    csv: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    const { csv } = this.state;
    console.log(csv);
    formData.append("file", csv);
    try {
      const res = await fetch(`${getUrl}/upload`, {
        method: "POST",
        body: formData,
        credentials: "include"
      });
      // const data = await res.json();
      if (res.status !== 201) {
        throw new Error("File type not valid");
      } else {
        alert("upload successful");
        this.props.history.push("/");
      }
    } catch (error) {
      alert("file not uploaded");
      console.error(error);
    }
  };

  handleChange = e => {
    this.setState({
      csv: e.target.files[0]
    });
  };

  render() {
    return (
      <Container
        className="mx-auto text-center mt-5"
        style={{ width: "100vw" }}
      >
        <h1 className="text-info font-weight-bolder">Admin Page</h1>
        <h3>🗄 Upload CSV File</h3>
        <form
          data-testid="form"
          action="upload"
          method="post"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
        >
          <input
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            accept=".csv"
            data-testid="uploader"
            onChange={this.handleChange}
          />
          <button type="submit" data-testid="file-submit">
            🚚💨 Send
          </button>
        </form>
      </Container>
    );
  }
}

export default AdminPage;
