import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="navbar-custom sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
                    SmartHealth
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="fw-medium">Home</Nav.Link>
                        <Nav.Link as={Link} to="/patients" className="fw-medium">Patients</Nav.Link>
                        <Nav.Link as={Link} to="/add-patient" className="fw-medium">Add Patient</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
