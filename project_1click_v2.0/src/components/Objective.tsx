import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const Objective: React.FC = () => {
  return (
    <section id="objetivo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
            Objetivo General
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-dark-blue mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 animate-scale-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-primary-blue to-dark-blue rounded-full p-6 shadow-lg">
                  <Target size={48} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Impulsar la captación y fidelización de clientes de alto valor mediante un sistema de incentivos 
                  <span className="font-semibold text-primary-blue"> justo</span>, 
                  <span className="font-semibold text-dark-blue"> escalable</span> y 
                  <span className="font-semibold text-lime-green"> motivador</span>, 
                  que premia tanto la recomendación como la gestión activa y el compromiso con los resultados.
                </p>
              </div>
            </div>
            
            {/* Key Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-lime-green/20 to-lime-green/10 rounded-2xl p-6 group-hover:from-lime-green/30 group-hover:to-lime-green/20 transition-all duration-300">
                  <Users size={32} className="text-lime-green mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Captación</h3>
                  <p className="text-sm text-gray-600">Atrae nuevos clientes de alto valor</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/10 rounded-2xl p-6 group-hover:from-primary-blue/30 group-hover:to-primary-blue/20 transition-all duration-300">
                  <Target size={32} className="text-primary-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Fidelización</h3>
                  <p className="text-sm text-gray-600">Mantiene relaciones duraderas</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-dark-blue/20 to-dark-blue/10 rounded-2xl p-6 group-hover:from-dark-blue/30 group-hover:to-dark-blue/20 transition-all duration-300">
                  <TrendingUp size={32} className="text-dark-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Escalabilidad</h3>
                  <p className="text-sm text-gray-600">Crece con tu negocio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;