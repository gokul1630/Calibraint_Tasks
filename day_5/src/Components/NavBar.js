import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(props) {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Todo</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/todo">Add Todo</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
