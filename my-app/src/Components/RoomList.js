import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard'; 

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('/rooms')
      .then(response => response.json())
      .then(data => setRooms(data.rooms))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <div>
      <h1>Habitaciones disponibles </h1>
      <div className="room-list">
        {rooms.map(room => (
          <RoomCard key={room.room_key} room={room} />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
