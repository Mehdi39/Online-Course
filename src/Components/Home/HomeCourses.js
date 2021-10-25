import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const HomeCourses = (props) => {

    const { courseTitle, img, authorName, rating, price, lastUpdate } = props.course

    return (
        <Col lg={4} className="mt-3">
                <Card>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>{courseTitle}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Author: {authorName}</ListGroupItem>
                        <ListGroupItem>Rating: {rating}</ListGroupItem>
                        <ListGroupItem>${price}</ListGroupItem>
                        <ListGroupItem>LastUpdate: {lastUpdate}</ListGroupItem>
                    </ListGroup>

                </Card>
        </Col>
    );
};

export default HomeCourses;