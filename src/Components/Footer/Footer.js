import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const instagram = <FontAwesomeIcon icon={faInstagramSquare} />
    const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />

    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row xs={2} lg={4}>
                    <div>
                        <h3 className="text-secondary text-start">Explore</h3>
                        <div>
                            <p className="text-start">MasterClass Live</p>
                            <p className="text-start">Articles</p>
                            <p className="text-start">Sitemap</p>
                            <p className="text-start">Gifts</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-secondary text-start">About</h3>
                        <div>
                            <p className="text-start">Diversity, Equity, and Inclusion</p>
                            <p className="text-start">Careers</p>
                            <p className="text-start">Security</p>
                            <p className="text-start">Privacy</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-secondary text-start">Social</h3>
                        <div>
                            <p className="text-start">{facebook} Facebook</p>
                            <p className="text-start">{twitter} Twitter</p>
                            <p className="text-start">{instagram} Instagram</p>
                            <p className="text-start">{youtube} YouTube</p>
                            <p className="text-start">{linkedin} LinkedIn</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-secondary text-start">Download</h3>
                        <div className="text-start">
                            <img className="w-75" src="http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png" alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;