import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap'

function Header() {
    return (
        <Navbar className="justify-content-between" bg="primary" variant='dark'>
            <NavbarBrand href="Home">Hotelaria Jambalaia</NavbarBrand>
            <Nav>
                <Nav.Link href='Login'>Login</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;
