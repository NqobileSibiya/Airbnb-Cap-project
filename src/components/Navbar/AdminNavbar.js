import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect to home on logout
  };

  return (
    <div className="Admin-Nav-bar">
      <div className="Top-row">
        <Link to="/" className="white__logo-container">
          <img
            src="/assets/airbnbwhite.png"
            alt="Airbnb Logo"
            className="white__logo"
          />
        </Link>
        <div className="Icon-container" onClick={handleLogout}>
          <MenuIcon color="black" fontSize="large" style={{ marginLeft: '10px' }} />
          <AccountCircleIcon color="black" fontSize="large" />
        </div>
      </div>
      <div className="button-container">
        <Link to="/Reservation">
          <button className="primary-button">View Reservations</button>
        </Link>
        <Link to="/Admin">
          <button className="primary-button">View Listings</button>
        </Link>
        <Link to="/CreateListings">
          <button className="primary-button">Create Listings</button>
        </Link>
      </div> 
    </div>
  );
};

export default AdminNavbar;
