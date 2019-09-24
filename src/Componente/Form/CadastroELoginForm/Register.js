import React, {Component} from 'react';
import { Form, Col } from 'react-bootstrap'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            nome: '',
            senha: '',
            confirmarSenha: '',
            celular: '',
         }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
        console.log(this.state.email)
    }

    
    render(){
        return(
            <div>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Digite o email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFullName">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="text" name="nome" value={this.state.nome} onChange={this.handleChange.bind(this)} placeholder="Digite seu nome completo" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" name="senha" value={this.state.senha} onChange={this.handleChange.bind(this)} placeholder="Senha" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Confirmar senha</Form.Label>
                        <Form.Control type="password" name="confirmarSenha" value={this.state.confirmarSenha} onChange={this.handleChange.bind(this)} placeholder="Confirmar senha" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Numero de celular</Form.Label>
                        <Form.Control type="text" name="celular" value={this.state.celular} onChange={this.handleChange.bind(this)} placeholder="Celular" />
                    </Form.Group>
                </Form.Row>
            </div>
        )
    }
}
export default Register