// components/Search.js
import { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa un país"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
}

export default Search;