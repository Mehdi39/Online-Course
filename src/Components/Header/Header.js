import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link className="text-light text-decoration-none" to="./">Master Class</Link></Navbar.Brand>
          <Nav>
            <Nav.Link><Link className="text-light text-decoration-none" to="./home">Home</Link></Nav.Link>
            <Nav.Link><Link className="text-light text-decoration-none" to="./courses">Courses</Link></Nav.Link>
            <Nav.Link><Link className="text-light text-decoration-none" to="./about-us">About Us</Link></Nav.Link>
            <Nav.Link><Link className="text-light text-decoration-none" to="./Login">Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
