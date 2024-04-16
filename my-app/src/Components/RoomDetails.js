import React from 'react';

function RoomDetails({ room }) {

	return (
	  <figure id="more info">
		<div>
		  <h1>{room.room_name}</h1>
		</div>
		<img src={`/images/${room.room_picture}`} alt={room.room_name} className="room-image" />
		<div>
		  <div>
			<p>{room.room_description}</p>
			<div>
			  <h3>Disponibilidad:</h3>
			  <ul>
				{room.available_occupancy.map((occupancy, index) => (
				  <li key={index}>{occupancy}</li>
				))}
			  </ul>
			</div>        
			<div>
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
  
  export default RoomDetails;