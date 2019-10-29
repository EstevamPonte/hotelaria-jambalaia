import React from 'react'
import { Form, Container, Row, Alert, Button, Col, DropdownButton, Jumbotron, InputGroup, ListGroup } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import 'react-day-picker/lib/style.css';
import { WEEKDAYS_LONG, WEEKDAYS_SHORT, MONTHS } from "./CalenderBr"
import CardHoteis from '../../Cards/CardHoteis'
import * as Config from '../../../config/constants'
import axios from 'axios'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adultos: 0,
            crianca: 0,
            bebes: 0,
            date: new Date(),
            selectDateIn: undefined,
            selectDateOut: undefined,
            address: "",
            longitude: "",
            latitude: "",
        }
    }

    // componentDidMount(){
    //     this.getHotel()
    // }
    postHotel(latLng){
        console.log(latLng)
        axios.post(Config.URL + 'place_search', latLng)
            .then(resp => {
                console.log(resp)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const latLng = {
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }
        this.postHotel(latLng)
    }

    handleChange = address => {
        this.setState({ address });
    };

    quantidadeAdultos = (diferenca) => {
        let quantidade = this.state.adultos + diferenca
        if (quantidade >= 0) {
            this.setState({
                adultos: quantidade
            })
        }
    }

    quantidadeCriancas = (diferenca) => {
        let quantidade = this.state.crianca + diferenca
        if (quantidade >= 0) {
            this.setState({
                crianca: quantidade
            })
        }
    }

    quantidadeBebes = (diferenca) => {
        let quantidade = this.state.bebes + diferenca
        if (quantidade >= 0) {
            this.setState({
                bebes: quantidade
            })
        }
    }

    setDateIn = (value) => {
        let valor = String(value)
        let resultado = valor.split(" ")
        let dias = `${resultado[0]} ${resultado[2]}/${resultado[1]}/${resultado[3]}`
        this.setState({
            selectDateIn: dias
        })
    }

    setDateOut = (value) => {
        let valor = String(value)
        let resultado = valor.split(" ")
        let dias = `${resultado[0]} ${resultado[2]}/${resultado[1]}/${resultado[3]}`
        this.setState({
            selectDateOut: dias
        })
    }


    handleDayClickIn = (day, modifiers = {}) => {
        if (modifiers.disabled !== true) {
            this.setState({
                selectDateIn: modifiers.selected ? undefined : day,
            });
        }
    }

    handleDayClickOut = (day, modifiers = {}) => {
        if (modifiers.disabled !== true) {
            this.setState({
                selectDateOut: modifiers.selected ? undefined : day,
            });
        }
    }

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
          .then(latLng => {
              let latitude = `${latLng.lat}`
              let longitude = `${latLng.lng}`
              this.setState({
                  latitude,
                  longitude
              })
          })
          .catch(error => console.error('Error', error));
    };

    render() {
        const today = new Date()
        return (
            <div>
                <Container>
                    <Jumbotron fluid="true">
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <h1 >Escolha seu destino</h1>
                            </Col>
                        </Row>
                        <Form style={{ zIndex: 1 }}>
                            {/* Form de destino */}
                            <Form.Group controlId="formLocal" >
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
                                                        size="sm"
                                                        {...getInputProps({
                                                            placeholder: 'Digite um destino...',
                                                            className: 'location-search-input',
                                                        })}
                                                    />
                                                    <div style={{ zIndex: 2, position: "absolute" }} className="autocomplete-dropdown-container">
                                                        {/* {console.log(suggestions)} */}
                                                        {suggestions.map(suggestion => {

                                                            const className = suggestion.active
                                                                ? 'suggestion-item--active'
                                                                : 'suggestion-item';
                                                            // inline style for demonstration purpose

                                                            const style = suggestion.active
                                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                            return (
                                                                <ListGroup
                                                                    {...getSuggestionItemProps(suggestion, {
                                                                        className,
                                                                        style,
                                                                    })}
                                                                >
                                                                    <ListGroup.Item >{suggestion.formattedSuggestion.mainText}</ListGroup.Item>
                                                                </ListGroup>
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
                            <Form.Group>
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
                                                <DayPicker
                                                    selectedDays={this.state.selectDateIn}
                                                    disabledDays={{ before: today }}
                                                    onDayClick={this.handleDayClickIn}
                                                    months={MONTHS}
                                                    weekdaysLong={WEEKDAYS_LONG}
                                                    weekdaysShort={WEEKDAYS_SHORT}
                                                />

                                            </DropdownButton>
                                            <Form.Control id="inputCalendar2" placeholder="--/--/----" aria-describedby="basic-addon1" type="text" value={this.state.selectDateIn === undefined ? "" : this.state.selectDateIn.toLocaleDateString()} size="sm" readOnly />
                                        </InputGroup>

                                    </Col>
                                    <Col xs lg={3}>
                                        <InputGroup>
                                            <Form.Control id="inputCalendar1" placeholder="--/--/----" aria-describedby="basic-addon1" type="text" value={this.state.selectDateOut === undefined ? "" : this.state.selectDateOut.toLocaleDateString()} size="sm" readOnly />
                                            <DropdownButton
                                                as={InputGroup.Prepend}
                                                variant="outline-info"
                                                title="Check-out"
                                                id="input-group-dropdown-2"
                                                size="sm"

                                            >
                                                <DayPicker
                                                    selectedDays={this.state.selectDateOut}
                                                    disabledDays={{ before: today }}
                                                    onDayClick={this.handleDayClickOut}
                                                    months={MONTHS}
                                                    weekdaysLong={WEEKDAYS_LONG}
                                                    weekdaysShort={WEEKDAYS_SHORT}
                                                />
                                            </DropdownButton>

                                        </InputGroup>
                                    </Col>

                                </Row>
                            </Form.Group>

                            {/* Form de pessoas */}

                            <Row className="justify-content-md-center">
                                <Col md="auto" >
                                    <Alert key="1" variant="primary">
                                        <h6 style={{ textAlign: "center" }}>Adultos</h6>
                                        <Button style={{ marginRight: 10 }} size="sm" onClick={() => this.quantidadeAdultos(-1)} variant="outline-primary">-</Button>
                                        {this.state.adultos}
                                        <Button style={{ marginLeft: 10 }} size="sm" onClick={() => this.quantidadeAdultos(1)} variant="outline-primary">+</Button>
                                    </Alert>
                                </Col>

                                <Col md="auto">
                                    <Alert key="2" variant="primary">
                                        <h6 style={{ textAlign: "center" }}>Crianças</h6>
                                        <Button style={{ marginRight: 10 }} size="sm" onClick={() => this.quantidadeCriancas(-1)} variant="outline-primary">-</Button>
                                        {this.state.crianca}
                                        <Button style={{ marginLeft: 10 }} size="sm" onClick={() => this.quantidadeCriancas(1)} variant="outline-primary">+</Button>
                                    </Alert>
                                </Col>

                                <Col md="auto">
                                    <Alert key="3" variant="primary">
                                        <h6 style={{ textAlign: "center" }}>Bebês</h6>
                                        <Button style={{ marginRight: 10 }} size="sm" onClick={() => this.quantidadeBebes(-1)} variant="outline-primary">-</Button>
                                        {this.state.bebes}
                                        <Button style={{ marginLeft: 10 }} size="sm" onClick={() => this.quantidadeBebes(1)} variant="outline-primary">+</Button>
                                    </Alert>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md={{ span: 4, offset: "auto" }}>
                                    <Button type='submit' onClick={this.handleSubmit.bind(this)} variant="primary" block>Procurar</Button>
                                </Col>
                            </Row>
                        </Form>

                    </Jumbotron>
                    <CardHoteis/>
                </Container>
                {/* <div>
                    <CarrosselAnimado/>
                </div> */}

            </div>
        )
    }
}

export default SearchForm