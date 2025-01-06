import React from 'react';
import './ListingsDisplay.css'; // Assuming this file exists for styles

const ListingsDisplay = ({ src, property, city, guests, info, price, ratings }) => {
  return (
    <div className="listings-display">
      <img src={src} alt={`Property in ${city}`} />
      <div className="info">
        <h3>{property} in {city}</h3>
        <p>{guests}</p>
        <p>{info}</p>
        <p className="price">{price}</p>
        <p>{ratings}</p>
      </div>
    </div>
  );
};

export default ListingsDisplay;

