// Navbar.js
// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">

        <div className="text-white font-bold text-xl">PORTFOLIO LANDING PAGE</div>

        <div className='flex items-center text-white font-bold justify-between text-xl'>
          <ul className='flex justify-evenly items-center ' >
            <li className='items-center'>TOP SKILLS | </li>
            <li className='items-center'>WEB DEV | </li>
            <li className='items-center'>AGILE |</li>
            <li className='items-center' >SEO |</li>
            <li className='items-center'>SMM</li>

          </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;