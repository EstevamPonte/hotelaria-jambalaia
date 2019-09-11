import React from 'react'
import { Form, Container, Row, Dropdown, Button, Col, DropdownButton, Jumbotron,InputGroup } from 'react-bootstrap';
import { CarrosselAnimado } from './CarrosselAnimado';
import Calendar from 'react-calendar';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adultos: 0,
            crianca: 0,
            bebes: 0,
            date: new Date(),
            selectDateIn: "",
            address: "",
        }
    }

    handleChange = address => {
        this.setState({ address });
    };

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


    setDate = (value) => {
        let valor = String(value)
        let resultado = valor.split(" ")
        let dias = `${resultado[0]} ${resultado[2]}/${resultado[1]}/${resultado[3]}`
        this.setState({
            selectDateIn: dias
        })
    }

    onDateChange = date => this.setState({ date })

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };

    render() {

        return (
            <div>
                <Container>
                    <Jumbotron>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <h1 >Escolha seu destino</h1>
                            </Col>
                        </Row>
                        <Form>
                            {/* Form de destino */}
                            <Form.Group controlId="formLocal">
                                <Row className="justify-content-md-center">
                                    <Col md="auto">
                                        
                                        <PlacesAutocomplete
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                            onSelect={this.handleSelect}
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div>
                                                <Form.Control
                                                {...getInputProps({
                                                    placeholder: 'Search Places ...',
                                                    className: 'location-search-input',
                                                })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                {loading && <div>Loading...</div>}
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                    return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                    );
                                                })}
                                                </div>
                                            </div>
                                            )}
                                        </PlacesAutocomplete>
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Calentadarios */}
                            <Form.Group controlId="FormCalendar">
                                <Row className="justify-content-md-center">
                                    <Col xs lg={3}>
                                        <InputGroup>
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
                                            <Form.Control aria-describedby="basic-addon1" type="text" value={this.state.selectDateIn} size="sm" readOnly />
                                        </InputGroup>
                                    </Col>
                                    <Col xs lg={3}>
                                        <InputGroup>
                                            <Form.Control aria-describedby="basic-addon1" type="text" value={this.state.selectDateIn} size="sm" readOnly />
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
                                            
                                        </InputGroup>
                                    </Col>

                                </Row>
                            </Form.Group>

                            {/* Form de pessoas */}
                            <Form.Group>
                                <Row className="justify-content-md-center">
                                    <Col md="auto">
                                        <DropdownButton size="sm" variant="outline-info" title="Pessoas">
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
                            </Form.Group>
                            <Button variant="primary" size="sm" block>Procurar</Button>
                        </Form>

                        {/* <CarrosselAnimado/> */}
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default SearchForm