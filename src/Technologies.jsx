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
                <Row className='technologies'>
                    <Col>
                    <h1>Tech I Use</h1>
                    <div style={{paddingTop: '3vh'}}>
                        <i class="devicon-ruby-plain-wordmark hvr-grow"></i>
                        <i class="devicon-rails-plain-wordmark hvr-grow"></i>
                        <i class="devicon-javascript-plain hvr-grow" ></i>
                        <i class="devicon-postgresql-plain hvr-grow"></i>
                        <i class="devicon-react-original-wordmark hvr-grow"></i>
                        <i class="devicon-nodejs-plain-wordmark hvr-grow"></i>
                    </div>
                    <Button style={{marginTop: '5vh'}}>Resume</Button>
                    </Col>
                </Row>
            </Container>
         );
    }
}   
 
export default Technologies;