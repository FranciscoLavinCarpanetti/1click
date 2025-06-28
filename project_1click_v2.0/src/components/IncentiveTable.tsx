import React from 'react';
import { FileText, Eye } from 'lucide-react';

const IncentiveTable: React.FC = () => {
  const tableData = [
    {
      perfil: "Recomendador",
      rol: "Refiere nuevos clientes o productos",
      fijo: "€1.000 por cliente/producto",
      variable: "10-20% de comisiones de apertura",
      condiciones: "Cliente activo ≥6 meses, no cartera previa"
    },
    {
      perfil: "Colaborador",
      rol: "Comercial externo continuado",
      fijo: "No aplica",
      variable: "20-40% de comisiones + bonus por volumen",
      condiciones: "Acuerdo marco, cumplimiento KYC/AML"
    },
    {
      perfil: "Vinculado",
      rol: "Gestor con relación continua",
      fijo: "No aplica",
      variable: "5-15% del margen neto (comisiones + AUM)",
      condiciones: "Seguimiento, fidelización, plan de cliente"
    },
    {
      perfil: "Contratado",
      rol: "Empleado interno",
      fijo: "Salario fijo competitivo",
      variable: "Variable por objetivos + bono anual",
      condiciones: "≥3M€ AUM inicial, máx. 100 clientes o 20M€"
    }
  ];

  return (
    <section id="tabla-resumen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-primary-blue to-dark-blue rounded-full p-4">
              <FileText size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
            Resumen del Plan de Incentivos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-dark-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparativa detallada de todos los perfiles disponibles
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-scale-in">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-dark-blue to-primary-blue text-white">
                  <th className="px-6 py-6 text-left font-semibold text-lg">Perfil</th>
                  <th className="px-6 py-6 text-left font-semibold text-lg">Rol/Acción</th>
                  <th className="px-6 py-6 text-left font-semibold text-lg">Incentivo Fijo</th>
                  <th className="px-6 py-6 text-left font-semibold text-lg">Incentivo Variable</th>
                  <th className="px-6 py-6 text-left font-semibold text-lg">Condiciones Clave</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-300 border-b border-gray-100 last:border-b-0`}
                  >
                    <td className="px-6 py-6">
                      <span className="font-semibold text-dark-blue text-lg">{row.perfil}</span>
                    </td>
                    <td className="px-6 py-6 text-gray-700">{row.rol}</td>
                    <td className="px-6 py-6">
                      <span className={`font-semibold ${row.fijo.includes('No aplica') ? 'text-gray-400' : 'text-lime-green'}`}>
                        {row.fijo}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className="font-semibold text-primary-blue">{row.variable}</span>
                    </td>
                    <td className="px-6 py-6 text-gray-600 text-sm">{row.condiciones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6 p-6">
            {tableData.map((row, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-primary-blue to-dark-blue rounded-full p-2 mr-3">
                    <Eye size={16} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue">{row.perfil}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Rol/Acción</p>
                    <p className="text-gray-700">{row.rol}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Incentivo Fijo</p>
                      <p className={`font-semibold ${row.fijo.includes('No aplica') ? 'text-gray-400' : 'text-lime-green'}`}>
                        {row.fijo}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Incentivo Variable</p>
                      <p className="font-semibold text-primary-blue">{row.variable}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Condiciones Clave</p>
                    <p className="text-gray-600 text-sm">{row.condiciones}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncentiveTable;