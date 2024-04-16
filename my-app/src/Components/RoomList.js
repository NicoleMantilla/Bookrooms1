import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard'; 
import SearchForm from './SearchForm';
import RoomDetails from './RoomDetails';


function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (searchResults.length > 0) {
      document.getElementById("search-results-section").scrollIntoView({ behavior: "smooth" });
    }
  }, [searchResults]);

  useEffect(() => {
    fetch('/rooms')
      .then(response => response.json())
      .then(data => setRooms(data.rooms))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  const handleSearch = (criteria) => {
    const queryParams = new URLSearchParams(criteria).toString();
    fetch(`/rooms?${queryParams}`)
      .then(response => response.json())
      .then(data => {
        if (data.rooms.length === 0) {
          setSearchError(`Lo sentimos, no hay opciones disponibles para ${criteria.adults}-${criteria.children}-${criteria.babies} personas y un precio máximo de $${criteria.maxPrice}.`);
        } else {
          setSearchResults(data.rooms);
          setSearchError('');
        }
      })
      .catch(error => console.error('Error fetching search results:', error));
  };


  return (
    
    <div className='roomlist-container'>
      <header className="main-title">
        <h4>Hotel Paratytech</h4>
      </header>
      <div className="room-list">
        {rooms.map(room => (
          <RoomCard key={room.room_key} room={room} />
        ))}
      </div>
      <section id= "habitaciones">
        <div className="room-details">
          {rooms.map(room => (
            <RoomDetails key={room.room_key} room={room} />
          ))}
        </div> 
      </section>
      <section id="formulario">
      <div className='search-container'>
      <SearchForm onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <div id = "search-results-section">
          <h2>Resultados de la búsqueda</h2>
          <div className="room-details">
            {searchResults.map(room => (
              <RoomDetails key={room.room_key} room={room} />
            ))}
          </div>
        </div>
      )}
      {searchError && (
        <p>{searchError}</p>
      )}
      </div>
      </section>
    </div>
  );
}

export default RoomList;
