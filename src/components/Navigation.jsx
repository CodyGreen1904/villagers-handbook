import React, { useEffect } from "react";
import title from "../img/vhtext_white.png";
import HomeIcon from "@mui/icons-material/Home";
import "../styles/navigation.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  useEffect(() => {
    let localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme !== null) {
      document.body.className = `theme_${localStorageTheme}`;
    } else {
      document.body.className = `theme_villagers`;
    }
  }, []);

  return (
    <div>
      <Navbar
        id="navbar"
        collapseOnSelect
        sticky="top"
        expand="md"
        className="p-3"
      >
        <Navbar.Brand className="d-none d-sm-block p-3 col-sm-3" href="#home">
          <Nav.Link href="/">
            <img id="logo" src={title} alt="Site logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Brand className="d-sm-none col-3" href="#home">
          <Nav.Link href="/">
            <HomeIcon id="Home_Icon" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid text-center">
            <Nav.Item className="ms-auto" />
            <Nav.Link id="nav_text" href="/about">
              About
            </Nav.Link>
            <Nav.Link id="nav_text" href="/villagers">
              Villagers
            </Nav.Link>
            <Nav.Link id="nav_text" href="/fossils">
              Fossils
            </Nav.Link>
            <Nav.Link id="nav_text" href="/fish">
              Fish
            </Nav.Link>
            <Nav.Link id="nav_text" href="/charts">
              Charts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
