import React from 'react';
import './Card.css';

const Card = ({ src, city, country, price}) => {
  return (
    <div className="card">
        <img src ={src} alt="" />
        <div className= "card_info">
            <h2>{city}</h2>
            <h4>{country}</h4>
            <h3>{price}</h3>
        </div>
    </div>
  )
}

export default Card;
