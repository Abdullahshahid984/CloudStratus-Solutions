import React, { useState } from 'react';
import { Menu, X, Cloud } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">CloudStratus Solutions</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;