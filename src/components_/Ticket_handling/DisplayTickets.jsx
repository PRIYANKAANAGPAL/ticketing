import React from "react";
import { useNavigate } from "react-router-dom";
import "./DisplayTickets.css";

const DisplayTickets = () => {
  const navigate = useNavigate();

  // Sample ticket data
  const tickets = [
    { id: "T-100", subject: "Issue - 1", date: "28.09.2022", assigned: "AID - 200", priority: "High", status: "Open", color: "red" },
    { id: "T-101", subject: "Issue - 2", date: "15.09.2022", assigned: "AID - 201", priority: "High", status: "Closed", color: "green" },
    { id: "T-102", subject: "Issue - 3", date: "09.09.2022", assigned: "AID - 200", priority: "High", status: "Open", color: "red" },
    { id: "T-103", subject: "Issue - 4", date: "05.09.2022", assigned: "AID - 201", priority: "High", status: "On Hold", color: "orange" },
  ];

  return (
    <div className="display-tickets">
      {/* Header */}
      <header className="header">
        <h1>DISPLAY <span className="highlight">TICKET</span></h1>
        <div className="user-info">
          <span>Welcome, User !</span>
          <div className="user-icon"></div>
        </div>
      </header>

      {/* Status Summary */}
      <div className="status-summary">
        <div className="status-item">
          <span>All Status</span>
          <h3 className="status-number">25</h3>
        </div>
        <div className="status-item">
          <span>Open</span>
          <h3 className="status-number open">18</h3>
        </div>
        <div className="status-item">
          <span>Closed</span>
          <h3 className="status-number closed">6</h3>
        </div>
        <div className="status-item">
          <span>On Hold</span>
          <h3 className="status-number on-hold">1</h3>
        </div>
      </div>

      {/* Ticket Table */}
      <div className="ticket-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Ticket Id</th>
              <th>Subject</th>
              <th>Created On ⬇</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td><span className="status-dot" style={{ backgroundColor: ticket.color }}></span></td>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.date}</td>
                <td>{ticket.assigned}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default DisplayTickets;
