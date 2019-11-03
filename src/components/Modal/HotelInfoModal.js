import React, {useState ,useEffect} from 'react';
import { Modal, Row, Col, Badge, Button, Image } from 'react-bootstrap'
import './ModalInfoCard.css'
import { getToken } from '../../services/auth'
import axios from 'axios'
import * as Config from '../../config/constants'

const HotelInfoModal = (props) => {
    const [photo, setPhoto] = useState("")

    useEffect(() => {
        if(props.photo !== undefined){
            const photoreference = {photoreference: props.photo[0].photo_reference}
            axios.post(Config.URL + 'hotel_photo', photoreference)
                .then(resp => {
                    setPhoto(resp.data.return_url);
                    
                })
                .catch(erro => {
                    console.log(erro)
                })
        }
    }, [])
    
    const postUserReserve = (reserve) =>{
        axios.post(Config.URL + "reserve", reserve)
            .then(resp => {
                alert(resp.data.message)
                props.onHide()
            })
            .catch(erro => {
                console.log(erro)
            })
        }
    
    
    const handleSubmit = () => {
        const userInfo = JSON.parse(getToken())
        const userReserve = {
            account_id: userInfo[0].id,
            establishment_name: props.name,
            childrens: props.crianca,
            adults: props.adulto,
            babies: props.bebe,
            checkin: props.datein,
            checkout: props.dateout
        }
        postUserReserve(userReserve)
    }
    
        
    return (
        <Modal
            {...props}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={photo} fluid />
                <div className='modalBlock'>

                    <Row className="justify-content-md-center">
                        <Col xs lg="auto"  >
                            <h5>
                                CheckIn <Badge variant="info">{props.datein}</Badge>
                            </h5>
                        </Col>
                        <Col sm='auto'>
                            <h5>
                                CheckOut <Badge variant="info">{props.dateout}</Badge>
                            </h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sm='3'>
                            <h5>
                                Adultos <Badge variant="info">{props.adulto}</Badge>
                            </h5>
                        </Col>
                        <Col sm='3'>
                            <h5>
                                Criança <Badge variant="info">{props.crianca}</Badge>
                            </h5>
                        </Col>
                        <Col sm='auto'>
                            <h5>
                                Bebes <Badge variant="info">{props.bebe}</Badge>
                            </h5>
                        </Col>
                    </Row>
                </div>
                <div className="infoBlock">
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod q   
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </div>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 4, offset: "auto" }}>
                        <Button onClick={handleSubmit} type='submit' variant="primary" block>Fazer reserva</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default HotelInfoModal;   