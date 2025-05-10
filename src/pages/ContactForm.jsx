// src/pages/ContactForm.jsx
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="contact-form py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="licenseType">
            <Form.Label>License Type</Form.Label>
            <Form.Control
              as="select"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              required
            >
              <option>Software License</option>
              <option>Subscription</option>
              <option>Others</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default ContactForm;
