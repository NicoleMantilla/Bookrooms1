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
    <form onSubmit={handleSearch}>
      <label>
        Número de adultos:
        <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
      </label>
      <label>
        Número de niños:
        <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />
      </label>
      <label>
        Número de bebés:
        <input type="number" value={babies} onChange={(e) => setbabies(e.target.value)} />
      </label>
      <label>
        Precio máximo:
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;
