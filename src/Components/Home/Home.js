import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'
import HomeCourses from './HomeCourses';
import HomeCarousel from './HomeCarousel';
import { useState } from 'react';
import { useEffect } from 'react';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="home">
            <Container>
                <HomeCarousel></HomeCarousel>
                <br />
                <h2 className="text-start">Digital Marketing Courses</h2>
                <h4 className="text-start">Most popular courses to get you started</h4>
                <Row>
                    {
                        courses.slice(14).map(course => <HomeCourses
                            key={course.id}
                            course={course}
                        ></HomeCourses>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;