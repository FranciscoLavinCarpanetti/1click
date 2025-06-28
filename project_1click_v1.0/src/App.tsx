import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Handshake, BarChart3, Briefcase, Bitcoin, Smartphone, Search, TrendingUp, ChevronRight, Star, Award, Target, Zap, Eye, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['inicio', 'perfiles', 'resumen', 'complementos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const profiles = [
    {
      icon: Users,
      title: "RECOMENDADOR",
      description: "Personas externas que recomiendan nuevos clientes o productos",
      incentives: [
        "€1.000 por apertura efectiva",
        "10-20% de comisiones de apertura",
        "Bonificaciones por volumen"
      ],
      conditions: "Cliente activo ≥ 6 meses, no cartera previa",
      gradient: "from-blue-500 via-blue-600 to-purple-600",
      bgPattern: "bg-gradient-to-br",
      stats: { clients: "500+", conversion: "85%" }
    },
    {
      icon: Handshake,
      title: "COLABORADOR",
      description: "Profesionales externos con colaboración comercial activa",
      incentives: [
        "20-40% de comisiones de apertura",
        "Bonificación anual por volumen",
        "Escalable según perfil del cliente"
      ],
      conditions: "Acuerdo marco, cumplimiento KYC/AML, reporte regular",
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      bgPattern: "bg-gradient-to-br",
      stats: { clients: "1.2K+", conversion: "92%" }
    },
    {
      icon: BarChart3,
      title: "VINCULADO",
      description: "Gestores que manejan activamente carteras y relaciones",
      incentives: [
        "5-15% del margen neto generado",
        "Bonus por crecimiento AUM",
        "Incentivos por satisfacción NPS"
      ],
      conditions: "Seguimiento mensual, plan de cliente, bajo churn",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgPattern: "bg-gradient-to-br",
      stats: { clients: "800+", conversion: "96%" }
    },
    {
      icon: Briefcase,
      title: "CONTRATADO",
      description: "Empleados internos responsables de captación y gestión",
      incentives: [
        "Salario fijo + Variable potente",
        "≥3M€ AUM inicial requerido",
        "Bono anual escalonado"
      ],
      conditions: "Máx. 100 clientes o 20M€, formación continua",
      gradient: "from-violet-500 via-purple-600 to-indigo-600",
      bgPattern: "bg-gradient-to-br",
      stats: { clients: "300+", conversion: "98%" }
    }
  ];

  const complementos = [
    {
      icon: Bitcoin,
      title: "Cripto-bonos",
      description: "Opcional en stablecoins (USDT/USDC) o BTC/ETH por conversión en productos cripto",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "CRM Obligatorio",
      description: "Para trazabilidad de gestión, aportes y seguimiento completo",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Search,
      title: "Auditorías Trimestrales",
      description: "Control de calidad, volumen, retención y compliance",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad",
      description: "Bonificaciones especiales por tramos altos de captación (>10M€, >200 clientes referidos)",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const tableData = [
    {
      perfil: "Recomendador",
      rol: "Refiere nuevos clientes o productos",
      fijo: "€1.000 por cliente/producto",
      variable: "10-20% de comisiones de apertura",
      condiciones: "Cliente activo ≥ 6 meses, no cartera previa",
      highlight: "bg-blue-50 border-l-4 border-blue-500"
    },
    {
      perfil: "Colaborador",
      rol: "Comercial externo continuado",
      fijo: "No aplica",
      variable: "20-40% de comisiones de apertura + bonus por volumen",
      condiciones: "Acuerdo marco, cumplimiento KYC/AML",
      highlight: "bg-emerald-50 border-l-4 border-emerald-500"
    },
    {
      perfil: "Vinculado",
      rol: "Gestor con relación continua con clientes",
      fijo: "No aplica",
      variable: "5-15% del margen neto generado (comisiones + AUM)",
      condiciones: "Seguimiento, fidelización, plan de cliente, bajo churn",
      highlight: "bg-orange-50 border-l-4 border-orange-500"
    },
    {
      perfil: "Contratado",
      rol: "Empleado interno (captación + gestión cartera)",
      fijo: "Salario fijo competitivo",
      variable: "Variable por objetivos: crecimiento ≥2M€/año + bono anual por calidad y volumen",
      condiciones: "≥3M€ AUM inicial, máx. 100 clientes o 20M€, control y reporting",
      highlight: "bg-violet-50 border-l-4 border-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-gray-800 scroll-smooth overflow-x-hidden">
      {/* Header con efecto glassmorphism */}
      <header className="fixed w-full top-0 z-40 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
              1CLICK
            </div>
            
            <ul className="hidden md:flex space-x-8">
              {[
                { id: 'inicio', label: 'Inicio', icon: Target },
                { id: 'perfiles', label: 'Perfiles', icon: Users },
                { id: 'resumen', label: 'Resumen', icon: BarChart3 },
                { id: 'complementos', label: 'Complementos', icon: Zap }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white/20 ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <IconComponent size={16} className="transition-transform group-hover:scale-110" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            
            <button
              className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu con animación mejorada */}
          <div className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
              <ul className="space-y-2">
                {[
                  { id: 'inicio', label: 'Inicio', icon: Target },
                  { id: 'perfiles', label: 'Perfiles', icon: Users },
                  { id: 'resumen', label: 'Resumen', icon: BarChart3 },
                  { id: 'complementos', label: 'Complementos', icon: Zap }
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 text-gray-700"
                      >
                        <IconComponent size={18} />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section con parallax y partículas */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A94F7] via-[#0C54AA] to-[#6366f1] text-white overflow-hidden">
        {/* Partículas animadas */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Formas geométricas flotantes */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-lg rotate-45 animate-bounce" />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-300 rounded-full animate-ping" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <Star className="text-yellow-300" size={20} />
              <span className="text-sm font-medium">Sistema de Incentivos Premium</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Plan de Incentivos{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
              "1CLICK"
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Sistema de incentivos <span className="font-semibold text-yellow-300">justo</span>, 
            <span className="font-semibold text-pink-300"> escalable</span> y 
            <span className="font-semibold text-blue-300"> motivador</span> que premia la recomendación, 
            gestión activa y compromiso con resultados
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('perfiles')}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Eye size={20} className="transition-transform group-hover:scale-110" />
              Descubre los Perfiles
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
              </div>
              <span className="font-medium">Ver Demo</span>
            </button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Perfiles Section con cards interactivas */}
      <section id="perfiles" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4 font-medium">
              <Award size={16} />
              Perfiles Especializados
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0C54AA] to-[#1A94F7] bg-clip-text text-transparent mb-6">
              Perfiles de Incentivos
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cuatro categorías diseñadas para impulsar la captación y fidelización de clientes de alto valor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => {
              const IconComponent = profile.icon;
              return (
                <div
                  key={profile.title}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card principal */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100 hover:border-transparent overflow-hidden">
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Borde superior gradiente */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${profile.gradient} rounded-t-3xl`} />
                    
                    {/* Icono con animación */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${profile.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="text-white" size={32} />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Contenido */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-[#0C54AA] group-hover:text-[#1A94F7] transition-colors duration-300">
                          {profile.title}
                        </h3>
                        <div className="flex gap-2">
                          <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                            {profile.stats.clients}
                          </div>
                          <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                            {profile.stats.conversion}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {profile.description}
                      </p>
                      
                      {/* Incentivos con animación */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-100">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <Star className="text-yellow-500" size={16} />
                          Incentivos
                        </h4>
                        {profile.incentives.map((incentive, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center mb-3 last:mb-0 group/item hover:bg-white/50 rounded-lg p-2 transition-all duration-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                            <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                              {incentive}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Condiciones */}
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 rounded-lg p-4">
                        <h4 className="text-orange-600 font-semibold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                          <Target size={14} />
                          Condiciones
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {profile.conditions}
                        </p>
                      </div>
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                        Más información
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resumen Section con tabla interactiva */}
      <section id="resumen" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 rounded-full px-4 py-2 mb-4 font-medium">
              <BarChart3 size={16} />
              Análisis Completo
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0C54AA] to-[#1A94F7] bg-clip-text text-transparent mb-6">
              Resumen Ejecutivo
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comparativa detallada de todos los perfiles del plan de incentivos
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1A94F7] to-[#0C54AA] text-white">
                    {['Perfil', 'Rol/Acción', 'Incentivo Fijo', 'Incentivo Variable', 'Condiciones Clave'].map((header, index) => (
                      <th
                        key={header}
                        className={`px-6 py-4 text-left font-semibold ${
                          index === 0 ? 'rounded-tl-3xl' : ''
                        } ${index === 4 ? 'rounded-tr-3xl' : ''}`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={row.perfil}
                      className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group ${row.highlight}`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#0C54AA] group-hover:scale-105 transition-transform duration-300">
                          {row.perfil}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {row.rol}
                      </td>
                      <td className="px-6 py-4 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {row.fijo}
                      </td>
                      <td className="px-6 py-4 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {row.variable}
                      </td>
                      <td className="px-6 py-4 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {row.condiciones}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Complementos Section con cards flotantes */}
      <section id="complementos" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 rounded-full px-4 py-2 mb-4 font-medium">
              <Zap size={16} />
              Funcionalidades Extra
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0C54AA] to-[#1A94F7] bg-clip-text text-transparent mb-6">
              Complementos y Opcionales
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elementos adicionales que potencian el plan de incentivos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complementos.map((complemento, index) => {
              const IconComponent = complemento.icon;
              return (
                <div
                  key={complemento.title}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`relative bg-gradient-to-br ${complemento.color} text-white rounded-3xl p-8 text-center transition-all duration-700 hover:scale-105 hover:rotate-2 shadow-xl hover:shadow-2xl overflow-hidden`}>
                    {/* Efecto de partículas */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Icono con efecto */}
                    <div className="relative w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <IconComponent size={36} className="group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                      {complemento.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {complemento.description}
                    </p>

                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer mejorado */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              1CLICK
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Sistema diseñado para maximizar resultados y crear relaciones duraderas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h4 className="font-semibold mb-2">Comunidad</h4>
              <p className="text-gray-400 text-sm">Únete a nuestra red de profesionales</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h4 className="font-semibold mb-2">Excelencia</h4>
              <p className="text-gray-400 text-sm">Estándares de calidad superiores</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-semibold mb-2">Crecimiento</h4>
              <p className="text-gray-400 text-sm">Resultados medibles y sostenibles</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Plan de Incentivos 1CLICK. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;