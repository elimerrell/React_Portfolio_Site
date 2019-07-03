import React, { Component } from 'react';
import { Container, Row, Col, Carousel} from 'react-bootstrap';
import weatherMap from './images/excel-422.jpg'
import whiteOak from './images/white-oak-distribution-2080_orig.jpg'
import illustratorMap from './images/merrell-final-map_orig.jpg'

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container className='project-container'>
                <Row className='asymmetric-maps'>
                    <Col>
                        <h1 style={{color: 'white'}}>Geographic Information Systems</h1>
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <img
                                className="d-block w-100"
                                src={weatherMap}
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                className="d-block w-100"
                                src={whiteOak}
                                />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                className="d-block w-100"
                                src={illustratorMap}
                                />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Maps;