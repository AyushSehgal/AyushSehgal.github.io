import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Header extends Component {
  constructor() {
    super();
  }

  navStyle = {
    color: "white",
    textDecoration: "none",
  };

  render() {
    return (
      <div style={{ position: "fixed", top: "0", width: "100%" }}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Link style={this.navStyle} to="/">
              Ayush Sehgal
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink style={this.navStyle} to="/">
              <Link style={this.navStyle} to="/">
                Home
              </Link>
            </NavLink>
            <NavLink style={this.navStyle} to="/CS61B">
              <Link style={this.navStyle} to="/CS61B">
                CS61B
              </Link>
            </NavLink>
            <NavLink
              style={this.navStyle}
              href="http://ayushsehgal.com"
              target="_blank"
            >
              Personal Site
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
