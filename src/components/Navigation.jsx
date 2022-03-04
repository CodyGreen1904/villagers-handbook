import React from "react";
import title from "../img/vhtext_white.png";
import "../styles/navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation(props) {
  console.log(props);
  if (props.pathname === "/") {
    return false;
  }
  
  return (
    <div>
      <Navbar
        id="navbar"
        collapseOnSelect
        sticky="top"
        expand="sm"
        bg="dark"
        variant="dark"
        className="p-1"
      >
        <Navbar.Brand className="d-none d-sm-block p-3 col-sm-3" href="#home">
          <Nav.Link href="/">
            <img id="logo" src={title} alt="Site logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Container className="p-2 col-12 col-sm-9">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Item className="ms-auto" />
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/villagers">Villagers</Nav.Link>
              <Nav.Link href="/fossils">Fossils</Nav.Link>
              <Nav.Link href="/fish">Fish</Nav.Link>
              <Nav.Link href="/charts">Charts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
