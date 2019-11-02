import React from 'react'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel} from '@fortawesome/free-solid-svg-icons'
const CardDeReserva = () => {
    return (
                <Card border="primary" style={{marginBottom: '0.5rem'}}>
                    <Card.Header><FontAwesomeIcon icon={faHotel}/> Nome do Hotel</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Alguma coisa relacionada ao hotel
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
    )
}

export default CardDeReserva