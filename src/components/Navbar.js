// Navbar.js
// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">PORTFOLIO LANDING PAGE</div>
        <div className='flex text-white font-bold justify-around text-xl'>
          <div className='items-center'>TOP SKILLS:</div>
          <div className='items-center'>Web Dev</div>
          <div className='items-center'>Agile</div>
          <div className='items-center'>SEO</div>
          <div className='items-center'>SMM</div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;