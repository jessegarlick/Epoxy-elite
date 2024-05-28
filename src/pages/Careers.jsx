import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for making HTTP requests
import '../css/careers.css'; // Ensure the CSS file is imported

const JobRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/job-requests', formData); // Adjust the endpoint URL as needed
      setMessage('Job request submitted successfully!');
      setError(null);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
      });
    } catch (error) {
      setMessage(null);
      setError('Error submitting job request. Please try again.');
    }
  };

  return (
    <div className="get-quote-container">
      <h2>Job Request Form</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Job Request</button>
      </form>
    </div>
  );
};

export default JobRequestForm;
