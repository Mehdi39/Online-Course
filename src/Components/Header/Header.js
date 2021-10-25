import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="./">Master Class</Link></Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="./home">Home</Link></Nav.Link>
            <Nav.Link><Link to="./courses">Courses</Link></Nav.Link>
            <Nav.Link><Link to="./about-us">About Us</Link></Nav.Link>
            <Nav.Link><Link to="./Login">Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
