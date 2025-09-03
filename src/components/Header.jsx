import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-light py-3 border-bottom shadow-sm fixed-top"
    >
      <div className="container">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="../assets/logo1.png" // Replace with your logo path
            alt="PonceHealth Logo"
            height="30"
            className="d-inline-block align-top me-2"
          />
          {/*<h5 className="fw-bold mb-0">UMRA</h5>*/}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fw-bold">
            <Nav.Link href="#features" className="me-lg-3">
              Features
            </Nav.Link>
            <Nav.Link href="#benefits" className="me-lg-3">
              Benefits
            </Nav.Link>
            <Nav.Link href="#about" className="me-lg-3">
              About
            </Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <Button
              variant="outline-primary"
              className="rounded-pill me-2 fw-bold"
              style={{ borderColor: "#6a11cb", color: "#6a11cb" }}
            >
              Sign In
            </Button>
            <a href="#join">
              <Button
                variant="primary"
                className="rounded-pill px-4 fw-bold"
                style={{
                  background:
                    "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                  border: "none",
                }}
              >
                Join Early Access
              </Button>
            </a>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
