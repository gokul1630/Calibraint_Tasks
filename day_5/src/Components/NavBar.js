import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Todos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#todos">Home</Nav.Link>
          <Nav.Link href="#addTodo">Add Todo</Nav.Link>
          <Nav.Link
            href="#/"
            onClick={() => {
              localStorage.clear()
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
