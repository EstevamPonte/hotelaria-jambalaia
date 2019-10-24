import React, { useState } from 'react'
import { Card, Button, Container, ButtonToolbar } from 'react-bootstrap'
import ModalInfoCard from "./ModalInfoCard"

const CardHoteis = () => {
    const [ModalInfoCardShow, setModalInfoCardShow] = useState(false);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../Utils/Images/HomeBackground.png')} />
            <Card.Body>
                <Card.Title>Nome do Hotel</Card.Title>
                <Card.Text>
                    Breve info sobre o Hotel
                    </Card.Text>

                <ButtonToolbar>
                    <Button variant="primary" onClick={() => setModalInfoCardShow(true)}>
                        Info geral do hotel
                        </Button>

                    <ModalInfoCard
                        show={ModalInfoCardShow}
                        onHide={() => setModalInfoCardShow(false)}
                    />
                </ButtonToolbar>
            </Card.Body>
        </Card>
    )
}

export default CardHoteis