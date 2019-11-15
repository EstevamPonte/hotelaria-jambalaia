import React, { useState, useEffect } from 'react'
import { Card, Button, ButtonToolbar, Row, Col} from 'react-bootstrap'
import HotelInfoModal from "../Modal/HotelInfoModal"
import axios from 'axios'
import * as Config from '../../config/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faMapMarkedAlt, faPhone} from '@fortawesome/free-solid-svg-icons'


const CardHoteis = (props) => {
    const [ModalInfoCardShow, setModalInfoCardShow] = useState(false);
    const [hotelDetails, setHotelDetails] = useState([])
    const [price, setPrice] = useState([])

    useEffect(() => {
        const gethotelDetails = () => {
            const placeid = { place_id: props.placeid }
            axios.post(Config.URL + 'details_place', placeid)
                .then(resp => {
                    setPrice(resp.data.price)
                    setHotelDetails(resp.data.details.result)
                })
                .catch(erro => {
                    console.log(erro)
                })
        }
      gethotelDetails()
    }, [props])
    
    

    
    return (
            <Card border="primary">
                <Card.Header>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faHotel} /> {props.name} 
                        </Col>
                        <Col sm='auto'>
                            <b>

                                {`R$${parseFloat(price).toFixed(2)}`}
                            </b>
                        </Col>
                    </Row>
                </Card.Header>
                {/* <Card.Img variant="top" src={photo} /> */}
                <Card.Body>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={faMapMarkedAlt} style={{marginRight: "10px"}}/>
                                {hotelDetails.formatted_address}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={faPhone} style={{marginRight: "10px"}}/>
                                {hotelDetails.formatted_phone_number}
                            </Col>
                        </Row>

                    <ButtonToolbar>
                        <Button variant="primary" onClick={() => setModalInfoCardShow(true)}>
                            Info geral do hotel
                        </Button>

                        <HotelInfoModal
                            show={ModalInfoCardShow}
                            onHide={() => setModalInfoCardShow(false)}
                            name={props.name} adulto={props.adulto} crianca={props.crianca}
                            bebe={props.bebe} datein={props.datein} dateout={props.dateout}
                            placeid={props.placeid} rating={hotelDetails.rating} review={hotelDetails.reviews}
                            phone={hotelDetails.formatted_phone_number} address={hotelDetails.formatted_address}
                            price={parseFloat(price).toFixed(2)}
                        />
                    </ButtonToolbar>
                </Card.Body>
            </Card>
    )
}

export default CardHoteis