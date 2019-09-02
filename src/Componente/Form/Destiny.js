import React from 'react';
import {Form, Row, Col} from 'react-bootstrap'

class Destiny extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Form.Group controlId="formLocal">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form.Control label='Local' size="sm" type="text" placeholder="Escolha seu destino"></Form.Control>
                </Col>
            </Row>
            </Form.Group>
         );
    }
}
 
export default Destiny;