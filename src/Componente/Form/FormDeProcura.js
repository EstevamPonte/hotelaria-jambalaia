import React from 'react'
import { Form, Container, Row, Dropdown, Button, Col } from 'react-bootstrap';

   


class FormDeProcura extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valor: 0
        }
    }

    diminuirPessoas = (event) => {
        event.preventDefault()
        let subtracao = this.state.valor - 1
        this.setState({
            valor: subtracao
        })
    }

    somarPessoas = (event) => {
        event.preventDefault()
        let soma = this.state.valor + 1
        this.setState({
            valor: soma
        })
    }

    render(){

        return (
            <Container>
    
                <Row>
                    <Form.Group controlId="formLocal">
                        <Form.Label>Local</Form.Label>
                        <Form.Control label='Local' size="lg" type="text" placeholder="Escolha seu destino"></Form.Control>
                    </Form.Group>
                </Row>
    
                <Row>
                    <Form.Group controlId="formPessoasQuantidade">
                        <Dropdown>
                            <Dropdown.Toggle variant='info' id="dropdown-basic">
                                Pessoas
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Row>
                                    <Col xs={6}>
                                        <Dropdown.Item disabled style={{width: 200}} key="3">Adultos</Dropdown.Item>
                                    </Col>
                                    <Col xs={6}>
                                        <Button style={{marginRight: 10}} size="sm" onClick={this.diminuirPessoas} variant="outline-primary">-</Button>
                                            {this.state.valor}
                                        <Button style={{marginLeft: 10}} size="sm" onClick={this.somarPessoas} variant="outline-primary">+</Button>
                                    </Col>

                                </Row>
                                
                                <Dropdown.Item disabled key="2">Crianças</Dropdown.Item>
                                <Dropdown.Item key="3">Bebês</Dropdown.Item>
                            </Dropdown.Menu>
    
                        </Dropdown>
                    </Form.Group>
                </Row>
    
            </Container>
        )
    }
}

export default FormDeProcura