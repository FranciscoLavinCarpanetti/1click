import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 relative">
              1CLICK
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-blue"></div>
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Plan de Incentivos para captación y fidelización de clientes de alto valor.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-blue/20 rounded-full flex items-center justify-center hover:bg-primary-blue/30 transition-colors duration-300 cursor-pointer">
                <span className="text-primary-blue font-bold">1C</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-6 relative">
              Enlaces
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary-blue"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('objetivo')}
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  Objetivo
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('perfiles')}
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  Perfiles
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tabla-resumen')}
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  Resumen
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('complementos')}
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  Complementos
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-6 relative">
              Legal
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary-blue"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group">
                  Términos y condiciones
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group">
                  Política de privacidad
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group">
                  Compliance
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contacto
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary-blue"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:incentivos@banco.com" 
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <Mail size={18} className="mr-3 text-primary-blue group-hover:scale-110 transition-transform duration-300" />
                  incentivos@banco.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+34900123456" 
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <Phone size={18} className="mr-3 text-primary-blue group-hover:scale-110 transition-transform duration-300" />
                  900 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2023 Plan de Incentivos 1CLICK. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Política de Cookies
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;