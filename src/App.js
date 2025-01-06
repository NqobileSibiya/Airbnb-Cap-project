import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home'; // Import the Home component
import Admin from './components/Admin';
import AllLocations from './components/AllLocations';
import CityListings from './city/CityListings';
import LocationsDetails from './city/LocationsDetails';
import Reservation from './components/profile/Reservation'; 
import BecomeHost from './components/BecomeHost';
import Login from './components/profile/Login';
import Navbar from './components/Navbar/Navbar';
import AdminNavbar from './components/Navbar/AdminNavbar';
import ReservationList from './components/profile/ReservationList';
import CreateListings from './components/listings/CreateListings'; 



function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-locations" element={<AllLocations />} /> {/* Updated to a new path */}
        <Route path="/becomehost" element={<BecomeHost />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-navbar" element={<AdminNavbar />} />
        <Route path="/citylistings/:city" element={<CityListings />} />
        <Route path="/location/:id" element={<LocationsDetails />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/createlistings" element={<CreateListings/>} />
        <Route path="/reservationlist" element={<ReservationList/>} />
        <Route path="/login" element={<Login />} /> {/* Changed "Login" to "login" for consistency */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;