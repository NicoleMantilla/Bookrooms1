import React from 'react';

function RoomCard({ room }) {
  return (
    <figure className="image-block">
      <img src={`/images/${room.room_picture}`} alt={room.room_name} />
      <div className="room-details">
        <h1>{room.room_name}</h1>
        <figcaption>
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
        </figcaption>
      </div>
    </figure>
  );
}

export default RoomCard;
