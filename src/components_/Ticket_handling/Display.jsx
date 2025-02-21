import React from 'react';
import "./Display.css";
import Footer from '../login/Footer';
import { useNavigate } from 'react-router-dom';
import disp from "./disp.png";

function Display() {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <>
      <div className="dashboard">
        {/* Header */}
        <header className="dashboard-header">
          <h1>
            SUPPORT <span className="highlight">TICKET</span>
          </h1>
          <div className="user-info">
            <span>Welcome, User !</span>
            <div className="user-icon"></div>
          </div>
        </header>

        {/* Ticket Options */}
        <div className="ticket-container">
          {/* Create Ticket Card */}
          <div className="ticket-card">
            <h2>
              CREATE <span className="highlight">TICKET</span>
            </h2>
            <img src={disp} alt="Create Ticket" />
            <p>Raise your Questions as a ticket to any department.</p>
            <button className="ticket-button create-btn" onClick={() => navigate('/Create')}>
              Create
            </button>
          </div>

          {/* Display Ticket Card */}
          <div className="ticket-card">
            <h2>
              DISPLAY <span className="highlight">TICKET</span>
            </h2>
            <img src={disp} alt="Display Ticket" />
            <p>Follow up on your tickets and check the status.</p>
            <button className="ticket-button display-btn" onClick={() => navigate('/List')}>
              Display
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Display;
