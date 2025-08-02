import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          Smartflowy
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          <Link to="/services" className="hover:text-blue-200 transition">Services</Link>
          <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
