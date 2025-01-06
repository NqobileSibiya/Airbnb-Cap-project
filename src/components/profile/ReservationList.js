import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Make sure this line is included
import 'react-datepicker/dist/react-datepicker.css'; 
import Reservation from "./ReservationList";
import './ReservationList.css'; // Make sure to create this CSS file

const ReservationList = ({ price, ratings }) => {
    const navigate = useNavigate();
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showCheckIn, setShowCheckIn] = useState(false);
    const [showCheckOut, setShowCheckOut] = useState(false);
    const [guests, setGuests] = useState(1);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedRatings, setSelectedRatings] = useState('');
  
    // Constants
    const nightlyRate = 8500;
    const cleaningFee = 500;
    const serviceFee = 700;
    const taxRate = 0.1; // 10%
  
    // Functions to handle calendar visibility and guest selection
    const handleCheckInClick = () => setShowCheckIn((prev) => !prev);
    const handleCheckOutClick = () => setShowCheckOut((prev) => !prev);
    const handleGuestChange = (event) => setGuests(event.target.value);
  
    // Function to calculate the number of nights
    const calculateNights = () => {
      if (checkInDate && checkOutDate) {
        const timeDiff = Math.abs(checkOutDate - checkInDate);
        const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return nights;
      }
      return 0;
    };
  
    // Function to calculate the subtotal
    const calculateSubtotal = () => {
      const nights = calculateNights();
      return nights * nightlyRate;
    };
  
    // Function to apply weekly discount
    const calculateWeeklyDiscount = () => {
      const nights = calculateNights();
      return nights >= 7 ? calculateSubtotal() * 0.1 : 0; // 10% discount for a week or more
    };
  
    // Function to calculate taxes
    const calculateTaxes = () => {
      return (calculateSubtotal() - calculateWeeklyDiscount() + cleaningFee + serviceFee) * taxRate;
    };
  
    // Function to calculate the total
    const calculateTotal = () => {
      const subtotal = calculateSubtotal();
      const discount = calculateWeeklyDiscount();
      const taxes = calculateTaxes();
      return subtotal - discount + cleaningFee + serviceFee + taxes;
    };


    const locationsData = [
        {
          id: 1,
          price: "R8500/Night",
          ratings: "5 (205 Reviews)",
        },
        {
          id: 2,
          price: "R10 000/Night",
          ratings: "3 (505 Reviews)",
        },
        {
          id: 3,
          price: "R15 000/Night",
          ratings: "4 (1505 Reviews)",
        },
        {
          id: 4,
          price: "R7000/Night",
          ratings: "5 (2050 Reviews)",
        },
        {
          id: 5,
          price: "R7000/Night",
          ratings: "4 (2705 Reviews)",
        },
      ];

      const handleCityClick = (price, ratings) => {
        setSelectedPrice(price);
        setSelectedRatings(ratings);
    }
  
    return (
        <div className="reservation-container">
            <div className="city-list">
                {locationsData.map((location) => (
                    <div 
                        key={location.id} 
                        className="city-item" 
                        onClick={() => handleCityClick(location.price, location.ratings)}
                    >
                        <h3>{location.city}</h3>
                        <img src={location.src} alt={location.city} className="city-image"/>
                    </div>
                ))}
            </div>

        <div className="reservation-box">
          <div className="price-ratings">
          <span className="price">Price: {selectedPrice}</span>
          <span className="ratings">Ratings: {selectedRatings}</span>
          </div>
  
          <div className="calendar-box">
                    <div className="check-in" onClick={() => setShowCheckIn(!showCheckIn)}>
                        Check-in: {checkInDate ? checkInDate.toLocaleDateString() : "Select date"}
                        {showCheckIn && (
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => {
                                    setCheckInDate(date);
                                    setShowCheckIn(false);
                                }}
                                inline
                            />
                        )}
                    </div>

                    <div className="check-out" onClick={() => setShowCheckOut(!showCheckOut)}>
                        Check-out: {checkOutDate ? checkOutDate.toLocaleDateString() : "Select date"}
                        {showCheckOut && (
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => {
                                    setCheckOutDate(date);
                                    setShowCheckOut(false);
                                }}
                                inline
                            />
                        )}
                    </div>
  
                    <div className="guest-selector">
                        <label htmlFor="guest-dropdown">Guests:</label>
                        <select id="guest-dropdown" value={guests} onChange={(e) => setGuests(e.target.value)}>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <Link to="/Reservation">
                <button className="reservation-button">Reservation</button>
                </Link>
  
          <div className="total-row">
            <div>Subtotal: R{calculateSubtotal()}</div>
            <div>Weekly Discount: -R{calculateWeeklyDiscount()}</div>
            <div>Cleaning Fee: R{cleaningFee}</div>
            <div>Service Fee: R{serviceFee}</div>
            <div><strong>Occupancy Taxes and Fees: R{calculateTaxes()}</strong></div>
            <div>Total: R{calculateTotal()}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReservationList;