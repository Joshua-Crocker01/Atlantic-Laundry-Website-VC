import React from 'react';
import Water from "../assets/Water2.jpeg";  // Ensure the path is correct
import { Container } from 'react-bootstrap';

const ImageHeader = ({ title, subtitle }) => {
    return (
        <div className="header-container" style={{backgroundImage: `url(${Water})`,
            backgroundColor: 'rgba(100, 149, 237, 0.6)',
            backgroundBlendMode: 'multiply'}}>       
            <Container className="text-center d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
                <h1 className="header-title no-select">{title}</h1>
                {subtitle && <h2 className="header-subtitle">{subtitle}</h2>}
            </Container>
        </div>

    );
}

export default ImageHeader;
