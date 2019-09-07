import React from 'react';
import { Form} from 'react-bootstrap'

const Login = () => {
    return(
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
    )
}
export default Login