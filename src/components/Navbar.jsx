import React from 'react';
import { Link } from 'react-router-dom';
import TLogo from '../assets/logo-light.png'; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={TLogo} alt="T Logo" className="w-10 h-10 mr-2" />
        <span className="text-xl font-bold text-white">Triptide</span>
      </div>
      {/* Navigation Links */}
      <div className="space-x-10">
        <Link to="/" className="text-white hover:text-green-500">Home</Link>
        <Link to="/explore" className="text-white hover:text-green-500">Explore Nearby</Link> {/* Route to Map */}
        <a href="#features" className="text-white hover:text-green-500">Features</a>
        <a href="#reviews" className="text-white hover:text-green-500">Reviews</a>
        <Link to="/contact" className="text-white hover:text-green-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
