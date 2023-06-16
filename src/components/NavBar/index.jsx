import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Real Estate</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar