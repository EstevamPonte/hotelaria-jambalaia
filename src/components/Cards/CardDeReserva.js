import React from 'react'
import { Card, Row, Col, Badge, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import * as Config from '../../config/constants'
import { getToken } from '../../services/auth'
const CardDeReserva = (props) => {
    const deleteReserve = () => {
        const hotelId = {hotel_id: props.id}
        axios.post(Config.URL + 'remove_reservation', hotelId)
            .then(resp => {
                const userInfo = JSON.parse(getToken())
                alert(resp.data.message)
                props.getUserReserve({account_id: userInfo[0].id})
            })
            .catch(erro => {
                console.log(erro)
            })
    }
    return (
        <Card border="primary" style={{ marginBottom: '0.5rem' }}>
            <Card.Header>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faHotel} /> {props.name}
                    </Col>
                    <Col sm="auto">
                        <Button variant="danger" size="sm" onClick={deleteReserve}>Excluir reserva</Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                        <Row className="justify-content-md-center">
                            <Col xs lg="auto"  >
                                <h5>
                                    CheckIn <Badge variant="info">{props.datein}</Badge>
                                </h5>
                            </Col>
                            <Col sm='auto'>
                                <h5>
                                    CheckOut <Badge variant="info">{props.dateout}</Badge>
                                </h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm='3'>
                                <h5>
                                    Adultos <Badge variant="info">{props.adulto}</Badge>
                                </h5>
                            </Col>
                            <Col sm='3'>
                                <h5>
                                    Criança <Badge variant="info">{props.crianca}</Badge>
                                </h5>
                            </Col>
                            <Col sm='auto'>
                                <h5>
                                    Bebes <Badge variant="info">{props.bebe}</Badge>
                                </h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm='auto'>
                                <h5>
                                    Endereço <Badge variant="info">{props.address}</Badge>
                                </h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm='auto'>
                                <h5>
                                    Telefone <Badge variant="info">{props.phone}</Badge>
                                </h5>
                            </Col>
                        </Row>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default CardDeReserva