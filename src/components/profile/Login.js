import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [username, setUserName] = useState(''); // Update variable name to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
      return false;
    }
    // Username validation (optional, can be adjusted based on your requirements)
    const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/; // Example regex for username
    if (!usernameRegex.test(username)) {
      setError('Username should be at least 3 characters and contain only letters, numbers, dots, dashes, or underscores.');
      return false;
    }
    // Password length check
    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return false;
    }
    setError(''); // Clear error message if validation passes
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate login success for becoming a host
      console.log('Login successful for Become a Host');
      navigate('/all-locations'); // Redirect to a different page for hosts
    }
  };

  return (
    <div className="user-login-container">
      <Link to="/">
        <img src="./assets/favcon.webp" alt="airbnb logo" className="host-login-logo" />
      </Link>

      <div className="user-login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text" // Change type to text
              value={username} // Update to use username state
              onChange={(e) => setUserName(e.target.value)}
              className="user-input-field" // Class for styling inputs
              required // Ensure field is required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="user-input-field" // Class for styling inputs
              required // Ensure field is required
            />
          </div>
          <h3>Forgot Password?</h3>
          {error && <p className="user-error-message">{error}</p>}
          <button type="submit" className="host-login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

