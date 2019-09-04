import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'




const LoginModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {/* Titulo do modal */}
                    Faça seu login
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Corpo do Modal */}
                <Form>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>
                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
                <Button type="submit" variant="success">Entrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;