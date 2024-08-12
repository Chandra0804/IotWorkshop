import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/25 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        IoT ML Workshop
      </div>
      <div className="space-x-4">
        <a href="#news" className="relative group">
          News
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#organizing-committee" className="relative group">
          Organizing Committee
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#speakers" className="relative group">
          Speakers
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#schedule" className="relative group">
          Schedule
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#about" className="relative group">
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;