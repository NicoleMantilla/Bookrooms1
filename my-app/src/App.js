import React, { useState, useEffect } from 'react';

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
      <h1>Lista de habitaciones</h1>
      <ul>
        {rooms.map(room => (
          <li key={room.room_key}>
            <h2>{room.room_name}</h2>
            <p>{room.room_description}</p>
            <img src={room.room_picture} alt={room.room_name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;

