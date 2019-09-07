import React from 'react';
import { Navbar, NavbarBrand, Nav, Image, ButtonToolbar, Button, Row, Col } from 'react-bootstrap'
import Photo from '../../Utils/Images/campainha-de-mesa.png'
import LoginModal from '../Modal/LoginModal'
import CadastrarModal from '../Modal/CadastroModal'
import InfoModal from '../Modal/InfoModal'


function Header() {
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const [cadastroModalShow, setCadastroModalShow] = React.useState(false);
    const [infoModalShow, setInfoModalShow] = React.useState(false);
    return (
        <Navbar className="justify-content-between" bg="light" variant='light'>
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
                    <Col>
                        <ButtonToolbar>
                            <Button variant="primary" onClick={() => setInfoModalShow(true)}>
                                Info
                            </Button>

                            <InfoModal
                                show={infoModalShow}
                                onHide={() => setInfoModalShow(false)}
                            />
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Nav>
        </Navbar>
    )
}

export default Header;
