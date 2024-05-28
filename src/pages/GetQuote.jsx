import React, { useState } from "react";
import axios from "axios";
import "../css/quote.css";


const GetQuote = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      streetAddress,
      city,
      state,
      zipCode,
    };
    try {
      const res = await axios.post("/api/quote", formData);
      console.log("Response received:", res);
      if (res.status === 200 && res.data.status === "success") {
        setSent(true);
        setError(""); // Clear any previous errors on successful send
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setStreetAddress("");
        setCity("");
        setState("");
        setZipCode("");
      } else {
        throw new Error(res.data.message || "Failed to submit quote.");
      }
    } catch (error) {
      console.error("Error submitting quote request:", error);
      let errorMessage = "Error submitting quote request. Please try again.";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage; // Use the server-provided message if available
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      }
      setError(errorMessage);
      setSent(false); // Ensure sent is reset on error
    }
  };

  return (
    <div className="get-quote-container">
      <h2>Request an Estimate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
            autoComplete="family-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
            autoComplete="tel"
          />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder="Street Address"
            required
            autoComplete="address-line1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            required
            autoComplete="address-level2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            required
            autoComplete="address-level1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
            required
            autoComplete="postal-code"
          />
        </div>
        <button type="submit" className="btn btn-primary">
        Get Pricing
        </button>
      </form>
      {sent ? (
        <p className="success-message">Quote request sent successfully!</p>
      ) : (
        <p className="error-message">{error}</p>
      )}
    </div>
  );
};

export default GetQuote;
