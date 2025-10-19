import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e8f5e9)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Text + Buttons */}
          <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
            <h1 className="fw-bold text-success mb-3">
              🛒 Smart Grocery Inventory Manager
            </h1>
            <p className="text-muted fs-5 mb-4">
              Simplify your grocery management. Track, monitor, and stay ahead of
              expiry dates effortlessly.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <Button
                variant="success"
                size="lg"
                className="shadow-sm px-4"
                onClick={() => navigate("/Dashboard")}
              >
                <i className="bi bi-bar-chart me-2"></i> Dashboard
              </Button>

              <Button
                variant="outline-success"
                size="lg"
                className="shadow-sm px-4"
                onClick={() => navigate("/inventory")}
              >
                <i className="bi bi-box2-fill me-2"></i> Inventory
              </Button>
            </div>
          </Col>

          {/* Right Section - Image */}
          <Col md={6} className="text-center">
            <img
              src="src/images/a3d3dd1aa71a40a3dc053093d340caac-removebg-preview.png"
              alt="Grocery Illustration"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
