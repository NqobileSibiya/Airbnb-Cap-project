import React from 'react';
import './Home.css'; // For styling
import Card from './Card'; // Make sure to import the Card component
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const { listings,loading, error } = useSelector(state => state.listingList);
  

  return (
    <div className="home">
      <div className="home_section">
        <home_banner />
      <h1>Not Sure Where to go? Perfect!</h1>
        <button className="home_cta">I'M Flexible</button>
      {loading ? (
        <h2>Loading...</h2> 
      ) : error ? (
        <h3>{error.message}</h3> 
      ) : (
      <>
      <div className="home_card">
        {listings.map((listing) => (
          <Link to={`/city-listings/${listing.city.toLowerCase()}`} key={listing.id}>

          <Card
           src={listing.img}
           city={listing.city}
           country={listing.country}
           price={listing.price}
          />
          </Link>
        ))}
      </div>
      </>
      )}
    </div>

    <div className="header_Section_img">
    <p>Inspiration for your trip</p>
    </div>
  <div className="home_Section_img">
  <Link to="/city-listings/durban">
     <Card
      src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-684763757047711680/original/5d64a8c3-edd1-46f8-9388-8807c2461db2.jpeg?im_w=720'
      city='Durban'
      country='South Africa'
      price='From R8500 per night'
      />
  </Link>

  <Link to="/city-listings/pretoria">
     <Card
      src='https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720'
      city='pretoria'
      country='South Africa'
      price='From R10 000 per night'
      />
   </Link>

   <Link to="/city-listings/johannesburg">
     <Card
      src='https://a0.muscache.com/im/pictures/monet/Luxury-604952207599367088/original/1d888aca-1de3-48b8-9255-0e30fe8161ff?im_w=720'
      city='johannesburg'
      country='South Africa'
      price='From R15 000 per night'
      />
   </Link>

   <Link to="/city-listings/portelizabeth">
     <Card
      src='https://a0.muscache.com/im/pictures/miso/Hosting-989217269238046084/original/07594ca0-1259-400b-80e7-347a65d5dc71.jpeg?im_w=720'
      city='port Elizabeth'
      country='South Africa'
      price='From R7000 per night'
      />
    </Link>

    <Link to="/city-listings/capetown">
     <Card
      src='https://a0.muscache.com/im/pictures/monet/Luxury-705175824082881663/original/656ba3ca-5bd5-459f-9fa6-b38155035f8d?im_w=720'
      city='Cape Town'
      country='South Africa'
      price='From R20 000 per night'
      />
  </Link>
    </div>
         <div className="header_experience_section">
            <p>Discover new experiences</p>
        </div>
    <div className="home_experience_section">
      <div className="home_experience">
        <h3>Things to do on your trip</h3>
        <button>Experiences</button>
        <img
        src="https://a0.muscache.com/im/pictures/e3fdeed4-d914-4475-aa47-8280c80a300a.jpg?im_w=1200"
        alt="Experience 1"
        />
      </div>
    

  <div className="home_experience">
    <img
      src="https://t4.ftcdn.net/jpg/03/77/41/51/360_F_377415135_ASHtLReVLMnb3Aw5YAGiCNU6rqOTOWWP.jpg"
      alt="Experience 2"
    />
    <div className="text-overlay">
      <h3>Things to do at home</h3>
      <button>Online Experiences</button>
    </div>
  </div>
</div>


<div className="home_section_card">
  <div className="home_section_card_text">
    <h3>Shop Airbnb gift cards</h3>
    <button>Learn More</button>
  </div>

  <div className="home_section_card_img">
    <img 
      src="https://cdn.prod.website-files.com/66b4914fec72a1c64cbd2e50/66b4d437253d5d765b400e9d_Airbnb-p-500.png"
      alt="gift_card"
    />
  </div>
</div>

<div className="home_Hosting_sections">
  <h3>Questions about hosting?</h3>
  <button>Ask a super Host</button>
</div>

<h3 className="getaway_heading">Inspiration for Getaways</h3>
<div className="destination_tags">
  <span>Destination</span>
  <span>Adventure</span>
  <span>Mountain Cabins</span>
  <span>Beach Destination</span>
  <span>Popular Destination</span>
  <span>Unique Stay</span>
</div>

<div className="destination_cities">
  <div className="city">
    <span>Eiffel Tower</span>
    <p>Paris, France</p>
  </div>
  <div className="city">
    <span>Statue of Liberty</span>
    <p>New York, USA</p>
  </div>
  <div className="city">
    <span>Shibuya Crossing</span>
    <p>Tokyo, Japan</p>
  </div>
  <div className="city">
    <span>Big Bean</span>
    <p>Chicago, USA</p>
  </div>
</div>

<div className="destination_cities">
  <div className="city">
    <span>Colosseum</span>
    <p>Rome, Italy</p>
  </div>
  <div className="city">
    <span>Sydney Opera House</span>
    <p>Sydney, Australia</p>
  </div>
  <div className="city">
    <span>Table Mountain</span>
    <p>Cape Town, South Africa</p>
  </div>
  <div className="city">
    <span>Sagrada Familia</span>
    <p>Barcelona, Spain</p>
  </div>
</div>

<div className="destination_cities">
  <div className="city">
    <span>Great Wall</span>
    <p>Beijing, China</p>
  </div>
  <div className="city">
    <span>Christ Redeemer</span>
    <p>Rio de Janeiro, Brazil</p>
  </div>
  <div className="city">
    <span>Santorini</span>
    <p>Greece</p>
  </div>
  <div className="city">
    <span>Grand Canyon</span>
    <p>Arizona, USA</p>
  </div>
</div>
    </div>
  );
};

export default Home;
