import React from 'react';

function RoomCard({ room }) {
  return (
    <div className="room-card">
      <img src={room.room_picture} alt={room.room_name} />
      <div className="room-details">
        <h2>{room.room_name}</h2>
        <p>{room.room_description}</p>
        <ul>
          {room.available_occupancy.map((occupancy, index) => (
            <li key={index}>{occupancy}</li>
          ))}
        </ul>
        <h3>Precios:</h3>
        {room.data_prices.map((priceGroup, index) => (
          <div key={index}>
            {priceGroup.map((price, index) => (
              <div key={index}>
                <p>{price.rate_name}: ${price.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomCard;
