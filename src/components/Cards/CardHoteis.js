import React, { useState, useEffect } from 'react'
import { Card, Button, ButtonToolbar} from 'react-bootstrap'
import HotelInfoModal from "../Modal/HotelInfoModal"
import axios from 'axios'
import * as Config from '../../config/constants'
const CardHoteis = (props) => {
    const [ModalInfoCardShow, setModalInfoCardShow] = useState(false);
    // const [photo, setPhoto] = useState("")

    // useEffect(() => {
    //     if(props.photo !== undefined){
    //         console.log(props.photo)
    //         axios.post(Config.URL + 'hotel_photo', photoreference)
    //             .then(resp => {
    //                 setPhoto(resp.data.return_url);
                    
    //             })
    //             .catch(erro => {
    //                 console.log(erro)
    //             })
    //     }
    // }, [])

    return (
            <Card >
                {/* <Card.Img variant="top" src={photo} /> */}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {/* {console.log(props.photo)} */}
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
                            placeid={props.placeid}
                            // photoreference={props.photoreference}
                        />
                    </ButtonToolbar>
                </Card.Body>
            </Card>
    )
}

export default CardHoteis