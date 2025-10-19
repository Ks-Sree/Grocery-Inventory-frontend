import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddEditModal({ show, onHide, onSave, item }) {
  const [form, setForm] = useState({ name: "", category: "", quantity: "", expiry: "" });

  useEffect(() => {
    if (item) setForm(item);
    else setForm({ name: "", category: "", quantity: "", expiry: "" });
  }, [item]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    onSave(form);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{item ? "Edit Item" : "Add New Item"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control name="category" value={form.category} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" name="quantity" value={form.quantity} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date" name="expiry" value={form.expiry} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="success" onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
