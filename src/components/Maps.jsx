import React from 'react';
import { Container, Row, Col, Carousel} from 'react-bootstrap';
import weatherMap from '../images/excel-422.jpg'
import illustratorMap from '../images/merrell-final-map_orig.jpg'

const Maps = () => {
    return ( 
        <Container className='project-container'>
            <Row className='asymmetric-maps'>
                <Col>
                    <h1 style={{color: 'white'}}>Geographic Information Systems</h1>
                    <Carousel>
                        <Carousel.Item className="carousel-item">
                            <img
                            className="d-block w-100"
                            alt="weather map"
                            src={weatherMap}
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                            className="d-block w-100"
                            src={illustratorMap}
                            alt="illustrator map"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Maps;