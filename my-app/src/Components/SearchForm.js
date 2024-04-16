import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [babies, setbabies] = useState(0);
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ adults, children, babies, maxPrice });
  };
  

  return (
<form className="search-form" onSubmit={handleSearch}>
      <div className="form-field">
        <label>Número de adultos:</label>
        <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
      </div>
      <div className="form-field">
        <label>Número de niños:</label>
        <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />
      </div>
      <div className="form-field">
        <label>Número de bebés:</label>
        <input type="number" value={babies} onChange={(e) => setbabies(e.target.value)} />
      </div>
      <div className="form-field">
        <label>Precio máximo:</label>
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;
