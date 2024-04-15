import React from 'react';

function RoomCard({ room }) {
  return (
    <figure className="room-card">
      <img src={`/images/${room.room_picture}`} alt={room.room_name} className="room-image" />
      <div className="room-caption">
        <h1>{room.room_name}</h1>
      </div>
      <div className="room-overlay">
        <div className="room-details">
          <p className="room-description">{room.room_description}</p>
          <div className="room-availability">
            <h3>Disponibilidad:</h3>
            <ul>
              {room.available_occupancy.map((occupancy, index) => (
                <li key={index}>{occupancy}</li>
              ))}
            </ul>
          </div>        
          <div className="room-prices">
            <h3>Precios:</h3>
            {room.data_prices.map((priceGroup, index) => (
              <div key={index} className="price-group">
                {priceGroup.map((price, index) => (
                  <p key={index}>{price.rate_name}: ${price.price}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

export default RoomCard;
