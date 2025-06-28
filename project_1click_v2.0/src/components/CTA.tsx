import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-blue via-primary-blue to-dark-blue text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para unirte al Plan 1CLICK?
          </h2>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed text-white/90">
            Regístrate ahora y comienza a beneficiarte de nuestro sistema de incentivos diseñado para maximizar tus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#"
              className="bg-lime-green hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Registrarse
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="#"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-10 py-4 rounded-full font-bold text-lg border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-3 group"
            >
              <Info size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              Más información
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">+1000</div>
              <div className="text-white/70 font-medium">Clientes activos</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">€50M+</div>
              <div className="text-white/70 font-medium">AUM gestionados</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">95%</div>
              <div className="text-white/70 font-medium">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;