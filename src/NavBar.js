import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "#c3eee7" }}
      expand="md"
      className="pr-5 pl-5 ">
      <Nav className="mr-auto d-flex flex-row" navbar>
        <NavItem className="mr-5">
          <Link to="/home">
            <h3 className="text-muted">About Introspection</h3>
          </Link>
        </NavItem>
        <NavItem className="mr-5">
          <Link to="/radar">
            <h3 className="text-muted">Introspection Radar</h3>
          </Link>
        </NavItem>
        <NavItem className="mr-5">
          <Link to="/plan">
            <h3 className="text-muted">Action Plan</h3>
          </Link>
        </NavItem>
        <NavItem className="mr-5">
          <Link to="/admin">
            <h3 className="text-muted">Admin Panel</h3>
          </Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/profile">
            <img
              alt="avatar"
              width="50px"
              height="50px"
              src="https://semantic-ui.com/images/avatar/large/steve.jpg"
              className="rounded-circle"
            />
            <span className="text-muted"> Esther T.</span>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
