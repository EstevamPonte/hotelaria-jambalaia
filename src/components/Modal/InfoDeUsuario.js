import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { getToken } from '../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


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
                        {/* Titulo do modal */}
                        {userInfo[0].name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <p>{userInfo[0].email}</p>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faPhone}/>
                        </Col>
                        <Col>
                            <p>{userInfo[0].cellphone}</p>
                        </Col>
                    </Row>
                        <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                </Modal.Body>
            </Modal>
        )
    }
}

export default InfoDeUsuario