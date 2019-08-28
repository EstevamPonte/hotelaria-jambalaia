import React from 'react';
import { Navbar, NavbarBrand, Nav, Image, Row, Col, Container } from 'react-bootstrap'
import Photo from '../../Utils/Images/campainha-de-mesa.png'


function Header() {
    return (
        <Navbar className="justify-content-between" bg="primary" variant='dark'>
            <Nav >
                <Nav.Item>
                    <Image style={{ width: 40, height: 40 }} src={Photo} roundedCircle />
                </Nav.Item>
                <NavbarBrand className="Brand">Hotelaria-Jambalaya</NavbarBrand>
            </Nav>
            <Nav>
                <Nav.Item>
                    <Nav.Link href='Login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='Login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='Login'>Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Header;
