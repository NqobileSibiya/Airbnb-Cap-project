import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import LocationCard from './LocationCard'; 
import './CityListings.css'; 

const CityListings = () => {
  const { city } = useParams();

  // Define locationsData directly in this component with unique IDs
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

 const selectedLocation = locationsData.filter(location => location.city.toLowerCase() === city.toLowerCase());

  return (
    <div>
      <h1>{city.charAt(0).toUpperCase() + city.slice(1)}</h1>
      <div className="location-cards">
        {selectedLocation.length > 0 ? (
          selectedLocation.map((location) => (
            <Link 
              to={`/locations-details/${location.id}`} 
              key={location.id} 
               className="location-link"
              state={{ 
                guests: location.guests, 
                city: location.city, 
                price: location.price 
              }}
            >
              <LocationCard 
                id={location.id}
                property={location.property}
                src={location.src}
                city={location.city}
                guests={location.guests}
                info={location.info}
                price={location.price}
                ratings={location.ratings}
              />
            </Link>
          ))
        ) : (
          <p>No listings available for {city.charAt(0).toUpperCase() + city.slice(1)}.</p>
        )}
      </div>
    </div>
  );
};

export default CityListings;