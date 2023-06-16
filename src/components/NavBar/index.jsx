import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand><Link to="/">Real Estate</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar