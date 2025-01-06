import React from 'react';
import LocationCard from '../city/LocationCard'; // Import the new LocationCard component
import './AllLocations.css';

const locationsData = [
  {
    src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684763757047711680/original/5d64a8c3-edd1-46f8-9388-8807c2461db2.jpeg?im_w=720",
    property: "Entire house",
    city: "Durban",
    guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
    info: "wifi - Kitchen - parking",
    price: "R8500",
    ratings: "5(205 Reviews)",
  },
  {
    src: "https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720",
    property: "Entire house",
    city: "Pretoria",
    guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
    info: "wifi - Kitchen - parking",
    price: "R10 000",
    ratings: "3(505 Reviews)",
  },
  {
    src:'https://a0.muscache.com/im/pictures/monet/Luxury-604952207599367088/original/1d888aca-1de3-48b8-9255-0e30fe8161ff?im_w=720',
    property: "Entire house",
    city:'johannesburg',
    guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
    info: "wifi - Kitchen - parking",
    price: "From R15 000",
    ratings: "4(55 Reviews)",
  },
  {
    src:'https://a0.muscache.com/im/pictures/miso/Hosting-989217269238046084/original/07594ca0-1259-400b-80e7-347a65d5dc71.jpeg?im_w=720',
    property: "Entire Apartment",
    city:'port Elizabeth',
    guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
    info: "wifi - Kitchen - parking",
    price:'From R7000',
    ratings: "3(550 Reviews)",
   
  },
  {
    src:'https://a0.muscache.com/im/pictures/monet/Luxury-705175824082881663/original/656ba3ca-5bd5-459f-9fa6-b38155035f8d?im_w=720',
    property: "Entire farmhouse",
    city:'Cape Town',
    guests: "4 guests, entire house, 2 bedrooms, 2 bathrooms",
    info: "wifi - Kitchen - parking",
    price:"From R20 000",
    ratings: "5(1050 Reviews)",
   
  }
];

const AllLocations = () => {
  return (
    <div className="all-locations">
      <h1>5 All Stays in All Locations</h1>
      <div className="card-section">
        {locationsData.map((location, index) => (
          <div className="location-item" key={index}> {/* Container around each LocationCard */}
            <LocationCard 
              src={location.src} 
              property={location.property}
              city={location.city} 
              guests={location.guests} 
              info={location.info}
              price={location.price} 
              ratings={location.ratings} 
              link={`/city/${location.city.toLowerCase()}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLocations;

