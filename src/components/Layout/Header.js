import React, { useState } from 'react';
import './Header.css'; 
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import 'react-datepicker/dist/react-datepicker.css';
import DynamicFilter from './DynamicFilter';
import Login from '../profile/SignIn'; // Adjust the path as needed
import { Link, useNavigate} from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal

  const handleMenuClick = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleDropdownOptionClick = (value) => {
    setDropdownOpen(false); // Close dropdown
    if (value === 'reservation') {
      // Navigate to reservation page
      window.location.href = '/reservations'; 
    } else if (value === 'login') {
      setIsLoginOpen(true); // Open login modal
    }
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false); // Close login modal
  };

  return (
    <>
      <header className="header">
        <div className="header__left">
          <Link to="/">
            <img
              src="/assets/airbnb..png"
              alt="Airbnb Logo"
              className="header__logo"
            />
          </Link>
        </div>

        <div className="header_static">
          <span>Places to Stay</span>
          <span>Experience</span>
          <span>Online Experience</span>
        </div>

        <div className="header__right">
          {user ? (
            <div className="header__user">
              <span>Hello, {user.username}!</span>
              <div className="header__dropdown">
                <button className="dropdown__button">Account</button>
                <div className="dropdown__content">
                  <Link to="/reservations">My Reservations</Link>
                  <button onClick={() => setUser(null)}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="header__nav">
              <Link to="/BecomeHost">
                <span>Become a Host</span>
              </Link>
              <PublicIcon />

              <div className="header_nav_container">
                <MenuIcon onClick={handleMenuClick} />
                {dropdownOpen && (
                  <div className="header__dropdown-menu">
                    <div onClick={() => handleDropdownOptionClick('login')}>SignIn</div>
                    <div onClick={() => handleDropdownOptionClick('reservation')}>Reservation</div>
                  </div>
                )}
                <Link to="Login">
                <AccountCircleIcon onClick={() => setIsLoginOpen(true)} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* <div className="header-dynamic">
        <DynamicFilter />
      </div> */}
      {isLoginOpen && <Login onClose={handleCloseLogin} />}

    </>
  );
};

export default Header;