import React from 'react';
import { Navbar, NavbarBrand, Nav, Image, ButtonToolbar, Button, Row, Col } from 'react-bootstrap'
import Photo from '../../Utils/Images/campainha-de-mesa.png'
import LoginModal from '../Modal/LoginModal'
import CadastrarModal from '../Modal/CadastroModal'


function Header() {
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const [cadastroModalShow, setCadastroModalShow] = React.useState(false);
    return (
        <Navbar className="justify-content-between" bg="primary" variant='dark'>
            <Nav >
                <Nav.Item>
                    <Image style={{ width: 40, height: 40 }} src={Photo} roundedCircle />
                </Nav.Item>
                <NavbarBrand className="Brand">Hotelaria-Jambalaya</NavbarBrand>
            </Nav>
            <Nav>
                {/* Modal de Login */}
                <Row>
                    <Col>
                        <ButtonToolbar>
                            <Button variant="primary" onClick={() => setLoginModalShow(true)}>
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
            </Nav>
        </Navbar>
    )
}

export default Header;
