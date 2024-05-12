import React from 'react';
import { Navbar, Nav, Container,Badge } from 'react-bootstrap';

const Navigation = ({ orders }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">BeanCafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/OrderCoffe">Order Now</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/OrderCoffee">My Orders <Badge bg="secondary">{orders.length}</Badge></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
