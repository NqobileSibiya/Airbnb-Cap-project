import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './LocationsDetail.css';
import ReservationList from '../components/profile/ReservationList'; // Adjust the path as needed
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import YardIcon from '@mui/icons-material/Yard';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PetsIcon from '@mui/icons-material/Pets';
import VideocamIcon from '@mui/icons-material/Videocam';
import WifiIcon from '@mui/icons-material/Wifi';
import HvacIcon from '@mui/icons-material/Hvac';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import MicOffIcon from '@mui/icons-material/MicOff';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PolicyIcon from '@mui/icons-material/Policy';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const LocationDetails = () => {
  const location = useLocation();
  const { id, price, property, ratings } = location.state || {};

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // Function to handle date change
  const handleDateChange = (ranges) => {
    setDateRange(ranges.selection);
  };

  // Function to clear dates
  const clearDates = () => {
    setDateRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  };

  const locationsData = [
    {
      id: 1,
      src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684763757047711680/original/5d64a8c3-edd1-46f8-9388-8807c2461db2.jpeg?im_w=720",
      property: "Entire house",
      city: "Durban",
      guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
      info: "WiFi - Kitchen - Parking",
      price: "R8500/Night",
      ratings: "5 (205 Reviews)",
    },
    {
      id: 2,
      src: "https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720",
      property: "Entire house",
      city: "Pretoria",
      guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
      info: "WiFi - Kitchen - Parking",
      price: "R10 000/Night",
      ratings: "3 (505 Reviews)",
    },
    {
      id: 3,
      src: "https://a0.muscache.com/im/pictures/monet/Luxury-604952207599367088/original/1d888aca-1de3-48b8-9255-0e30fe8161ff?im_w=720",
      property: "Entire house",
      city: "Johannesburg",
      guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
      info: "WiFi - Kitchen - Parking",
      price: "R15 000/Night",
      ratings: "4 (1505 Reviews)",
    },
    {
      id: 4,
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-989217269238046084/original/07594ca0-1259-400b-80e7-347a65d5dc71.jpeg?im_w=720",
      property: "Entire house",
      city: "Port Elizabeth",
      guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
      info: "WiFi - Kitchen - Parking",
      price: "R7000/Night",
      ratings: "5 (2050 Reviews)",
    },
    {
      id: 5,
      src: "https://a0.muscache.com/im/pictures/monet/Luxury-705175824082881663/original/656ba3ca-5bd5-459f-9fa6-b38155035f8d?im_w=720",
      property: "Entire Apartment",
      city: "Cape Town",
      guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
      info: "WiFi - Kitchen - Parking",
      price: "R7000/Night",
      ratings: "4 (2705 Reviews)",
    },
  ];

  const currentLocation = locationsData.find((loc) => loc.id === id);


  return (
    <div className="share-header">
      <span className="share-header-icon" style={{ display: "flex", alignItems: "center" }}>
        <ShareIcon />
        <p style={{ margin: "0 5px" }}>Share</p>
        <FavoriteBorderIcon />
      </span>

      <div className="location-details">
        <div className="header-container">
          <div className="Header_location">
            <h1>{property}</h1>
            <p>{ratings}</p>

            <div className="location-gallery">
              <img
                className="full-image"
                src={currentLocation ? currentLocation.src : ""}
                alt="Full Width Image"
              />
              <div className="row-gallery">
                <img
                  src={currentLocation ? currentLocation.src : ""}
                  alt="Location 1"
                />
                <img
                  src={currentLocation ? currentLocation.src : ""}
                  alt="Location 2"
                />
                <img
                  src={currentLocation ? currentLocation.src : ""}
                  alt="Location 3"
                />
                <img
                  src={currentLocation ? currentLocation.src : ""}
                  alt="Location 4"
                />
              </div>
              <div className="reservation">
                <ReservationList price={price} ratings={ratings} />
              </div>
            </div>
          </div>
        </div>
      </div>



                  <div className="profile_image">
                      <HomeIcon />
                      <span>Entire Apartment</span>
                      <h3>You will have the Apartment to yourself</h3>
                      <AutoAwesomeIcon />
                      <span>Enhanced Cleaning</span>
                      <h3>This host committed to the 5-Step enhanced cleaning process</h3>
                      <CheckBoxOutlineBlankIcon />
                      <span>Self Check-in</span>
                      <h3>Check yourself in with a keypad</h3>
                      <CancelPresentationIcon />
                      <span>Free cancellation before 12 October 2024</span>
                  </div>

          <div className="dynamic_description">
              <p>
                  Beautiful Breeze Cottage sits among the stunning hills of the Dargle Valley. 
                  It overlooks 3 tranquil dams, rolling pastures, and an indigenous forest. 
                  There are cattle and horses in the fields, abundant bird life to enjoy and 
                  peacefulness to breathe in. It's the perfect place to recharge while escaping 
                  the pressures of city life. With the Midlands Meander on our doorstep, you can 
                  be as busy or as quiet as you choose. The farm is now fully off Eskom power, 
                  so load shedding is a distant memory.
              </p>
          </div>

          <div className="room_images">
              <h1>Where you'll sleep</h1>
              <div className="image">
                  <img 
                      src="https://a0.muscache.com/im/pictures/e67c88a9-6b70-424c-980a-c82c78d322c1.jpg?im_w=1200" 
                      alt="Spacious bedroom with comfortable bed" 
                  />
                  <p>Spacious bedroom with comfortable bed. Total bedrooms: 2</p>
              </div>
          </div>

        <div className="offers">
          <h1>What this place offers</h1>
          <div className="offers-grid">
            <div>
              <YardIcon />
              <span>Garden View</span>
            </div>
            <div>
              <LocalLaundryServiceIcon />
              <span>Free washer in the building</span>
            </div>
            <div>
              <AcUnitIcon />
              <span>Refrigerator</span>
            </div>
            <div>
              <PetsIcon />
              <span>Pets allowed</span>
            </div>
            <div>
              <VideocamIcon />
              <span>Service camera</span>
            </div>
            <div>
              <WifiIcon />
              <span>Wifi</span>
            </div>
            <div>
              <HvacIcon />
              <span>Air conditioning</span>
            </div>
            <div>
              <KitchenIcon />
              <span>Kitchen</span>
            </div>
            <div>
              <LocalLaundryServiceIcon />
              <span>Dryer</span>
            </div>
            <div>
              <PedalBikeIcon />
              <span>Bicycle</span>
            </div>
          </div>
          <button>View all 37 amenities</button>
        </div>

        <div className="location-date-picker">
          <h1>7 Nights in Durban</h1>
          {/* dynamic heading */}
          <span>{format(dateRange.startDate, 'MM/dd/yyyy')}</span> - <span>{format(dateRange.endDate, 'MM/dd/yyyy')}</span>
        </div>

        <div className="date-picker-section">
          <div className="check-in-container">
            <h3>Check-In</h3>
            <div className="calendar-container">
              <div className="date-picker">
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  ranges={[dateRange]}
                  showDateDisplay={false}
                />
              </div>
            </div>
          </div>

          <div className="check-out-container">
            <h3>Check-Out</h3>
            <div className="calendar-container">
              <div className="date-picker">
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  ranges={[dateRange]}
                  showDateDisplay={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Clear Date Button */}
        <div className="clear-date-section">
  <CalendarMonthIcon />
  <span className="clear-date-link" onClick={clearDates} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
    Clear Dates
  </span>
</div>

<div className="review-section">
  <h3>⭐5.0 - 7 Views</h3>
  <div className="review-grid">
    <p>Cleanliness: <span style={{ width: '40%', display: 'inline-block', background: 'black', height: '5px', marginLeft: '80px', marginTop: '5px'}}></span> 4</p>
    <p>Communication: <span style={{ width: '50%', display: 'inline-block', background: 'black', height: '5px', marginLeft: '80px', marginTop: '5px' }}></span> 5</p>
    <p>Check-In: <span style={{ width: '50%', display: 'inline-block', background: 'black', height: '5px', marginLeft: '80px', marginTop: '5px' }}></span> 5</p>
    <p>Accuracy: <span style={{ width: '40%', display: 'inline-block',background: 'black', height: '5px', marginLeft: '80px', marginTop: '5px' }}></span> 4</p>
    <p>Location: <span style={{ width: '40%', display: 'inline-block', background: 'black', height: '5px', marginLeft: '80px', marginTop: '5px' }}></span> 5</p>
    <p>Value: <span style={{ width: '50%', display: 'inline-block', background: 'black', height: '5px', marginLeft: '80px', marginTop: '5px' }}></span> 5</p>
  </div>
</div>

<div className="review-profile">
  
  <div className="profile-column">
    <div className="profile-item">
      <AccountCircleIcon className="icon" />
      <div className="profile-info">
        <span>Nqobile Sibiya</span>
        <p>8 July 1994</p>
      </div>
  </div>

    <div className="profile-item">
      <AccountCircleIcon className="icon" />
      <div className="profile-info">
        <span>Snethemba Zuma</span>
        <p>16 July 1994</p>
      </div>
    </div>

    <div className="profile-item">
      <AccountCircleIcon className="icon" />
      <div className="profile-info">
        <span>Nokuthula Ndwandwe</span>
        <p>14 March 1970</p>
      </div>
    </div>
  </div>

  <div className="profile-column">
    <div className="profile-item">
      <AccountCircleIcon className="icon" />
      <div className="profile-info">
        <span>Lindiwe Sibiya</span>
        <p>4 June 1950</p>
      </div>
    </div>

    <div className="profile-item">
      <AccountCircleIcon className="icon" />
      <div className="profile-info">
        <span>Deliswe Ndwandwe</span>
        <p>1 October 1980</p>
      </div>
    </div>

    <div className="profile-item">
      <AccountCircleIcon className="icon" />
      <div className="profile-info">
        <span>Lunga Zulu</span>
        <p>10 July 1994</p>
      </div>
    </div>
  </div>
</div>

<div className="profile-button">
    <button>Show All 12 reviews</button>
</div>
<div className="host-section">
  <AccountCircleIcon className="icon" />
  <div className="host-info">
    <h1>Hosted By Nqobile</h1>
    <p>Joined 1 March 2024</p>
  </div>
</div>

<div className="host-info">
  <StarIcon />
  <span>Reviews</span>
  <CheckCircleOutlineIcon />
  <span>indentity verified</span>
  <MilitaryTechIcon />
  <span>Super Host</span>
</div>

<div className="host-super-host-heading">
  <h1>Nqobile is a super Host</h1>
  <div className="host-super-host-text">
  <p>Superhost are experience , highly rated hosts who are committed to providing great stays for guests </p>
  <p>Response rate: 100%</p>
  <p>Response time within an hour</p>
</div>
<button>Contact Host</button>
  <div className="payment-warning">
    <PrivacyTipIcon />
    <p>To Protect your payment, never transfer money or communicate outside the Airbnb App</p>
  </div>
  </div>

  <div className="rules-section">

<div className="house-rules">
  <h2>House Rules</h2>
  <ul>
    <div className="rule-item">
      <AccessTimeIcon />
      <li>Check-in after 3:00 PM</li>
    </div>
    <div className="rule-item">
      <AccessTimeIcon />
      <li>Checkout before 11:00 AM</li>
    </div>
    <div className="rule-item">
      <SmokeFreeIcon />
      <li>No smoking</li>
    </div>
    <div className="rule-item">
      <PetsIcon />
      <li>No pets</li>
    </div>
    <div className="rule-item">
      <MicOffIcon />
      <li>No parties or events</li>
    </div>
  </ul>
</div>

<div className="health-safety">
  <h2>Health & Safety</h2>
  <ul>
    <div className="rule-item">
      <LocalFireDepartmentIcon />
      <li>Smoke alarm</li>
    </div>
    <div className="rule-item">
      <PropaneTankIcon />
      <li>Carbon monoxide alarm</li>
    </div>
    <div className="rule-item">
      <VideocamIcon />
      <li>Security camera on the property</li>
    </div>
    <div className="rule-item">
      <PolicyIcon />
      <li>COVID-19 safety practices are in place</li>
    </div>
    <div className="rule-item">
      <MedicalServicesIcon />
      <li>First aid kit available</li>
    </div>
  </ul>
</div>

<div className="cancellation-policy">
  <h2>Cancellation Policy</h2>
  <p>Free cancellation for 48 hours. After that, cancel before 3:00 PM on [date] for a partial refund.</p>
</div>
</div>
</div>
  );
};

export default LocationDetails;

