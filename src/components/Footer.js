import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <Row>
          <Col sm={6}>
            FOOTER LEFT
          </Col>
          <Col sm={6}>
            FOOTER RIGHT
          </Col>
        </Row>
      </div>
    </div>
  )
};



export default Footer;
