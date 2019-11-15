import React, { Component } from 'react';
import { Modal, Button, Form, Col, Alert } from 'react-bootstrap'
import axios from 'axios'
import * as Config from '../../config/constants'
import { login } from '../../services/auth'

class CadastroModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            nome: '',
            senha: '',
            confirmarSenha: '',
            celular: '',
            cidade: ''
        }
    }

    
    postSignUp(newUser){
            axios.post(Config.URL + "sign_up", newUser)
                .then( resp => {
                    if (resp.data.status === 800){
                        alert(`${resp.data.message}`)
                    } else if(resp.data.status === 200){
                        alert(`${resp.data.message}`)
                        login(JSON.stringify(resp.data.conta))
                        this.props.onHide()
                    } else if(resp.data.status === 300) {
                        alert(`${resp.data.message}`)
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

    validate = () => {
        const lista = []
        const {senha, confirmarSenha, email} = this.state
        if(senha !== confirmarSenha){
            lista.push(
                <Alert key={1} variant={"warning"}>
                    Senha incompativel
                </Alert>
            )
        }
        if(email !== null){

            if(email === '' || email.includes("@") === false){
                
                lista.push(
                    <Alert key={2} variant={"warning"}>
                        Digite um email valido
                    </Alert>
                )
            }
        }
        return lista
    
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { confirmarSenha, senha, email} = this.state

        
        if(senha === confirmarSenha && senha !== '' && email !== null && email.includes("@") ){
            const newUser = {
                nome: this.state.nome,
                email: this.state.email,
                telefone: this.state.celular,
                cidade: this.state.cidade,
                senha: this.state.senha,
            }
            this.postSignUp(newUser)
        }
    }
    render(){
        const validate = this.validate()
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
                        Faça seu cadastro
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Corpo do Modal */}
                    <Form onSubmit={this.handleSubmit}>
                        {validate}

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email === null ? '' : this.state.email} onChange={this.handleChange} placeholder="Digite o email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFullName">
                                <Form.Label>Nome completo</Form.Label>
                                <Form.Control type="text" name="nome" value={this.state.nome} onChange={this.handleChange} placeholder="Digite seu nome completo" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control type="text" name="cidade" value={this.state.cidade} onChange={this.handleChange} placeholder="Digite a cidade onde você mora" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" name="senha" value={this.state.senha} onChange={this.handleChange} placeholder="Senha" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridConfirmPassword">
                                <Form.Label>Confirmar senha</Form.Label>
                                <Form.Control type="password" name="confirmarSenha" value={this.state.confirmarSenha} onChange={this.handleChange} placeholder="Confirmar senha" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label>Numero de celular</Form.Label>
                                <Form.Control type="text" name="celular" value={this.state.celular} onChange={this.handleChange} placeholder="Celular" />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Fechar</Button>
                    <Button type="submit" variant="success" onClick={this.handleSubmit.bind(this)}>Cadastrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CadastroModal;