import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    return (
        <div>
            <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i2.wp.com/tutorialsplanet.net/wp-content/uploads/2020/04/787844.jpg?fit=750%2C422&ssl=1"
                            alt="The Complete Digital Marketing Course - 12 Courses in 1"
                        />
                        <Carousel.Caption>
                            <h3 className="text-dark">The Complete Digital Marketing Course - 12 Courses in 1</h3>
                            <p className="text-dark">Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i0.wp.com/tutorialsplanet.net/wp-content/uploads/2020/05/54577421527445.jpg?fit=2048%2C1152&ssl=1"
                            alt="Digital Marketing Masterclass - 23 Courses in 1"
                        />

                        <Carousel.Caption>
                            <h3>Digital Marketing Masterclass - 23 Courses in 1</h3>
                            <p>Grow Your Business with Digital Marketing: Social Media Marketing, Facebook, Content, YouTube, Email Marketing, Websites</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://myfreeonlinecourses.com/wp-content/uploads/2021/08/1931752_1012_12-1.jpg"
                            alt="Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates</h3>
                            <p className="text-dark">Digital Marketing Strategy, Social Media Marketing, WordPress, SEO, Digital Sale, Email, Instagram, Facebook, ads ..</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default HomeCarousel;