import React from 'react';


const imageUrl = 'http://localhost:5000/static/images/image1.jpg';

function App() {
  return (
    <div>
      <img src={imageUrl} alt="Imagen" />
    </div>
  );
}

export default App;
