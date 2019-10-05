import React from 'react'
import { Form, Container, Row, Alert, Button, Col, DropdownButton, Jumbotron,InputGroup, ListGroup } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import 'react-day-picker/lib/style.css';
import { WEEKDAYS_LONG, WEEKDAYS_SHORT, MONTHS } from "./CalenderBr"


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adultos: 0,
            crianca: 0,
            bebes: 0,
            date: new Date(),
            selectDateIn: "",
            selectDateOut:"",
            address: "",
        }
    }

    handleChange =  address => {
        
        this.setState({ address });
    };

    somar = (event) => {
        const nome = event.target.name
        const value = event.target.value + 1
        console.log(nome)
        this.setState({
            [nome]: value
        })

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


    handleDayClickIn = (day, { selected }) => {
        const selectedDay = day.toLocaleDateString()
        this.setState({
            selectDateIn: selected ? undefined : selectedDay,
        }); 
    }

    handleDayClickOut = (day, { selected }) => {
        const selectedDay = day.toLocaleDateString()
        this.setState({
            selectDateOut: selected ? undefined : selectedDay,
        }); 
    }

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
        //   .then(latLng => console.log('Success', latLng))
        //   .catch(error => console.error('Error', error));
        };

    render() {
        const today = new Date()
        return (
            <div>
                {console.log("olaa", this.state.selectDateIn)}
                <Container>
                    <Jumbotron fluid="true">
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <h1 >Escolha seu destino</h1>
                            </Col>
                        </Row>
                        <Form style={{zIndex: 1}}>
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
                                                <div style={{zIndex: 2, position: "absolute"}}  className="autocomplete-dropdown-container">
                                                {/* {console.log(suggestions)} */}
                                                {suggestions.map(suggestion => {
                                                    
                                                    const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                
                                                    const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer'}
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer'};
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
                                                    selectedDays={null}
                                                    onDayClick={this.handleDayClickIn}
                                                    disabledDays={{ before: today }}
                                                    months={MONTHS}
                                                    weekdaysLong={WEEKDAYS_LONG}
                                                    weekdaysShort={WEEKDAYS_SHORT}
                                                />
                                            
                                            </DropdownButton>
                                            <Form.Control id="inputCalendar2" placeholder="--/--/----" aria-describedby="basic-addon1" type="text" value={this.state.selectDateIn === null ? "" : this.state.selectDateIn} size="sm" readOnly />
                                        </InputGroup>
                                        
                                    </Col>
                                    <Col xs lg={3}>
                                        <InputGroup>
                                            <Form.Control id="inputCalendar1" placeholder="--/--/----" aria-describedby="basic-addon1" type="text" value={this.state.selectDateOut} size="sm" readOnly />
                                            <DropdownButton
                                                as={InputGroup.Prepend}
                                                variant="outline-info"
                                                title="Check-out"
                                                id="input-group-dropdown-2"
                                                size="sm"
                                                
                                            >
                                                <DayPicker
                                                    selectedDays={null}
                                                    onDayClick={this.handleDayClickOut}
                                                    disabledDays={{ before: today }}
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
                                                <h6 style={{textAlign: "center"}}>Adultos</h6>
                                                <Button style={{ marginRight: 10 }} size="sm" onClick={this.diminuirAdulto} variant="outline-primary">-</Button>
                                                {this.state.adultos}
                                                <Button style={{ marginLeft: 10 }} size="sm" onClick={this.somarAdulto} variant="outline-primary">+</Button>
                                            </Alert>
                                        </Col>
                                    
                                        <Col md="auto">
                                            <Alert key="2" variant="primary">
                                                <h6 style={{textAlign: "center"}}>Crianças</h6>
                                                <Button style={{ marginRight: 10 }} size="sm" onClick={this.diminuirCrianca} variant="outline-primary">-</Button>
                                                {this.state.crianca}
                                                <Button style={{ marginLeft: 10 }} size="sm" onClick={this.somarCrianca} variant="outline-primary">+</Button>
                                            </Alert>
                                        </Col>
                                    
                                        <Col md="auto">
                                            <Alert key="3" variant="primary">
                                                <h6 style={{textAlign: "center"}}>Bebês</h6>
                                                <Button style={{ marginRight: 10 }} size="sm" onClick={this.diminuirBebes} variant="outline-primary">-</Button>
                                                {this.state.bebes}
                                                <Button style={{ marginLeft: 10 }} size="sm" onClick={this.somarBebes} variant="outline-primary">+</Button>
                                            </Alert>
                                        </Col>
                                </Row>
                            <Row className="justify-content-md-center">
                                <Col md={{ span: 4, offset: "auto" }}>
                                    <Button variant="primary" block>Procurar</Button>
                                </Col>
                            </Row>
                        </Form>

                    </Jumbotron>
                </Container>
                {/* <div>
                    <CarrosselAnimado/>
                </div> */}
                
            </div>
        )
    }
}

export default SearchForm