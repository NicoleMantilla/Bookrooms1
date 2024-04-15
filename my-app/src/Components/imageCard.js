// App.js en el frontend

import React from 'react';
import './App.css'; // Asegúrate de tener los estilos de tu aplicación si los necesitas

const imageUrl = 'http://localhost:5000/static/images/image1.jpg';

function App() {
  return (
    <div>
      <img src={imageUrl} alt="Imagen" />
    </div>
  );
}

export default App;
