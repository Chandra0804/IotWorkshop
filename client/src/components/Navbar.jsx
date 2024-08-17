import React from 'react';
import SricityLogo from '../assets/sricityLogo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-900/25 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-xl font-bold">
        <img 
          src={SricityLogo} 
          alt="Workshop Logo" 
          className="h-8 w-8 object-cover rounded-full"
        />
        <span>IoT ML Workshop</span>
      </div>
      <div className="space-x-4">
        <a href="#news" className="relative group font-semibold">
          News
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#organizing-committee" className="relative group font-semibold">
          Organizing Committee
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#speakers" className="relative group font-semibold">
          Speakers
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#schedule" className="relative group font-semibold">
          Schedule
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
        <span>|</span>
        <a href="#about" className="relative group font-semibold">
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;