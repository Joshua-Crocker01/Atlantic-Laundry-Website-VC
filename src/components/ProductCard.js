import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductCard = ({ productName, productLoad, productDesc, imageLink, specSheet }) => {
  const pricingLink = "https://docs.google.com/spreadsheets/d/1Duz-rL7YMRPM5_UBPy4y2G8YduRxBsdUalcZBxoeHqM/edit?usp=sharing";
  
  const followLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-2 bg-white border rounded product-card">
            <Row>
              <Col md={3} className="mt-1">
                <Card.Img 
                  src={imageLink} 
                  className="img-fluid img-responsive rounded product-image" 
                  alt={productName}
                />
              </Col>
              <Col md={9} className="mt-1">
                <Card.Body>
                  <Card.Title>{productName}</Card.Title>
                  <div className='spacer' />
                  <Card.Subtitle className="mt-1 mb-1 text-muted">{productLoad}</Card.Subtitle>
                  <div className='spacer' />
                  <Card.Text className="text-justify mb-0">{productDesc}</Card.Text>
                  <div className='spacer' />
                  <Row className='justify-content-center mt-3'>
                    <Col xs={12} sm={6} className="d-flex justify-content-center">
                      <button onClick={() => followLink(specSheet)}>
                        Product Specs
                      </button>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center">
                      <button onClick={() => followLink(pricingLink)}>
                        View Price List
                      </button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
