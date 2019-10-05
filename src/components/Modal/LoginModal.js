import React, {Component} from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import * as Config from '../../config/constants'
import axios from 'axios'
import { login } from '../../services/auth'


class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        };
      }
    
      postLogin(accomplishLogin){
        axios.post(Config.URL + "login", accomplishLogin)
            .then(resp => {
                if(resp.data.status === 200){
                    login(JSON.stringify(resp.data.Conta))
                    axios.defaults.headers.common['Authorization'] = resp.data.Conta.id
                    this.props.onHide()

                }else if(resp.data.status === 300){
                    alert(resp.data.message)
                }else if(resp.data.status === 500){
                    alert(resp.data.message)
                }else if(resp.data.status === 600){
                    alert(resp.data.message)
                }
            })
            .catch(erro => {
                console.log(erro)
            })
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
        const accomplishLogin = {
            email: this.state.email,
            senha: this.state.senha,
        }
        this.postLogin(accomplishLogin)
    }
    render(){
        
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
                        Faça seu login
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label >Email</Form.Label>
                            <Form.Control type="text" name="email" placeholder="Digite seu email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                        </Form.Group>
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" name="senha" value={this.state.senha} onChange={this.handleChange.bind(this)} placeholder="Senha" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={this.handleSubmit.bind(this)} variant="success">Entrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default LoginModal;