// src/pages/Hero.jsx
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function Hero() {
  return (
    <section className="hero-section bg-primary text-white py-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Your Software License Marketplace</h1>
            <p>Get the best valuation for your software licenses.</p>
            <Button variant="light" size="lg" href="#contact">
              Get a Quote
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
