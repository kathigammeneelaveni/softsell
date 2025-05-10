// src/pages/WhyChooseUs.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function WhyChooseUs() {
  return (
    <section className="why-choose-us py-5">
      <Container>
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Fast Process</Card.Title>
                <Card.Text>We guarantee quick processing and payment.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Safe & Secure</Card.Title>
                <Card.Text>Your data is handled with the highest security.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Best Valuation</Card.Title>
                <Card.Text>We offer competitive prices for your licenses.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
