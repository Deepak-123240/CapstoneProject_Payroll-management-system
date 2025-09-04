import React from "react";
import { Card } from "react-bootstrap";

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <Card className="shadow-sm text-center" style={{ borderRadius: "15px" }}>
      <Card.Body>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div
            style={{
              fontSize: "2rem",
              color: color || "#0d6efd",
              marginRight: "10px",
            }}
          >
            {icon}
          </div>
          <h5 className="mb-0">{title}</h5>
        </div>
        <h3 className="fw-bold">{value}</h3>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
