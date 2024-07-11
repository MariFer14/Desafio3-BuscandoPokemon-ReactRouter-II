import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigate() {
  const setActiveClass = ({ isActive }) => {
    return isActive ? "active" : undefined;
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/home" className={setActiveClass}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pokemones" className={setActiveClass}>
              Pokemones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;


