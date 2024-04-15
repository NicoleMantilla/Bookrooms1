import React from 'react';
import RoomList from './Components/RoomList';
import './styles.scss'; 

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h4>Hotel Paratytech</h4>
      </header>
      <main>
        <RoomList/> 
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;


