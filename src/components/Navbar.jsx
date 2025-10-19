import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function AppNavbar() {
  const { pathname } = useLocation();

  return (
    <Navbar
      bg="success"
      variant="dark"
      className="shadow-sm py-3"
      sticky="top"
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand / Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-white"
        >
          🛒 Smart Grocery
        </Navbar.Brand>

        {/* Only About Us link now */}
        <Nav>
          <Nav.Link
            as={Link}
            to="/about"
            active={pathname === "/about"}
            className="text-white fw-semibold"
          >
            About Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
