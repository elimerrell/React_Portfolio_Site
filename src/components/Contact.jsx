import React, { Component } from 'react';
import { Container,Col, Row, Button } from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <h1>Elijah Merrell</h1>
                        <h2>Web Developer</h2>
                        <h4>Geospatial Enthusiast</h4>
                        {/* <Button className='about-button' variant="success" size="lg">About Me</Button> */}
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Contact;