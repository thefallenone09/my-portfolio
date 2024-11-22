import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Rangga Arsena</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Tentang</Nav.Link>
            <Nav.Link as={Link} to="/education">Pendidikan</Nav.Link>
            <Nav.Link as={Link} to="/experience">Pengalaman</Nav.Link>
            <Nav.Link as={Link} to="/projects">Proyek</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontak</Nav.Link>
            <Nav.Link as={Link} to="/profile">Kelola Profil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

