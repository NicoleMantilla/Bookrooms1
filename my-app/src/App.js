import React from 'react';
import RoomList from './Components/RoomList';
import './styles.scss';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h4>Hotel Paratytech</h4>
      </header>
      <Navbar />
      <main>
      <section id="habitaciones">
        <RoomList/>
      </section> 
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;


