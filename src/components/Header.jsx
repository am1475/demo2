import React, { useState } from 'react';
import logo7 from '../images/logo nav.png';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <img src={logo7} alt="Logo" className="h-10" />
      <div className="flex">
        <input 
          type="text" 
          placeholder="Enter location" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="p-2 rounded mr-2" 
        />
        <button onClick={handleSearch} className="bg-white text-blue-600 px-4 py-2 rounded">Search</button>
      </div>
    </header>
  );
};

export default Header;
