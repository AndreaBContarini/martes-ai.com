import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-black/80 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/martes-logo-black.png" alt="Martes AI Logo" className="w-32" />
        </Link>
        <div className="flex gap-8 items-center">
          <Link 
            to="/" 
            className={`text-white hover:text-[#274f36] ${location.pathname === '/' ? 'text-[#274f36]' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/casi-studio" 
            className={`text-white hover:text-[#274f36] ${location.pathname === '/casi-studio' ? 'text-[#274f36]' : ''}`}
          >
            Risultati Aziende
          </Link>
          <Link 
            to="/blog" 
            className={`text-white hover:text-[#274f36] ${location.pathname === '/blog' ? 'text-[#274f36]' : ''}`}
          >
            Blog
          </Link>
          <Link 
            to="/chi-siamo" 
            className={`text-white hover:text-[#274f36] ${location.pathname === '/chi-siamo' ? 'text-[#274f36]' : ''}`}
          >
            Chi siamo
          </Link>
          <Link 
            to="/chi-siamo#contact-form" 
            className="bg-[#274f36] hover:bg-[#1a3524] text-white px-4 py-2 rounded-lg"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;