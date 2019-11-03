import React, { useState } from 'react'
import { Card, Button, ButtonToolbar} from 'react-bootstrap'
import HotelInfoModal from "../Modal/HotelInfoModal"

const CardHoteis = (props) => {
    const [ModalInfoCardShow, setModalInfoCardShow] = useState(false);
    return (
            <Card >
                <Card.Img variant="top" src={require('../../Utils/Images/HomeBackground.png')} />
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
                            photo={props.photo}
                            // photoreference={props.photoreference}
                        />
                    </ButtonToolbar>
                </Card.Body>
            </Card>
    )
}

export default CardHoteis