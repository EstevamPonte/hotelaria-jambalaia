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
    const [linkPhotos, setLinkPhotos] = useState([])
    useEffect(() => {
      gethotelDetails()
    }, [props.id])
    
    const gethotelDetails = () => {
        const placeid = { place_id: props.placeid }
        axios.post(Config.URL + 'details_place', placeid)
            .then(resp => {
                console.log("blablabla", resp.data)
                setHotelDetails(resp.data.details.result)
                setLinkPhotos(resp.data.lista_urls)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    return (
            <Card border="primary">
                <Card.Header><FontAwesomeIcon icon={faHotel} /> {props.name}</Card.Header>
                {/* <Card.Img variant="top" src={photo} /> */}
                <Card.Body>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                {hotelDetails.formatted_address}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={faPhone}/>
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
                            placeid={props.placeid} reviews={hotelDetails.reviews} rating={hotelDetails.rating}
                            linkphotos={linkPhotos}
                            // photoreference={props.photoreference}
                        />
                    </ButtonToolbar>
                </Card.Body>
            </Card>
    )
}

export default CardHoteis