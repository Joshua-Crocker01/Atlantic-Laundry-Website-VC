import React from "react";
import ImageHeader from "../components/ImageHeader";
import { Col, Row, Container } from "react-bootstrap";
import CGLogo from "../assets/CG+Logos.png";
import LGLogo from "../assets/LG+LOGO.png";
import dryerDrum from "../assets/dryerdrum.jpg";
import serviceTech from "../assets/servicetech.jpg";
import chain from "../assets/chain.jpg";
 
const Home = () => {
    return (
        <>
            <ImageHeader title="Atlantic Laundry" subtitle="For All Your Commercial Laundry Needs" />

            <Container className="mt-5">
            {/* About Section */}
            <Row className="justify-content-center">
                <Col lg={8} md={10} sm={12}>
                    <h1 className="text-header">About Us</h1>
                    <div className="spacer" />
                    <p className="text-left text-content">
                        Atlantic Laundry Equipment, facilitates the sales, parts, service, installations, 
                        and warranty of commercial laundry equipment in Atlantic Canada. 
                        Atlantic Laundry is the exclusive distributor of
                        <a href="http://www.continentalgirbau.com/"> Continental Girbau</a> and 
                        <a href="http://www.lgcommerciallaundry.com/eng/main/main.do">LG</a> commercial laundry equipment. 
                    </p>
                    <p className="text-left text-content">
                        Harold Snow Service Group, established in 1943, is Atlantic Canada’s 
                        largest commercial food and laundry equipment sales, parts, and service provider. 
                        In 2014, Harold Snow created the separate brand Atlantic Laundry Equipment to focus 
                        on the commercial laundry industry. Atlantic Laundry is the top choice for sales, 
                        parts, and service of your commercial laundry equipment. 
                    </p>
                    <p className="text-left text-content">
                        Check out our <a href="/services">Services</a> and <a href="/products/washers">Products</a>, and let us know what we can do for you!
                    </p>
                </Col>
            </Row>

            <div className="spacer" />

            {/* Two Images Below About Text */}
            <Row className="justify-content-center mt-4">
                <Col md={4} sm={6}>
                    <img 
                        src={CGLogo}
                        alt="Continental Girbau Logo" 
                        className="img-fluid"
                    />
                </Col>
                <Col md={4} sm={6}>
                    <img 
                        src={LGLogo}
                        alt="LG Logo" 
                        className="img-fluid"
                    />
                </Col>
            </Row>

            <hr className="my-5" />

            {/* Three Column Section */}
            <Row className="mt-5 justify-content-center">
                <Col md={3} className="justify-content-center mx-2">
                    <img 
                        src={dryerDrum}
                        alt="Column 1" 
                        className="img-fluid"
                    />
                    <h3 className="mt-3 text-header">Equipment</h3>
                    <p className="text-left text-content">No matter if you have a small restaurant or a large hotel, we'll help you find the perfect piece of equipment to suit your needs.</p>
                </Col>
                <Col md={3} className="justify-content-center mx-2">
                    <img 
                        src={serviceTech}
                        alt="Column 2" 
                        className="img-fluid"
                    />
                    <h3 className="mt-3 text-header">Service</h3>
                    <p className="text-left text-content">We handle everything including removal of old units, un-crating and installation of new units, preventive maintenance, and emergency service.</p>
                </Col>
                <Col md={3} className="justify-content-center mx-2">
                    <img 
                        src={chain}
                        alt="Column 3" 
                        className="img-fluid"
                    />
                    <h3 className="mt-3 text-header">Parts</h3>
                    <p className="text-left text-content mt-2">Whether your unit is under warranty or not, we have an inventory of Original Equipment Manufacturer parts, ensuring you always have the correct replacement.</p>
                </Col>
            </Row>
        </Container>
            
        </>
    );
};
 
export default Home;