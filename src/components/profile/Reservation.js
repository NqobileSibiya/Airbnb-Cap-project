import React , {useState} from 'react';
import './Reservation.css'; // You can create this CSS file for styling

const Reservation = () => {
  // Sample initial reservations state
  const [reservations, setReservations] = useState([
    { id: 1, bookedBy: 'Nqobile sibiya', property: 'Beach House', checkIn: '2023-10-01', checkOut: '2023-10-10' },
    { id: 2, bookedBy: 'Lucky Dube', property: 'Mountain Cabin', checkIn: '2023-10-05', checkOut: '2023-10-15' },
    { id: 3, bookedBy: 'carol sibiya', property: 'Farm House', checkIn: '2023-10-01', checkOut: '2023-10-10' },
    { id: 4, bookedBy: 'happiness ndwe', property: 'Township House', checkIn: '2023-10-05', checkOut: '2023-10-15' },
    { id: 5, bookedBy: 'Lauren Hill', property: 'Farm House', checkIn: '2023-10-01', checkOut: '2023-10-10' },
    // Add more reservations as needed
  ]);

  // Function to delete a reservation
  const handleDelete = (id) => {
    setReservations((prevReservations) =>
      prevReservations.filter((reservation) => reservation.id !== id)
    );
  };

  return (
    <div className="reservation-table-container">
      <h2>Reservation Table</h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Booked By</th>
            <th>Property</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.bookedBy}</td>
              <td>{reservation.property}</td>
              <td>{reservation.checkIn}</td>
              <td>{reservation.checkOut}</td>
              <td>
                <button onClick={() => handleDelete(reservation.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
