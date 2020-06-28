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
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Ayush Sehgal</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link>CS61B</Link>
            </Nav.Link>
            <Nav.Link href="http://ayushsehgal.com" target="_blank">
              Personal Site
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* <h1 className="App-header">Ayush Sehgal</h1> */}
      </div>
    );
  }
}

export default Header;
