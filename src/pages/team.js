import React from "react";
import ImageHeader from "../components/ImageHeader.js";
import { Container, Row, Col } from "react-bootstrap";
 
const Team = () => {
    return (
        <>
        <ImageHeader title="Our Team " />
        <Container style={{ paddingTop: '50px' }}>
                <Row className="d-flex justify-content-center">
                    <Col md={4} style={{ paddingRight: '40px', textAlign: 'left' }}>
                        <h3 className="text-header">President</h3>
                        <p className="text-content" style={{ paddingBottom: '20px' }}>Trevor Melendy</p>

                        <h3 className="text-header">Parts & Service Manager</h3>
                        <p className="text-content" style={{ paddingBottom: '20px' }}>Melanie Budden</p>

                        <h3 className="text-header">Vice President of Operations</h3>
                        <p className="text-content" style={{ paddingBottom: '20px' }}>Lauren Dalton</p>
                    </Col>

                    <Col md={4} style={{ paddingLeft: '40px', textAlign: 'left' }}>
                        <h3 className="text-header">Factory-Authorized Technicians</h3>
                        <p className="text-content" style={{ paddingBottom: '20px' }}>Serhii Khodakivski</p>
                        <p className="text-content" style={{ paddingBottom: '20px' }}>Dave Sellars</p>
                    </Col>
                </Row>
                <hr className="my-5" />
                <Row className="justify-content-center">
                    <Col md={8} style={{ textAlign: 'center', paddingBottom: '50px'}}>
                        <p className="text-content" style={{ paddingTop: '40px' }}>
                            With over 100 years of combined experience, the Atlantic Laundry team is here to help.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
 
export default Team;