import React, {Component } from 'react';
import { Modal, Row, Col, Badge, Button, ProgressBar, Card, Accordion } from 'react-bootstrap'
import './ModalInfoCard.css'
import { getToken, isAuthenticated } from '../../services/auth'
import axios from 'axios'
import * as Config from '../../config/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Carrossel from '../Form/DestinyForm/CarrosselAnimado'

class HotelInfoModal extends Component {
    

    postUserReserve = (reserve) => {
        axios.post(Config.URL + "reserve", reserve)
            .then(resp => {
                alert(resp.data.message)
                this.props.onHide()
            })
            .catch(erro => {
                console.log(erro)
            })
    }


    handleSubmit = () => {
        const userInfo = JSON.parse(getToken())
        if(isAuthenticated()){
            const userReserve = {
                account_id: userInfo[0].id,
                establishment_name: this.props.name,
                childrens: this.props.crianca,
                adults: this.props.adulto,
                babies: this.props.bebe,
                checkin: this.props.datein,
                checkout: this.props.dateout,
                hotel_name: this.props.address,
                hotel_phone: this.props.phone
            }
            this.postUserReserve(userReserve)
        }else{
            alert("Voce precisa está logado para reservar")
        }
        
    }

    reviews = () => {
        if (this.props.review !== undefined) {
            return this.props.review.map(review =>
                <Card key={review.time}>
                    <Accordion.Toggle as={Card.Header} eventKey={review.time}>
                        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faUser}/>
                        {review.author_name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={review.time}>
                        <Card.Body>
                            <ProgressBar now={review.rating * 20} label={`Nota ${review.rating}`} />
                            {review.text}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>  
            )
        }
    }
    render() {
        const rating = this.props.rating * 20
        const reviews = this.reviews()
        return (
            <Modal
                {...this.props}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <Row>
                            <Col>
                                {this.props.name}
                            </Col>
                            <Col sm='auto'>
                                <b>
                                    {`R$${this.props.price}`}
                                </b>
                            </Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carrossel/>
                    <Row className="justify-content-md-center">
                        <Col sm='auto'>
                            <h3>Nota deste hotel</h3>
                        </Col>
                    </Row>  
                    <Row>
                        <Col>
                            <ProgressBar  style={{marginTop:"10px", marginBottom:"10px"}} now={rating} label={`${this.props.rating}`} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sm='auto'>
                            <h3>Status da reserva</h3>
                        </Col>
                    </Row>
                    <div className='modalBlock'>
                        <Row className="justify-content-md-center">
                            <Col xs lg="auto"  >
                                <h5>
                                    CheckIn <Badge variant="info">{this.props.datein}</Badge>
                                </h5>
                            </Col>
                            <Col sm='auto'>
                                <h5>
                                    CheckOut <Badge variant="info">{this.props.dateout}</Badge>
                                </h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm='3'>
                                <h5>
                                    Adultos <Badge variant="info">{this.props.adulto}</Badge>
                                </h5>
                            </Col>
                            <Col sm='3'>
                                <h5>
                                    Criança <Badge variant="info">{this.props.crianca}</Badge>
                                </h5>
                            </Col>
                            <Col sm='auto'>
                                <h5>
                                    Bebes <Badge variant="info">{this.props.bebe}</Badge>
                                </h5>
                            </Col>
                        </Row>
                    </div>
                    <div className="infoBlock">
                        <Row className="justify-content-md-center">
                            <Col sm='auto'>
                                <h3>Comentarios de clientes</h3>
                            </Col>
                        </Row>
                        <Accordion defaultActiveKey="0">
                            {reviews} 
                        </Accordion>
                    </div>
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 4, offset: "auto" }}>
                            <Button onClick={this.handleSubmit} type='submit' variant="primary" block>Fazer reserva</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }

}

export default HotelInfoModal;   