import React from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">ConnectHub</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">À propos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}