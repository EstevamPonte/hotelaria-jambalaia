import React, { useState, useEffect, Component } from 'react';
import { Modal, Row, Col, Badge, Button, ProgressBar, Card, Accordion } from 'react-bootstrap'
import './ModalInfoCard.css'
import { getToken } from '../../services/auth'
import axios from 'axios'
import * as Config from '../../config/constants'
import Carrossel from '../Form/DestinyForm/CarrosselAnimado'

class HotelInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: [],
            hotelDetails: []
        }
    }
    componentDidMount() {
        this.gethotelDetails()
    }


    gethotelDetails = () => {
        const placeid = { place_id: this.props.placeid }
        axios.post(Config.URL + 'details_place', placeid)
            .then(resp => {
                console.log("blablabla", resp.data.details.result)
                this.setState({
                    hotelDetails: resp.data.details.result,
                })
                // this.linkHotel(resp.data.details.result.photos)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    linkHotel = (photos) => {
        if (photos !== undefined) {
            const linkPhoto = []
            photos.map((photos) => {
                const photoreference = { photoreference: photos.photo_reference }
                axios.post(Config.URL + 'hotel_photo', photoreference)
                    .then(resp => {
                        // console.log("blvalvalvala" ,resp.data)
                        console.log(resp.data.return_url)
                        let joined = this.state.photo.concat(resp.data.return_url)
                        this.setState({
                            photo: joined
                        })
                    })
                    .catch(erro => {
                        console.log(erro)
                    })
            })

        }
    }

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
        const userReserve = {
            account_id: userInfo[0].id,
            establishment_name: this.props.name,
            childrens: this.props.crianca,
            adults: this.props.adulto,
            babies: this.props.bebe,
            checkin: this.props.datein,
            checkout: this.props.dateout
        }
        this.postUserReserve(userReserve)
    }

    reviews = () => {
        const { hotelDetails } = this.state
        console.log(hotelDetails.reviews)
        if (hotelDetails.reviews !== undefined) {
            return hotelDetails.reviews.map(review =>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={review.time}>
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
        const rating = this.state.hotelDetails.rating * 20
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
                        {this.props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* {console.log(photo)}     */}
                    {/* <Carrossel photo={}/> */}
                    <Row>
                        <Col>
                            <ProgressBar now={rating} label={`Nota geral deste hotel ${rating}`} />
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