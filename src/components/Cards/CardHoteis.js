import React, { useState, useEffect } from 'react'
import { Card, Button, ButtonToolbar} from 'react-bootstrap'
import HotelInfoModal from "../Modal/HotelInfoModal"
import axios from 'axios'
import * as Config from '../../config/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUser, faCity } from '@fortawesome/free-solid-svg-icons'
const CardHoteis = (props) => {
    const [ModalInfoCardShow, setModalInfoCardShow] = useState(false);
    const [hotelDetails, setHotelDetails] = useState([])

    useEffect(() => {
      gethotelDetails()
    }, [props.id])
    
    const gethotelDetails = () => {
        const placeid = { place_id: props.placeid }
        axios.post(Config.URL + 'details_place', placeid)
            .then(resp => {
                console.log("blablabla", resp.data.details.result)
                setHotelDetails(resp.data.details.result)
                
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    return (
            <Card border="primary">
                {/* <Card.Img variant="top" src={photo} /> */}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {/* {console.log(hotelDetails)} */}
                    </Card.Text>

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
                            // photoreference={props.photoreference}
                        />
                    </ButtonToolbar>
                </Card.Body>
            </Card>
    )
}

export default CardHoteis