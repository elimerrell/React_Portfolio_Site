import React, { Component } from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container id="projects" className='project-container'>
                <Row className='asymmetric-projects'>
                    <Col>
                        <h1 style={{color: 'white'}}>Technical Projects</h1>
                        <CardDeck className="card-deck">
                            <Card className= 'hvr-grow'>

                                <Card.Body>
                                <Card.Title>WhaleTracker</Card.Title>
                                <Card.Text>
                                    A React Native mobile app that allows users to report whale sightings using real-time geolocation and AWS photo uploads. 
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <i className="devicon-react-original-wordmark colored"></i>
                                <i className="devicon-ruby-plain colored"></i>
                                <i class="devicon-amazonwebservices-original"></i>
                                </Card.Footer>
                            </Card>
                            <Card className= 'hvr-grow'>
                                <Card.Body>
                                <Card.Title>Gnarnia</Card.Title>
                                <Card.Text>
                                    A single page application that allows users to get real-time weather for ski resorts around the Western US.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <i className="devicon-ruby-plain colored"></i>
                                <i className="devicon-javascript-plain colored"></i>
                                <i className="devicon-heroku-line-wordmark colored"></i>
                                </Card.Footer>
                            </Card>
                            <Card className= 'hvr-grow'>
                                <Card.Body>
                                <Card.Title>Campy</Card.Title>
                                <Card.Text>
                                    Campy is an outdoor recreation community where users can search and review outdoor recreation parks and facilities as well as interacting with other members of the Campy community.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <i className="devicon-ruby-plain colored"></i>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Projects;