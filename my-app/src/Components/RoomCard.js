import React from 'react';

function RoomCard({ room, onMoreInfoClick }) {

  const handleMoreInfoClick = () => {
    onMoreInfoClick(room.room_key);
  }
  return (
    <figure className="room-card" >
      <img src={`/images/${room.room_picture}`} alt={room.room_name} className="room-image" />
       <div className="room-caption">
        <h1 className='room-title'>{room.room_name}</h1> 
      </div> 
      <div className="room-overlay">
        <div className='room-details'>
          <p className="room-description">{room.room_description}</p>
          <button onClick={handleMoreInfoClick} className='more-info-button'> More info</button>    
        </div>
      </div>
    </figure>
  );
}

export default RoomCard;
