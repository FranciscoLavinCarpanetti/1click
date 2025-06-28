import React from 'react';
import { Bitcoin, Database, Shield, TrendingUp } from 'lucide-react';

interface ComplementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ComplementCard: React.FC<ComplementCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
      <div className={`bg-gradient-to-br ${color} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="text-primary-blue font-semibold hover:text-dark-blue transition-colors duration-300 flex items-center group">
          Ver más detalles
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Complements: React.FC = () => {
  const complements = [
    {
      icon: <Bitcoin size={32} className="text-white" />,
      title: "Cripto-bonos",
      description: "Opcional en stablecoins (USDT/USDC) o BTC/ETH por conversión en productos cripto.",
      color: "from-lime-green to-green-600"
    },
    {
      icon: <Database size={32} className="text-white" />,
      title: "CRM Obligatorio",
      description: "Para trazabilidad de gestión, aportes y seguimiento de todas las actividades.",
      color: "from-sky-blue to-blue-600"
    },
    {
      icon: <Shield size={32} className="text-white" />,
      title: "Auditorías Trimestrales",
      description: "Control de calidad, volumen, retención y compliance del programa.",
      color: "from-dark-blue to-blue-900"
    },
    {
      icon: <TrendingUp size={32} className="text-white" />,
      title: "Escalabilidad",
      description: "Bonificaciones especiales por tramos altos de captación (>10M€, >200 clientes referidos).",
      color: "from-primary-blue to-blue-700"
    }
  ];

  return (
    <section id="complementos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
            Complementos y Opcionales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-dark-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios adicionales que potencian tu experiencia con el plan de incentivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complements.map((complement, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ComplementCard {...complement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Complements;