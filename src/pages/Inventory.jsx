import React, { useEffect, useState } from "react";
import { getItems, addItem, updateItem, deleteItem } from "../api/api";
import ItemCard from "../components/ItemCard";
import AddEditModal from "../components/AddEditModal";
import { Button, Spinner } from "react-bootstrap";

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // 🔁 Fetch items from backend
  const loadItems = async () => {
    try {
      setLoading(true);
      const data = await getItems();
      setItems(data);
      console.log("Fetched groceries:", data); // ✅ Logs in console
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  // ⏱️ Load data on mount
  useEffect(() => {
    loadItems();
  }, []);

  // ➕ Add or Edit Item
  const handleSave = async (item) => {
    if (item.id) {
      console.log("Updating item:", item);
      await updateItem(item.id, item);
    } else {
      console.log("Adding new item:", item);
      await addItem(item);
    }
    setShow(false);
    await loadItems(); // 🔁 Refresh after save
  };

  // ❌ Delete Item
  const handleDelete = async (id) => {
    console.log("Deleting item with ID:", id);
    await deleteItem(id);
    await loadItems(); // 🔁 Refresh after delete
  };

  // 🧭 JSX Layout
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-success">
          <i className="bi bi-cart-check me-2"></i> Inventory
        </h2>
        <Button
          variant="success"
          onClick={() => {
            setEditItem(null);
            setShow(true);
          }}
        >
          <i className="bi bi-plus-lg me-1"></i> Add Item
        </Button>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="success" />
          <p className="mt-2 text-muted">Loading groceries...</p>
        </div>
      ) : items.length === 0 ? (
        <p className="text-muted text-center mt-5">
          No items found. Add your first grocery!
        </p>
      ) : (
        <div className="row g-4">
          {items.map((item) => (
            <div className="col-md-4" key={item.id}>
              <ItemCard
                item={item}
                onEdit={setEditItem}
                setShow={setShow}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}

      <AddEditModal
        show={show}
        onHide={() => setShow(false)}
        onSave={handleSave}
        item={editItem}
      />
    </div>
  );
}
