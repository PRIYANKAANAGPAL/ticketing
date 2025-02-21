import React from 'react';
import "./Landingpage.css"
import { useNavigate } from 'react-router-dom'; // For navigation
import Footer from './Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  // Function to handle the "Sign In" button click
  const handleSignInClick = () => {
    navigate('/Sign Up'); // Redirect to the sign-in page
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <h1 className="website-name">ResolvNow</h1>
        <button className="sign-in-button" onClick={handleSignInClick}>
          Sign In
        </button>
        
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <h2>Welcome to ResolvNow</h2>
        <p>Your one-stop solution for all your needs.</p>
      </main>

      {/* Footer Section */}
      <Footer/>
      
    </div>
  );
};

export default LandingPage;