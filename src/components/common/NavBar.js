import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand href="#home">Project Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" pullRight>
          <Nav.Link className="ml-auto" href="#link"><Button variant="outline-light">API</Button></Nav.Link>
          <Nav.Link className="ml-auto" href="#link"><Button variant="outline-light">Source Code</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;