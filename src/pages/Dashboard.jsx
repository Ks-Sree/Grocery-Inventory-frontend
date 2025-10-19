import React, { useEffect, useState } from "react";
import { getItems } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, low: 0, expiring: 0, expired: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await getItems();
      const today = new Date();
      const expiringSoon = data.filter(i => (new Date(i.expiry) - today) / (1000*60*60*24) <= 7 && new Date(i.expiry) > today);
      const expired = data.filter(i => new Date(i.expiry) < today);
      const low = data.filter(i => i.quantity <= 2);
      setStats({ total: data.length, low: low.length, expiring: expiringSoon.length, expired: expired.length });
    };
    load();
  }, []);

  const cards = [
    { label: "Total Items", value: stats.total, icon: "bi-box-seam", color: "success" },
    { label: "Low Stock", value: stats.low, icon: "bi-exclamation-triangle", color: "warning" },
    { label: "Expiring Soon", value: stats.expiring, icon: "bi-hourglass-split", color: "info" },
    { label: "Expired", value: stats.expired, icon: "bi-x-circle", color: "danger" },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-success mb-4 text-center">
        <i className="bi bi-graph-up-arrow me-2"></i> Dashboard Overview
      </h2>

      {/* Stat Cards */}
      <div className="row g-4 mb-5">
        {cards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className={`card border-${card.color} border-3 shadow-sm text-center`}>
              <div className="card-body">
                <i className={`bi ${card.icon} fs-2 text-${card.color} mb-2`}></i>
                <h5 className="card-title">{card.label}</h5>
                <p className={`display-6 fw-bold text-${card.color}`}>{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Go to Inventory Button */}
      <div className="text-center mb-4">
        <Button
          variant="success"
          size="lg"
          className="px-5 shadow-sm"
          onClick={() => navigate("/inventory")}
        >
          <i className="bi bi-box2-fill me-2"></i> Go to Inventory
        </Button>
      </div>

      {/* Monthly Summary Section */}
      <div className="card mt-3 shadow border-0">
        <div className="card-body">
          <h4 className="fw-semibold text-secondary mb-2">
            <i className="bi bi-bar-chart-line me-2"></i> Monthly Summary
          </h4>
          <p className="text-muted">
            View your grocery trends and avoid wastage by checking items close to expiry.
            You can later visualize this data in charts and reports for deeper insights.
          </p>
        </div>
      </div>
    </div>
  );
}
