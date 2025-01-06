// src/components/Navbar/Navbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import Header from '../Layout/Header'; // Adjust the path according to your structure
import DynamicFilter from '../Layout/DynamicFilter';
import AdminNavbar from '../Navbar/AdminNavbar'; // Import AdminNavbar

const Navbar = () => {
  const location = useLocation();

  // Check if the current path is '/admin' or '/reservation'
  const isAdminPage = location.pathname === '/admin';
  const isReservationPage = location.pathname === '/reservation';

  return (
    <div className="Nav-bar">
      {isAdminPage || isReservationPage ? (
        <AdminNavbar />
      ) : (
        <>
          <Header />
          <DynamicFilter />
        </>
      )}
    </div>
  );
};

export default Navbar;


