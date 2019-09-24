import React, { Component} from 'react';
import { Form} from 'react-bootstrap'

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
      }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <Form.Group controlId="formGridEmail">
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Digite seu email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" name="senha" value={this.state.senha} onChange={this.handleChange.bind(this)} placeholder="Senha" />
                </Form.Group>
            </div>
            
        )
    }
}
export default Login