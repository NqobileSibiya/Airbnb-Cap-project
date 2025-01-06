import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./BecomeHost.css";
import './Admin.css';

const BecomeHost = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return false;
    }
    // Email validation (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return false;
    }
    // Password length check
    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate login success for becoming a host
      console.log('Login successful for Become a Host');
      navigate('/admin');// Redirect to a different page for hosts
    }
  };

  return (
    <div className="host-login-container">
      <Link to="/">
        <img src="./assets/favcon.webp" alt="airbnb logo" className="host-login-logo" />
      </Link>

      <div className="host-login">
        <h2> Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="host-input-field" // Class for styling inputs
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="host-input-field" // Class for styling inputs
            />
          </div>
          <h3>Forgot Password?</h3>
          {error && <p className="host-error-message">{error}</p>}
          <button type="submit" className="host-login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default BecomeHost;
