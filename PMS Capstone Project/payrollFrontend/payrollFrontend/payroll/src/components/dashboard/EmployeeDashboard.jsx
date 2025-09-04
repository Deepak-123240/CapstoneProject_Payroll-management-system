import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table, Card } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";
import DashboardCard from "./DashboardCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [payrollHistory, setPayrollHistory] = useState([]);

  // Fetch payroll history from backend
  useEffect(() => {
    const fetchPayroll = async () => {
      try {
        // Replace "1" with logged-in employee ID (from auth context/session)
        const res = await axios.get("http://localhost:8080/api/payroll/employee/1");
        setPayrollHistory(res.data);
      } catch (err) {
        console.error("Error fetching payroll history:", err);
      }
    };

    fetchPayroll();
  }, []);

// Handle Apply Leave button
const handleApplyLeave = () => {
  navigate("/leaves/new");   // redirect to LeaveForm
};


  // Handle Download Payslip button
  const handleDownloadPayslip = () => {
    const link = document.createElement("a");
    link.href = "/sample-payslip.pdf"; // Replace with backend API
    link.download = "Payslip.pdf";
    link.click();
  };

  return (
    <Container
      fluid
      className="p-4"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Dashboard Title */}
      <h2 className="mb-4 text-center fw-bold">Employee Dashboard</h2>

      {/* Metrics Section */}
      <Row className="g-4 mb-5">
        <Col md={3}>
          <DashboardCard icon={<FaCalendarAlt />} title="Leave Balance" value={20} />
        </Col>
        <Col md={3}>
          <DashboardCard icon={<FaHourglassHalf />} title="Pending Leaves" value={0} />
        </Col>
        <Col md={3}>
          <DashboardCard
            icon={<FaMoneyBillWave />}
            title="Recent Payrolls"
            value={payrollHistory.length}
          />
        </Col>
        <Col md={3}>
          <DashboardCard icon={<FaCheckCircle />} title="Leaves Taken" value={0} />
        </Col>
      </Row>

      {/* Payroll History Section */}
      <Card className="shadow-sm" style={{ borderRadius: "16px" }}>
        <Card.Header className="bg-success text-white fw-bold">
          Payroll History
        </Card.Header>
        <Card.Body>
          {payrollHistory.length === 0 ? (
            <p className="text-center text-muted">No payrolls processed yet.</p>
          ) : (
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payrollHistory.map((payroll, index) => (
                  <tr key={index}>
                    <td>{payroll.month}</td>
                    <td>₹{payroll.amount}</td>
                    <td>
                      <span
                        className={`badge ${
                          payroll.status === "Paid"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {payroll.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Actions */}
      <div className="text-center mt-4">
        <Button variant="primary" className="me-2" onClick={handleApplyLeave}>
          Apply Leave
        </Button>
        <Button
          variant="success"
          onClick={handleDownloadPayslip}
          disabled={payrollHistory.length === 0}
        >
          Download Payslip
        </Button>
      </div>
    </Container>
  );
};

export default EmployeeDashboard;
