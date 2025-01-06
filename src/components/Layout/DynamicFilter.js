import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchIcon from '@mui/icons-material/Search';
import "./DynamicFilter.css";
import { useNavigate } from 'react-router-dom';

const DynamicFilter = () => {
  const navigate = useNavigate();  // Initialize the navigate function
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  const toggleGuestDropdown = () => {
    setIsGuestDropdownOpen(!isGuestDropdownOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log({
      location,
      checkInDate,
      checkOutDate,
      guests: { adults, children },
    });
  };

  // Function to handle location selection
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);

    // Navigate to city listings based on selected location
    if (selectedLocation === 'See All Locations') {
      navigate('/all-locations');
    } else if (selectedLocation) {
      navigate(`/citylistings/${selectedLocation.toLowerCase()}`);
    }
  };

  const handleIncreaseAdults = () => setAdults(adults + 1);
  const handleDecreaseAdults = () => adults > 1 && setAdults(adults - 1);
  const handleIncreaseChildren = () => setChildren(children + 1);
  const handleDecreaseChildren = () => children > 0 && setChildren(children - 1);

  return (
    <div className="dynamic-filter">
      <form onSubmit={handleSearch} className="filter-form">
        {/* Location Selection */}
        <select
          id="location-select"
          value={location}
          onChange={handleLocationChange}
          required
        >
          <option value="" disabled>
            All Location
          </option>
          <option value="See All Locations">See All Locations</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Durban">Durban</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Port Elizabeth">Port Elizabeth</option>
        </select>

        {/* Check-in Date */}
        <div>
          <h2>Check-in</h2>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Select check-in date"
            required
          />
        </div>

        {/* Check-out Date */}
        <div>
          <h2>Check-out</h2>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Select check-out date"
            required
          />
        </div>

        {/* Guests Selection */}
        <div className="guest-selection">
          <button
            type="button"
            className="guest-dropdown-button"
            onClick={toggleGuestDropdown}
          >
            Guests
          </button>

          {isGuestDropdownOpen && (
            <div className="guest-dropdown">
              <div className="guest-type">
                <h3>Adults</h3>
                <button type="button" onClick={handleDecreaseAdults}>-</button>
                <span>{adults}</span>
                <button type="button" onClick={handleIncreaseAdults}>+</button>
              </div>

              <div className="guest-type">
                <h3>Children</h3>
                <button type="button" onClick={handleDecreaseChildren}>-</button>
                <span>{children}</span>
                <button type="button" onClick={handleIncreaseChildren}>+</button>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button type="submit" className="search-button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default DynamicFilter;
