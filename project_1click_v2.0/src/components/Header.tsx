import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <a 
            href="#" 
            className="text-2xl font-bold text-dark-blue hover:text-primary-blue transition-colors duration-300"
          >
            1CLICK
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('objetivo')}
                className="text-soft-black hover:text-primary-blue font-medium transition-colors duration-300 relative group"
              >
                Objetivo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('perfiles')}
                className="text-soft-black hover:text-primary-blue font-medium transition-colors duration-300 relative group"
              >
                Perfiles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('tabla-resumen')}
                className="text-soft-black hover:text-primary-blue font-medium transition-colors duration-300 relative group"
              >
                Resumen
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('complementos')}
                className="text-soft-black hover:text-primary-blue font-medium transition-colors duration-300 relative group"
              >
                Complementos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <a 
                href="#"
                className="bg-gradient-to-r from-primary-blue to-dark-blue text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Acceder
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-soft-black hover:text-primary-blue transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-in">
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('objetivo')}
                  className="block w-full text-left text-soft-black hover:text-primary-blue font-medium transition-colors duration-300"
                >
                  Objetivo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('perfiles')}
                  className="block w-full text-left text-soft-black hover:text-primary-blue font-medium transition-colors duration-300"
                >
                  Perfiles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tabla-resumen')}
                  className="block w-full text-left text-soft-black hover:text-primary-blue font-medium transition-colors duration-300"
                >
                  Resumen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('complementos')}
                  className="block w-full text-left text-soft-black hover:text-primary-blue font-medium transition-colors duration-300"
                >
                  Complementos
                </button>
              </li>
              <li>
                <a 
                  href="#"
                  className="block bg-gradient-to-r from-primary-blue to-dark-blue text-white px-6 py-2 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                >
                  Acceder
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;