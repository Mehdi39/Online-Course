import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeCourses from '../Home/HomeCourses';
import FeaturedCourse from './FeaturedCourse';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    const featureCourse = [
        {"id": 1,
        "name": "Digital Marketing"},
        {"id": 2,
        "name": "Marketing Strategy"},
        {"id": 3,
        "name": "Google Analytics"},
        {"id": 4,
        "name": "Copywriting"},
        {"id": 5,
        "name": "Advertising Strategy"},
        {"id": 6,
        "name": "Social Media Marketing"},
        {"id": 7,
        "name": "Internet Marketing"},
        {"id": 8,
        "name": "Email Marketing"},
        {"id": 9,
        "name": "YouTube Marketing"},
        {"id": 10,
        "name": "Podcasting"},

    ]
    return (
        <div className="home">
            <Container>
                <h2 className="text-start my-3">Popular Topics</h2>
                <Row className="d-flex justify-content-center">
                    {featureCourse.map(course => <FeaturedCourse
                        Key={course.id}
                        course={course} 
                    ></FeaturedCourse>)}
                </Row>
                <Row>
                    {
                        courses.map(course => <HomeCourses
                            key={course.id}
                            course={course}
                        ></HomeCourses>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;