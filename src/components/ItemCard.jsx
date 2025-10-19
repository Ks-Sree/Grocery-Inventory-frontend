import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ItemCard({ item, onEdit, onDelete, setShow }) {
  const isExpired = new Date(item.expiry) < new Date();
  const daysLeft = Math.ceil((new Date(item.expiry) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <Card.Title className="fw-bold text-success">{item.name}</Card.Title>
        <Card.Text>
          <strong>Category:</strong> {item.category}<br />
          <strong>Quantity:</strong> {item.quantity}<br />
          <strong>Expiry:</strong> {item.expiry}{" "}
          <span className={`text-${isExpired ? "danger" : "secondary"}`}>
            ({isExpired ? "Expired" : `${daysLeft} days left`})
          </span>
        </Card.Text>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" onClick={() => { onEdit(item); setShow(true); }}>Edit</Button>
          <Button variant="outline-danger" onClick={() => onDelete(item.id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
