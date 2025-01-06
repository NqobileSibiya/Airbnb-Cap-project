import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <div className="admin-page">
      {/* Button container at the top of the page */}
      

      <div className="admin-header">
        <div className="admin">
          <h1>My listings</h1>
        </div>

        <div className="box">
          <div className="listings-container">
            <div className="listing">
              <div className="listing-image">
                <img src="/assets/airbnb..png" alt="Airbnb Logo" />
                {/* pass image from router.js */}
              </div>

              <div className="listing-details">
                <div className="listings-title">
                  <p>Title</p>
                  {/* pass title from route */}
                </div>
                <div className="listings-location">
                  <p>Location</p>
                  {/* pass location here */}
                </div>
                <div className="listings-description">
                  <p>Description</p>
                  {/* pass description */}
                </div>
                <div className="listings-ratings">
                  <p>Ratings</p>
                  {/* pass ratings */}
                </div>
              </div>
            </div>
            {/* Move the button container below the image */}
            <div className="listings-button">
              <Link to="/CreateListings">
              <button className="dark-button">Update</button>
              </Link>
              <button className="light-button">Delete</button>
              {/* pass update and delete from route */}
            </div>
          </div>
        </div>
      </div>

      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Admin;
