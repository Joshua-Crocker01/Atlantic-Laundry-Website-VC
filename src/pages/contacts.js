import React from "react";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { Col, Row, Container } from "react-bootstrap";
import ImageHeader from "../components/ImageHeader";
import Footer from "../components/Footer";

const Contacts = () => {
    return (
        <>
        <ImageHeader title="Contact" />
        <div style={{height: "30px"}} />
        <Container className="d-flex flex-column align-items-center" style={{ padding: '20px' }}>
            {/* Section with Contact Info and Map */}
            <Row className="w-100 mb-4 justify-content-center">
                <Col md={10} className="d-flex flex-column justify-content-center">
                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <h2 className="text-header">Head Office</h2>
                            <p className="text-content">
                                56 Kenmount Rd<br />
                                Unit 3000<br />
                                St. John's, NL A1B 1W2<br />
                            </p>
                            <p className="text-content">
                                <strong>Phone:</strong> 709-754-0330<br />
                                <strong>Fax:</strong> 709-754-0356<br />
                                <strong>Toll-Free:</strong> 1-855-602-7278<br />
                            </p>
                            <p className="text-content"><a href="tmelendy@haroldsnow.ca">tmelendy@haroldsnow.ca</a></p>
                            <p className="text-content">
                                Monday to Friday, 8:30am - 4:30pm<br />
                                24-Hour Emergency Service: 709-754-0330
                            </p>

                        </Col>
                        <Col md={6}>
                            <Map mapHeight="90%" mapWidth="100%" />
                        </Col>
                    </Row>
                </Col>
                <hr className="my-5" />
            </Row>
            
            {/* Section with Contact Form */}
            <Row className="w-100 justify-content-center">
                <Col md={10} className="d-flex flex-column align-items-center">
                    <h2 className="text-header w-100 mb-4">Contact Form</h2>
                    <div className="w-100">
                        <ContactForm />
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Contacts;
