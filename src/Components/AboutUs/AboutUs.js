import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const AboutUs = () => {
    return (
        <Container>
            <Row className="borderr my-5">
                <Col lg={6} className="d-flex flex-column justify-content-center">
                    <h2 className="text-start">We share  </h2>
                    <h2 className="text-start">knowledge</h2>
                    <h2 className="text-start">with the world</h2>
                </Col>
                <Col lg={6}>
                    <img src="https://about.udemy.com/wp-content/uploads/2021/07/about-us.png" alt="" />
                </Col>
            </Row>
            <h1>Changing learning for the better</h1>
            <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
        </Container>
    );
};

export default AboutUs;