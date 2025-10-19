import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <div className="bg-light py-5 min-vh-100">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="fw-bold text-success mb-3">About Us</h1>
            <p className="text-muted fs-5">
              Smart Grocery Inventory Manager is designed to make your daily grocery
              management simpler, smarter, and more efficient. Whether you’re managing a hostel,
              hotel, or home — our goal is to help you reduce waste and stay organized.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-success fw-semibold">
                  🧠 Our Mission
                </Card.Title>
                <Card.Text>
                  To empower households and institutions with smart tools that track
                  groceries, prevent expiry, and save time and money.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-success fw-semibold">
                  💡 What We Offer
                </Card.Title>
                <Card.Text>
                  - Real-time stock tracking  
                  - Expiry reminders  
                  - Monthly consumption insights  
                  - Simple, beautiful dashboard interface
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-success fw-semibold">
                  👨‍💻 Our Vision
                </Card.Title>
                <Card.Text>
                  To build an ecosystem where every household or organization
                  can manage food inventory seamlessly — saving resources and
                  helping the planet by reducing waste.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
