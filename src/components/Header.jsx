import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ClotaLogoo from "../images/ClotaLogoo.png";

const Header = () => {
  return (
    <>
      <Navbar
        bg="light"
        sticky="top"
        id="mainNavbar"
        variant="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={ClotaLogoo} alt="clotaLogo" width="70px" />
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <h1>Timesheet</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link className="text-black links" href="#home">
                <h5>Home</h5>
              </Nav.Link>
              <Nav.Link className="text-black links" href="#link">
                <h5>About Site</h5>
              </Nav.Link>
              <Nav.Link className="text-black links" href="#link">
                <h5>Contact Us</h5>
              </Nav.Link>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
