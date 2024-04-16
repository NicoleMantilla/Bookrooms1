import React from 'react';

function RoomDetails({ room }) {

	return (
	  <figure className= "room-detail-section" id={`room-details-${room.room_key}`}>
		<div>
		  <div className='room-title'>{room.room_name}</div>
		</div>
		<img className='room-image' src={`/images/${room.room_picture}`} alt={room.room_name} />
		<div className='room-info'>
		  <div>
			<p className='room-description'>{room.room_description}</p>
			<div className='room-availability'>
			  <h1>Disponibilidad:</h1>
			  <ul>
				{room.available_occupancy.map((occupancy, index) => (
				  <li  key={index}>{occupancy}</li>
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