import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap'
import Register from '../Form/CadastroELoginForm/Register'
import Login from '../Form/CadastroELoginForm/Login'


class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            change: true,
        }
    }
    changeTheType = () => {
        this.setState({
            change: !this.state.change
        })
    }
    render(){
        const changeType = this.state.change ? <Login/> : <Register/>
        const changeBetween = this.state.change ? "Cadastro" : "Login" 
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
                    {changeType}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.changeTheType}>{changeBetween}</Button>
                    <Button type="submit" variant="success">Entrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default LoginModal;