import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand><Link to="/">Real Estate</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item style={{ marginRight: '8px' }}>
                        <Link to="/">Home</Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link to="/search">Search</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar