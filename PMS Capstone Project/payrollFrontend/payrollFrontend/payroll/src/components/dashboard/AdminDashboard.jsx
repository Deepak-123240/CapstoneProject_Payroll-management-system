import React from "react";
import "./AdminDashboard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <i className="bi bi-building"></i>
          <h2>Payroll System</h2>
          <p>Management Portal</p>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard"><i className="bi bi-speedometer2"></i> Dashboard</Link></li>
          <li><Link to="/employees"><i className="bi bi-people"></i> Employees</Link></li>
          <li><Link to="/departments"><i className="bi bi-diagram-3"></i> Departments</Link></li>
          <li><Link to="/jobroles"><i className="bi bi-briefcase"></i> Job Roles</Link></li>
          <li><Link to="/leaves"><i className="bi bi-calendar-event"></i> Leave Management</Link></li>
          <li><Link to="/leaves/approval"><i className="bi bi-check2-circle"></i> Leave Approval</Link></li>
          <li><Link to="/payroll"><i className="bi bi-cash-stack"></i> Payroll</Link></li>
        </ul>
        <div className="sidebar-footer">
          <i className="bi bi-person-circle"></i>
          <span>
            SekharDeepak <br />
            <small>ADMIN</small>
          </span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="dashboard-title">Dashboard Overview</h1>

        <div className="card-grid">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>
                <i className="bi bi-person-circle"></i> Admin Info
              </Card.Title>
              <Card.Text>Name: SekharDeepak</Card.Text>
              <Card.Text>Role: ADMIN</Card.Text>
              <Card.Text>Date: Tue Sep 02 2025</Card.Text>
            </Card.Body>
          </Card>

          <Card className="dashboard-card">
            <Card.Body as={Link} to="/employees" style={{ textDecoration: "none", color: "inherit" }}>
              <Card.Title>
                <i className="bi bi-people-fill"></i> Employees
              </Card.Title>
              <Card.Text>Manage employee details and roles</Card.Text>
            </Card.Body>
          </Card>

          <Card className="dashboard-card">
            <Card.Body as={Link} to="/payroll" style={{ textDecoration: "none", color: "inherit" }}>
              <Card.Title>
                <i className="bi bi-cash"></i> Payroll
              </Card.Title>
              <Card.Text>Salary processing & management</Card.Text>
            </Card.Body>
          </Card>

          <Card className="dashboard-card">
            <Card.Body as={Link} to="/leaves" style={{ textDecoration: "none", color: "inherit" }}>
              <Card.Title>
                <i className="bi bi-calendar-week"></i> Leaves
              </Card.Title>
              <Card.Text>Track leave requests & approvals</Card.Text>
            </Card.Body>
          </Card>

          <Card className="dashboard-card">
            <Card.Body as={Link} to="/departments" style={{ textDecoration: "none", color: "inherit" }}>
              <Card.Title>
                <i className="bi bi-diagram-3-fill"></i> Departments
              </Card.Title>
              <Card.Text>Organize teams and hierarchies</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
