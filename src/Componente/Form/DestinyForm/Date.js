import React, { Component } from 'react';
import { Form, Row, Col, InputGroup, DropdownButton } from 'react-bootstrap';
import Calendar from 'react-calendar';

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            selectDateIn: ""
        }
    }

    setDate = (value) => {
        let valor = String(value)
        let resultado = valor.split(" ")
        let dias = `${resultado[0]} ${resultado[2]}/${resultado[1]}/${resultado[3]}`
        this.setState({
            selectDateIn: dias
        })
    }

    onDateChange = date => this.setState({ date })

    render() {
        return (
            <Form.Group controlId="FormCalendar">
                <Row className="justify-content-md-center">
                    <Col xs lg={3}>
                        <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-info"
                                title="Check-in"
                                id="input-group-dropdown-1"
                                size="sm"
                            >
                                <Calendar
                                    onDateChange={this.onDateChange}
                                    value={this.state.date}
                                    onClickDay={this.setDate}

                                />
                            </DropdownButton>
                            <Form.Control aria-describedby="basic-addon1" type="text" value={this.state.selectDateIn} size="sm" readOnly/>
                        </InputGroup>
                    </Col>

                    <Col xs lg={3}>

                    <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-info"
                                title="Check-out"
                                id="input-group-dropdown-1"
                                size="sm"
                            >
                                <Calendar
                                    onDateChange={this.onDateChange}
                                    value={this.state.date}
                                    onClickDay={this.setDate}

                                />
                            </DropdownButton>
                            <Form.Control aria-describedby="basic-addon1" type="text" value={this.state.selectDateIn} size="sm" readOnly/>
                        </InputGroup>
                    </Col>

                </Row>
            </Form.Group>
        );
    }
}

export default Data;