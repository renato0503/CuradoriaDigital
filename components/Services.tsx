import React from 'react';
import { SERVICES, DIFFERENTIALS } from '../constants';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* The Problem */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-4">
            <AlertTriangle size={16} />
            O Problema que Solucionamos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            A Internet não é um lugar seguro
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Golpes, phishing e fraudes digitais estão cada vez mais sofisticados. 
            Identificar o que é real e o que é armadilha exige conhecimento técnico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Differentials */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Por Que Escolher a Curadoria Digital?</h3>
            <p className="text-slate-400">Não somos apenas um algoritmo. Somos especialistas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIFFERENTIALS.map((diff, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{diff.title}</h4>
                  <p className="text-slate-400 text-sm">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;