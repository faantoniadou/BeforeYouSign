import React from 'react';

const Navbar = () => (
  <header className="bg-white sticky top-0 w-full shadow-md">
    <nav className="flex justify-center py-4">
      <a href="#home" className="mx-4 hover-scale-25 text-gray-800 hover:text-gray-600">Home</a>
      <a href="#location-finder" className="mx-4 text-gray-800 hover:text-gray-600">Location Finder</a>
      <a href="#blog" className="mx-4 text-gray-800 hover:text-gray-600">Blog</a>
      <a href="#contact" className="mx-4 text-gray-800 hover:text-gray-600">Contact</a>
    </nav>
  </header>
);

export default Navbar;
