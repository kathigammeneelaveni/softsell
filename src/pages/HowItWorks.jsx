// src/pages/HowItWorks.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function HowItWorks() {
  return (
    <section className="how-it-works py-5">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <Row>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Step 1: Upload License</Card.Title>
                <Card.Text>Upload your software licenses to our platform.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Step 2: Get Valuation</Card.Title>
                <Card.Text>Receive an instant valuation for your licenses.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Step 3: Get Paid</Card.Title>
                <Card.Text>Get paid for your licenses quickly and securely.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorks;
