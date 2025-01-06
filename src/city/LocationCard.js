import React from 'react';
import { Link } from 'react-router-dom';
import './LocationCard.css';

const LocationCard = ({ id, src, city, property, guests, info, price, ratings, Night }) => {
  return (
    <Link to={`/location/${id}`} className="location-card">
      <img src={src} alt={city} />
      <div className="location-details">
        <h2>{property}</h2>
        <h3>{city}</h3>
        <p>{guests} guests</p>
        <p>{info}</p>
        <div className="price-ratings-row">
  <p className="price-ratings-row-ratings">★ {ratings}</p>
  <p className="price-ratings-row-price">
    <span className="amount">${price}</span>
    <span className="per-night"> /Night</span>
  </p>
</div>
      </div>
    </Link>
  );
};

export default LocationCard;


