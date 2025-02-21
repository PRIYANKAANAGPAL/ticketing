import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./Create.css";
import Footer from '../login/Footer';

const Create = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    contact: "user@example.com",
    department: "",
    description: "",
    file: null,
  });

  const categories = ["Technical Issue", "Billing", "Account", "Other"];
  const departments = ["Support", "HR", "IT", "Finance"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket Submitted:", formData);
    
    // Redirect to success page
    navigate("/ticket-submitted");
  };
  

  return (
    <div className="create-page">
      {/* Header Section */}
      <header className="header">
        <h1 className="website-name">ResolvNow</h1>
        <button className="sign-in-button" onClick={() => navigate('/')}>
          Home
        </button>
      </header>

      {/* Ticket Form Section */}
      <main className="form-container">       
        <form onSubmit={handleSubmit}>
        <h2>Raise a Ticket</h2>
          <label>Ticket Subject:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

          <div className="category-department">
            <div>
              <label>Category:</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Concerned Department:</label>
              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          <label>Contact Details:</label>
          <input type="text" name="contact" value={formData.contact} disabled />

          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>

          <label>Attach File:</label>
          <input type="file" onChange={handleFileChange} />

          <button type="submit">Submit Ticket</button>
        </form>
      </main>

     
    </div>
  );
};

export default Create;
