import React from 'react';
import { Modal } from 'react-bootstrap'
import { getToken } from '../../services/auth'

const InfoModal = (props) => {
    
    return (
        <Modal
            {...props}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                   
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default InfoModal;