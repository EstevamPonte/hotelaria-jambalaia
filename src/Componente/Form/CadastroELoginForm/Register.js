import React from 'react';
import { Form, Col } from 'react-bootstrap'

const Register = () => {
    return(
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
    )
}
export default Register