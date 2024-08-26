import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <hr className='my-4' />
                <Row className="justify-content-center text-center">
                    <Col md={4} className="mb-3">
                        <h4 className='text-header' style={{ color: "white" }}>Address</h4>
                        <p className="text-content" style={{ color: "white" }}>
                            56 Kenmount Rd<br />
                            Unit 3000<br />
                            St. John's, NL A1B 1W2<br />
                        </p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h4 className='text-header' style={{ color: "white" }}>Hours</h4>
                        <p className="text-content" style={{ color: "white" }}>
                            Monday to Friday, 8:30am - 4:30pm<br />
                            24-Hour Emergency Service: 709-754-0330
                        </p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h4 className='text-header' style={{ color: "white" }}>Phone</h4>
                        <p className="text-content" style={{ color: "white" }}>
                            <strong>Phone:</strong> 709-754-0330<br />
                            <strong>Fax:</strong> 709-754-0356<br />
                            <strong>Toll-Free:</strong> 1-855-602-7278<br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
