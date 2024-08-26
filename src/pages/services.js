import React from "react";
import ImageHeader from "../components/ImageHeader";
import { Container, Row, Col, Accordion} from "react-bootstrap";
import AMPLogo from "../assets/AMP+logo.jpg";
 
const Services = () => {
    return (
        <>
            <ImageHeader title="Services" />
            {/* TODO: Make each item a hidden drop down that can be selected to view the text */}
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col sm={10}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h1 className="text-header">Equipment Sales</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        As an exclusive distributor for <a href="http://www.continentalgirbau.com/">Continental Girbau</a> and <a href="http://www.lgcommerciallaundry.com/eng/main/main.do">LG</a> commercial laundry equipment, we can order washers, dryers, ironers, and other commercial laundry equipment directly from the manufacturer. Check out Our Products to find the type of unit that is right for your business, and be sure to contact us with any questions.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <hr className="my-5" />

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h1 className="text-header">Installations</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        Need an old piece of equipment removed from your space before the new unit can be installed? Don't have the ability to un-crate the new unit yourself? Don't worry - Atlantic Laundry has a team of technicians and installers that will help you get set up. We will remove the old piece of equipment, un-crate your new unit, and install it to the manufacturer's specifications.
                                    </p>
                                    <p className="text-left text-content">
                                        Depending on the equipment, once it has been installed it may require certain customization to suit your needs. That's another thing that Atlantic Laundry takes care of for you. We will complete the Start Up to ensure your settings and codes are programmed, allowing the machine to be ready to use when needed.
                                    </p>
                                    <p className="text-left text-content">
                                        So your equipment has been installed and is ready to use. But, how does it work? Our Atlantic Laundry team of technicians and installers have the expertise and training to demonstrate how to use the machine, care for it, and prevent issues down the road. We provide Staff Training to ensure you and your team know how to properly use and care for your new laundry equipment.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <hr className="my-5" />

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <h1 className="text-header">Warranty Work</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        We represent many different manufacturers directly and are authorized to provide warranty work. Our technicians are factory-authorized, which means that our team has been trained by the manufacturers and know exactly how each piece of equipment works. When you're purchasing a new piece of equipment, we know how important it is to know what your warranty includes. When you purchase a piece of equipment from Atlantic Laundry, we provide you with all of your warranty information so you're sure to be covered from the start.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <hr className="my-5" />
                        
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <h1 className="text-header">Preventative Maintenance</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        Preventive Maintenance is one of the most important things you can do for your piece of equipment, however many equipment owners either do not know about it, or do not have the time and resources to take action. Preventive Maintenance includes routine checks and cleaning to ensure your piece of equipment is running safely and efficiently. Some examples of PM include cleaning out the dryer lint after each use, checking cords to ensure there are no loose wires or connections, and preventing leaks by making sure the seal around your washer door is tight and the gasket is intact. There are some things that should be done daily and monthly for each unit, which you can read about in your Operations Manual. Other items should be checked by a factory-authorized technician. We can schedule routine PM calls to your location every 3-6 months to ensure your unit is safe, effective, and to prevent large issues in the future.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <hr className="my-5" />

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    <h1 className="text-header">Emergency Service</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        Whether your equipment is within its warranty period or not, when you need emergency service, you need it fast. With 24/7 service, our team is ready whenever you need us. We offer competitive rates and services, and can provide estimates when required. Contact our service department and we can get you back up and running in no time.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <hr className="my-5" />

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>
                                    <h1 className="text-header">OEM Replacement Parts</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        Atlantic Laundry only sells and uses Original Equipment Manufacturer (OEM) parts for all over-the-counter sales and service calls. This means that you can be sure that the correct parts are being used on your unit, and that they are straight from the manufacturer. This not only protects your equipment warranty, but prevents unnecessary breakdowns in the future from using Non-OEM parts. Since we get our parts direct from the manufacturer, you’re getting the best pricing possible, with no middle-man increasing the price. Let us know what parts you need, and we’ll source them for you.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        
                            <hr className="my-5" />

                            <Accordion.Item eventKey="7">
                                <Accordion.Header>
                                    <h1 className="text-header">Chemicals & Disposables</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        The <a href="http://www.theintegraprogram.com/">INTEGRA Program®</a> is one of three marketing arms of <a href="http://www.accomn.com/">Anderson Chemical Company</a> - a fourth generation, family-owned firm founded in 1911. INTEGRA markets its laundry, housekeeping, and kitchen chemical cleaning systems to the Institutional and Industrial markets. Atlantic Laundry is now exclusive distributors for INTEGRA Program® in Newfoundland and Labrador.
                                    </p>
                                    </Accordion.Body>
                            </Accordion.Item>

                            <hr className="my-5" />

                            <Accordion.Item eventKey="8">
                                <Accordion.Header>
                                    <h1 className="text-header">Asset Management Program</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        The Asset Management Program (AMP) is a unique, customizable program that tracks everything you need to know about your equipment. We label each piece of equipment at your location with a unique AMP ID#, which links to our online database. The AMP Database lists the make, model, and serial number for each asset, as well as other important information. Every service call for a particular asset is logged for you to review and notice trends. There are also reports so you can see how much you spent on each piece of equipment, and how much you have spent on repairs. This effective tool helps you to evaluate when it is the right time to replace your unit, rather than continue to repair it. You can check out reports to see how much you have spent annually or since inception, and all of your user manuals and important information can be downloaded. This online database will allow you to manage your assets with ease, and focus on growing your business, rather than worry about your equipment. For more information, check out our AMP Brochure. If you’re interested in becoming an AMP Member, let us know!
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <img src={AMPLogo} alt="Asset Management Program" className="img-fluid" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <hr className="my-5" />

                            <Accordion.Item eventKey="9">
                                <Accordion.Header>
                                    <h1 className="text-header">Customer Care Program</h1>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-left text-content">
                                        Atlantic Laundry also offers a unique Customer Care Program that provides special assistance for the first six months after your equipment is installed. This optional program includes un-crating of the new unit, removal of the old unit, installation, startup, and training for individuals who will be operating the equipment. If you need multiple training sessions set up to ensure all of your staff know how to use the equipment, we can set that up. We can also schedule times to come down and check on your equipment and how it’s being used, to ensure your staff continue to use the appropriate measures. At any point in the six month period that you have questions, our Customer Care team is there to help. From making sure your warranty is properly set up, to helping with Preventive Maintenance, we’re here for you! Because of the value offered within this program, it will be offered based on geography and volume of the sale. Please contact us if you have any questions.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>    
                        </Accordion> 
                    </Col>
                </Row>
            </Container>
            <div className="spacer" />
        </>
    );
};
 
export default Services;