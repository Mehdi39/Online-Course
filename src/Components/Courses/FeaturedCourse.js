import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './Courses.css'

const FeaturedCourse = (props) => {

    const {name} = props.course;
    return (
        <Col className="m-2" lg={2}>
            <Button className="btn12" variant="outline-secondary">{name}</Button>
        </Col>
    );
};

export default FeaturedCourse;