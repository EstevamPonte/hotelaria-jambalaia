import React from 'react'
import { Card, Row, Col, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
const CardDeReserva = (props) => {
    return (
        <Card border="primary" style={{ marginBottom: '0.5rem' }}>
            <Card.Header><FontAwesomeIcon icon={faHotel} /> {props.name}</Card.Header>
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
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default CardDeReserva