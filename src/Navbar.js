// Navbar.js
import React from 'react';

const Navbar = ({ handleSearch }) => {
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      {/* Add other navigation elements here */}
    </nav>
  );
};

export default Navbar;
