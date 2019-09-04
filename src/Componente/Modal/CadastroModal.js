import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'
const CadastroModal = (props) => {
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
                    Faça seu cadastro
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Corpo do Modal */}
                <Form>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite o email" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Repita a senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Numero de celular</Form.Label>
                            <Form.Control type="text" placeholder="Celular" />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
                <Button type="submit" variant="success">Cadastrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CadastroModal;