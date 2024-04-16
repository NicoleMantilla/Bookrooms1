import React from 'react';

function RoomCard({ room }) {
  return (
    <figure className="room-card" >
      <img src={`/images/${room.room_picture}`} alt={room.room_name} className="room-image" />
      <div className="room-caption">
        <h1>{room.room_name}</h1>
      </div>
      <div className="room-overlay">
        <div>
          <p className="room-description">{room.room_description}</p>
          <button href="#habitaciones" className='more'> More info</button>    
        </div>
      </div>
    </figure>
  );
}

export default RoomCard;
