import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavLink,
    NavDropdown,
    Form,
    FormControl,
    Button,
  } from "react-bootstrap";

export default function HeaderDock() {
    const navStyle = {
        color: "white",
        textDecoration: "none",
      };
    return (
        <div style={{ position: "fixed", top: "0", width: "100%" }}>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Ayush Sehgal</Navbar.Brand>
        
            <Nav className="ml-auto">
                <NavLink
                    style={navStyle}
                    href="http://ayushsehgal.com"
                    target="_blank"
                >
                    Check out my Portfolio
                </NavLink>
            </Nav>
        </Navbar>
      </div>
    );
}