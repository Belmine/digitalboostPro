'use client';
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Hauteur du header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Accueil', id: 'hero' },
    { label: 'À propos', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Processus', id: 'processus' },
    { label: 'Témoignages', id: 'testimonials' }
    

    
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center z-50 relative hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-green-600 rounded-lg mr-3 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div className="text-xl font-bold text-gray-900">
              DigitalBoost Pro
            </div>
          </button>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/contact">
               <button 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-semibold"
            >
              Nous contacter
            </button>
            </a>
           
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden z-50 relative">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          <div>
            <button 
              className="absolute top-4 right-4 text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-700 hover:text-green-600 transition-colors text-lg font-medium py-2 border-b border-gray-100"
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-6">
              <a href="/contact">
                 <button 
                className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
              >
                Nous contacter
              </button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;