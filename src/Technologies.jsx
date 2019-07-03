import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'

class Technologies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container className='project-container'>
                <Row className='asymmetric-projects'>
                    <Col>
                    <div style={{paddingTop: '3vh', color: 'white'}}>
                    <h1>Tech I Use</h1>
                        <i className="devicon-ruby-plain-wordmark hvr-grow"></i>
                        <i className="devicon-rails-plain-wordmark hvr-grow"></i>
                        <i className="devicon-javascript-plain hvr-grow" ></i>
                        <i className="devicon-postgresql-plain-wordmark hvr-grow"></i>
                        <i className="devicon-react-original-wordmark hvr-grow"></i>
                        <i className="devicon-nodejs-plain-wordmark hvr-grow"></i>
                    </div>
                    <Button onClick={this.props.handleShow} style={{marginTop: '5vh'}}>Resume</Button>
                    </Col>
                </Row>
            </Container>
         );
    }
}   
 
export default Technologies;