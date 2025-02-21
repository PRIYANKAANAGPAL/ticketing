import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to validate input fields
  const validateInputs = () => {
    if (action === "Sign Up" && !username.trim()) {
      setError("Username is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!password.trim()) {
      setError("Password is required");
      return false;
    }
    setError(""); // Clear any existing errors
    return true;
  };

  // Function to handle Sign Up or Login button click
  const handleAuth = () => {
    if (validateInputs()) {
      navigate('/Display'); // Redirect only if validation passes
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
          )}

          <div className="input">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="input">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>

        {error && <div className="error">{error}</div>} {/* Display error if any */}

        {action === "Sign Up" ? null : (
          <div className="forgot-password">
            Forgot password? <span>Click here</span>
          </div>
        )}

        <div className="submit-container">
          <div 
            className={action === "Login" ? "submit gray" : "submit"} 
            onClick={() => { setAction('Sign Up'); handleAuth(); }}>
            Sign Up
          </div>
          <div 
            className={action === "Sign Up" ? "submit gray" : "submit"} 
            onClick={() => { setAction('Login'); handleAuth(); }}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
