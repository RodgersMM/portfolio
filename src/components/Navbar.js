// Navbar.js
// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">PORTFOLIO LANDING PAGE</div>
        <ul className="flex bg-blue-500 space-x-4">
          <li className='nav-items'>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li className='nav-items'>
            <a href="#" className="text-white hover:text-gray-300">About Us</a>
          </li >
          <li className='nav-items'>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;