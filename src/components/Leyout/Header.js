import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, Image, ButtonToolbar, Button, Row, Col } from 'react-bootstrap'
import Photo from '../../Utils/Images/campainha-de-mesa.png'
import LoginModal from '../Modal/LoginModal'
import InfoDeUsuario from '../Modal/InfoDeUsuario'
import CadastrarModal from '../Modal/CadastroModal'

import { isAuthenticated, logout } from '../../services/auth'

function Header() {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [cadastroModalShow, setCadastroModalShow] = useState(false);
    const [login, setLogin] = useState(false)
    const [update, setUpdate] = useState(false)

    const deslogar = (event) => {
        event.preventDefault()
        setLogin(!login)
        logout()
    }

    const autenticacao = isAuthenticated() ?
        <Row>
            <Col>
                <Button variant="primary" onClick={deslogar}>
                    Logout
                </Button>
            </Col>
            <Col>
                <ButtonToolbar>

                    <Button variant="primary" onClick={() => setUpdate(true)}>
                        Usuario
                    </Button>
                    <InfoDeUsuario
                        show={update}
                        onHide={() => setUpdate(false)}
                    />
                </ButtonToolbar>
            </Col>
        </Row>
        :
        <Row>
            <Col>
                <ButtonToolbar>
                    <Button variant="outline-info" onClick={() => setLoginModalShow(true)}>
                        Login
                </Button>

                    <LoginModal
                        show={loginModalShow}
                        onHide={() => setLoginModalShow(false)}
                    />
                </ButtonToolbar>
            </Col>
            {/* Modal de Cadastro */}
            <Col>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => setCadastroModalShow(true)}>
                        Cadastrar
                </Button>

                    <CadastrarModal
                        show={cadastroModalShow}
                        onHide={() => setCadastroModalShow(false)}
                    />
                </ButtonToolbar>
            </Col>
        </Row>
    return (
        <Navbar className="justify-content-between" bg="light" variant='light'>
            <Nav>
                <Nav.Item>
                    <Image style={{ width: 40, height: 40 }} src={Photo} roundedCircle />
                </Nav.Item>
                <NavbarBrand className="Brand">Hotelaria-Jambalaya</NavbarBrand>
            </Nav>
            <Nav>
                {/* Modal de Login */}
                {autenticacao}
            </Nav>

        </Navbar>
    )
}

export default Header;
