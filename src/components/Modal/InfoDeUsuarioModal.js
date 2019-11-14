import React, { Component } from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import { getToken } from '../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUser, faCity } from '@fortawesome/free-solid-svg-icons'
import CardDeReserva from '../Cards/CardDeReserva'
import axios from 'axios'
import * as Config from '../../config/constants'


class InfoDeUsuarioModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation: []
        }
    }

    componentDidMount(){
        const userInfo = JSON.parse(getToken())
        const id = {account_id: userInfo[0].id}
        this.getUserReserve(id)
    }

    getUserReserve = (id) =>{
        axios.post(Config.URL + 'user_reservation', id)
            .then(resp => {
                console.log(resp.data.user_hotels)
                this.setState({
                    reservation: resp.data.user_hotels
                })
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    lisHotelReservation = () => {
        return this.state.reservation.map((hotel) =>
            <CardDeReserva key={hotel.id} id={hotel.id} name={hotel.name} datein={hotel.checkin}
            getUserReserve={this.getUserReserve}
            dateout={hotel.checkout} adulto={hotel.qtd_adultos} bebe={hotel.qtd_bebes}
            crianca={hotel.qtd_criancas} address={hotel.hotel_name} phone={hotel.hotel_phone}/>
        )
        
    }

    
    render() {
        const lisHotelReservation = this.lisHotelReservation()
        const userInfo = JSON.parse(getToken())
        console.log(userInfo)
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Row>
                            <Col>
                                <FontAwesomeIcon style={{marginRight: '10px'}} icon={faUser}/> {userInfo[0].name}
                            </Col>  
                            <Col sm="auto" >
                                <Button variant="success" size="sm" onClick={() => this.getUserReserve({account_id: userInfo[0].id})}>Atualizar reservas</Button>
                            </Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-md-center">
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </Col>
                        <Col xs={10} sm={10} md={10} lg="auto">
                            <p>{userInfo[0].email}</p>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <FontAwesomeIcon icon={faPhone}/>
                        </Col>
                        <Col xs={10} sm={10} md={10} lg="auto">
                            <p>{userInfo[0].cellphone}</p>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <FontAwesomeIcon icon={faCity}/>
                        </Col>
                        <Col xs={10} sm={10} md={10} lg="auto">
                            <p>{userInfo[0].city}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sm='auto'>
                            {this.state.reservation.length === 0 ? <h1 >Não há reservas</h1>: <h1 >Suas reservas</h1>}
                        </Col>
                    </Row>   
                    {lisHotelReservation}

                </Modal.Body>
            </Modal>
        )
    }
}

export default InfoDeUsuarioModal