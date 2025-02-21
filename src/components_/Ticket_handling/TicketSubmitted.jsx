import React from "react";
import { useNavigate } from "react-router-dom";
import "./TicketSubmitted.css"; // Import CSS

const TicketSubmitted = () => {
  const navigate = useNavigate();

  return (
    <div className="ticket-submitted-container">
      <h2>🎉 Ticket Submitted Successfully!</h2>
      <p>Our team will review your request and get back to you shortly.</p>
      <div className="button-container">
        <button className="home-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <button className="status-button" onClick={() => navigate("/List")}>
          Check Status
        </button>
      </div>
    </div>
  );
};

export default TicketSubmitted;
