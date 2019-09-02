import React from 'react'
import { Form, Container, Row, Dropdown, Button, Col, InputGroup, DropdownButton} from 'react-bootstrap';
import Destiny from './Destiny';
import Data from './Date';
import { CarrosselAnimado } from './CarrosselAnimado';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adultos: 0,
            crianca: 0,
            bebes: 0,
        }
    }

    diminuirAdulto = (event) => {
        // event.preventDefault()
        if (this.state.adultos !== 0) {
            let subtracao = this.state.adultos - 1
            this.setState({
                adultos: subtracao
            })
        }
    }

    diminuirCrianca = (event) => {
        event.preventDefault()
        if (this.state.crianca !== 0) {
            let subtracao = this.state.crianca - 1
            this.setState({
                crianca: subtracao
            })
        }
    }

    diminuirBebes = (event) => {
        event.preventDefault()
        if (this.state.bebes !== 0) {
            let subtracao = this.state.bebes - 1
            this.setState({
                bebes: subtracao
            })
        }
    }

    somarAdulto = (event) => {
        event.preventDefault()
        let soma = this.state.adultos + 1
        this.setState({
            adultos: soma
        })
    }

    somarCrianca = (event) => {
        event.preventDefault()
        let soma = this.state.crianca + 1
        this.setState({
            crianca: soma
        })
    }

    somarBebes = (event) => {
        event.preventDefault()
        let soma = this.state.bebes + 1
        this.setState({
            bebes: soma
        })
    }



    render() {

        return (
            <div>
                
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h1 >Escolha seu destino</h1>
                        </Col>
                    </Row>
                    <Form>
                        <Destiny/>
                        <Data/>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <DropdownButton size="sm" variant="outline-secondary" title="Pessoas">
                                    
                                        <Row>
                                            <Col xs={6}>
                                                <Dropdown.Item disabled style={{ width: 200 }} key="3">Adultos</Dropdown.Item>
                                            </Col>
                                            <Col xs={6}>
                                                <Button style={{ marginRight: 10 }} size="sm" onClick={this.diminuirAdulto} variant="outline-primary">-</Button>
                                                {this.state.adultos}
                                                <Button style={{ marginLeft: 10 }} size="sm" onClick={this.somarAdulto} variant="outline-primary">+</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Dropdown.Item disabled key="2">Crianças</Dropdown.Item>
                                            </Col>
                                            <Col>
                                                <Button style={{ marginRight: 10 }} size="sm" onClick={this.diminuirCrianca} variant="outline-primary">-</Button>
                                                {this.state.crianca}
                                                <Button style={{ marginLeft: 10 }} size="sm" onClick={this.somarCrianca} variant="outline-primary">+</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Dropdown.Item disabled key="3">Bebês</Dropdown.Item>
                                            </Col>
                                            <Col>
                                                <Button style={{ marginRight: 10 }} size="sm" onClick={this.diminuirBebes} variant="outline-primary">-</Button>
                                                {this.state.bebes}
                                                <Button style={{ marginLeft: 10 }} size="sm" onClick={this.somarBebes} variant="outline-primary">+</Button>
                                            </Col>
                                        </Row>
                                    

                                </DropdownButton>
                            </Col>
                        </Row>
                                <CarrosselAnimado/>

                    </Form>
                </Container>
            </div>
        )
    }
}

export default SearchForm