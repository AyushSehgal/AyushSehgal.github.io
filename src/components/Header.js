import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Header extends Component {
  constructor() {
    super();
    this.state = { title: "Ayush Sehgal" };
    this.title = "Ayush Sehgal";
  }

  navStyle = {
    color: "white",
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.title}</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link style={this.navStyle} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={this.navStyle} to="/CS61B">
                CS61B
              </Link>
            </Nav.Link>
            <Nav.Link
              style={this.navStyle}
              href="http://ayushsehgal.com"
              target="_blank"
            >
              Personal Site
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
