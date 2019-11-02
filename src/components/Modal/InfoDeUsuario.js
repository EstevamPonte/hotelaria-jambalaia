import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { getToken } from '../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUser, faCity } from '@fortawesome/free-solid-svg-icons'
import CardDeReserva from './CardDeReserva'


class InfoDeUsuario extends Component {
    
    render() {
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
                    <Modal.Title id="contained-modal-title-vcenter">
                        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faUser}/>
                        {userInfo[0].name}
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
                            <h1 >Suas reservas</h1>
                        </Col>
                    </Row>                    
                    
                    <CardDeReserva/>
                    <CardDeReserva/>
                    <CardDeReserva/>
                    <CardDeReserva/>
                    <CardDeReserva/>

                </Modal.Body>
            </Modal>
        )
    }
}

export default InfoDeUsuario