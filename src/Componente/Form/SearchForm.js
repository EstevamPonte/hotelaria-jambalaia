import React from 'react'
import { Form, Container, Row, Dropdown, Button, Col, InputGroup, DropdownButton} from 'react-bootstrap';
import Calendar from 'react-calendar'
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adultos: 0,
            crianca: 0,
            bebes: 0,
            date: new Date(),
            selectDateIn: ""
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

    setDate = (year) => {
        // this.setState({
        //     selectDateIn: value
        // })
        console.log()
    }

    onDateChange = date => this.setState({ date })

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
                        <Form.Group controlId="formLocal">
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Form.Label>Local</Form.Label>
                                    <Form.Control label='Local' size="lg" type="text" placeholder="Escolha seu destino"></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="FormCalendar">

                            <Row className="justify-content-md-center">
                                <Col xs lg={3}>
                                    <InputGroup className="mb-3">
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title="Dropdown"
                                            id="input-group-dropdown-1"
                                        >
                                        <Calendar
                                                onDateChange={this.onDateChange}
                                                value={this.state.date}
                                                onClickDay={this.setDate}
                                                
                                            />   
                                        </DropdownButton>
                                        <Form.Control aria-describedby="basic-addon1" type="text" value={this.state.selectDateIn}/>
                                    </InputGroup>

                                    {/* <Dropdown>
                                        <Dropdown.Toggle variant='info' id="dropdown-basic">
                                            Entrada
                                                </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ padding: 0 }}>
                                        <Calendar
                                                onDateChange={this.onDateChange}
                                                value={this.state.date}
                                            /> 
                                        </Dropdown.Menu>
                                    </Dropdown> */}
                                    
                                </Col>

                                <Col xs lg={3}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='info' id="dropdown-basic">
                                            Saída
                                                </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ padding: 0 }}>
                                            <Calendar
                                                onDateChange={this.onDateChange}
                                                value={this.state.date}
                                            />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>

                            </Row>
                        </Form.Group>



                        <Dropdown>
                            <Dropdown.Toggle variant='info' id="dropdown-basic">
                                Pessoas
                                    </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: 250 }}>
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
                            </Dropdown.Menu>

                        </Dropdown>



                    </Form>
                </Container>
            </div>
        )
    }
}

export default SearchForm