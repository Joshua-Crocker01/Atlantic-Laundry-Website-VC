import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/send-email', formData)
            .then(response => {
                alert('Email sent successfully');
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('Failed to send email');
            });
    };

    return (
        <Container className="d-flex justify-content-center my-4">
            <Form onSubmit={handleSubmit} style={{ maxWidth: '800px', width: '100%' }}>
                <Form.Group controlId="formFirstNameLastName">
                    <Form.Label>Name <span className="text-danger">(required)</span></Form.Label>
                    <Row>
                        <Col sm={6}>
                            <Form.Control 
                                type="text" 
                                name="firstName" 
                                placeholder="First Name" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                required 
                            />
                        </Col>
                        <Col sm={6}>
                            <Form.Control 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                required 
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <div className='spacer' />
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address <span className="text-danger">(required)</span></Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Enter email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <div className='spacer' />
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone <span className="text-danger">(required)</span></Form.Label>
                    <Form.Control 
                        type="text" 
                        name="phone" 
                        placeholder="Enter phone number" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <div className='spacer' />
                <Form.Group controlId="formBusinessName">
                    <Form.Label>Business Name <span className='text-muted'>(if applicable)</span></Form.Label>
                    <Form.Control 
                        type="text" 
                        name="businessName" 
                        placeholder="Enter business name" 
                        value={formData.businessName} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <div className='spacer' />
                <Form.Group controlId="formMessage">
                    <Form.Label>Message <span className="text-danger">(required)</span></Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="message" 
                        rows={5} 
                        placeholder="Enter your message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>

                <button>
                    Submit
                </button>
            </Form>
        </Container>
    );
};

export default ContactForm;
