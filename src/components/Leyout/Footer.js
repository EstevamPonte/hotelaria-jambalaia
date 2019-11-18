import React from 'react'
import { Navbar, NavbarBrand, Row } from 'react-bootstrap';


function Footer() {
    return (
        <Navbar fixed="bottom" fi bg="light" variant="light">
            <NavbarBrand>
                <Row className='footerLatter'>
                    Adriano Augusto de Sousa Junior
                </Row>
                <Row className='footerLatter'>
                    Estevam Alcântara Ponte
                </Row>
            </NavbarBrand>
        </Navbar>
    )
}
export default Footer