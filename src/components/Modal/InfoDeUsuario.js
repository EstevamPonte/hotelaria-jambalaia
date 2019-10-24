import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { getToken } from '../../services/auth'



class InfoDeUsuario extends Component {
    render() {
        const userInfo = JSON.parse(getToken())
        console.log(userInfo[0].name)
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
                    <p>{userInfo[0].number}</p>
                    <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                </Modal.Body>
            </Modal>
        )
    }
}

export default InfoDeUsuario