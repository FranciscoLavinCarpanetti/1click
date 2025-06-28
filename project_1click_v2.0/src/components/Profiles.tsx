import React from 'react';
import { UserPlus, Handshake, Link, Briefcase } from 'lucide-react';

interface ProfileCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  profile: string;
  incentive: string[];
  condition: string;
  color: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ icon, number, title, profile, incentive, condition, color }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
      <div className="flex items-center mb-6">
        <div className={`bg-gradient-to-br ${color} rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="ml-4">
          <span className="text-3xl font-bold text-gray-300">{number}</span>
          <h3 className="text-2xl font-bold text-dark-blue">{title}</h3>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Perfil</p>
          <p className="text-gray-700 leading-relaxed">{profile}</p>
        </div>
        
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Incentivo</p>
          <ul className="space-y-2">
            {incentive.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Condición</p>
          <p className="text-gray-700 text-sm leading-relaxed">{condition}</p>
        </div>
      </div>
    </div>
  );
};

const Profiles: React.FC = () => {
  const profiles = [
    {
      icon: <UserPlus size={32} className="text-white" />,
      number: "01",
      title: "Recomendación",
      profile: "Personas externas al banco que recomiendan nuevos clientes o productos.",
      incentive: [
        "Fijo por cliente o producto cerrado (ej. 1.000€ por apertura)",
        "Variable condicionado a comisiones de apertura (10-20%)"
      ],
      condition: "Cliente activo mínimo 6 meses, validación de no cartera existente.",
      color: "from-lime-green to-green-600"
    },
    {
      icon: <Handshake size={32} className="text-white" />,
      number: "02",
      title: "Colaborador",
      profile: "Profesionales externos con colaboración comercial activa.",
      incentive: [
        "20-40% de comisiones de apertura",
        "Bonificación anual adicional por volumen/calidad"
      ],
      condition: "Acuerdo marco, cumplimiento KYC/AML, reporte regular.",
      color: "from-sky-blue to-blue-600"
    },
    {
      icon: <Link size={32} className="text-white" />,
      number: "03",
      title: "Vinculado",
      profile: "Profesionales que gestionan activamente carteras existentes.",
      incentive: [
        "5-15% anual sobre margen financiero + comisiones netas",
        "Bonos por crecimiento de AUM y satisfacción (NPS)"
      ],
      condition: "Seguimiento mensual, plan de desarrollo, baja rotación.",
      color: "from-primary-blue to-blue-700"
    },
    {
      icon: <Briefcase size={32} className="text-white" />,
      number: "04",
      title: "Contratado",
      profile: "Empleados internos de captación y gestión de cartera.",
      incentive: [
        "Salario fijo + variable por objetivos",
        "Bono anual por superar metas con calidad"
      ],
      condition: "3M€ AUM inicial, crecimiento ≥2M€/año, calidad de atención.",
      color: "from-dark-blue to-blue-900"
    }
  ];

  return (
    <section id="perfiles" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
            Perfiles de Incentivos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-dark-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el perfil que mejor se adapta a tu situación y maximiza tus beneficios
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;