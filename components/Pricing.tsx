import React from 'react';
import { PRICING, AUDIENCE } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Investimento em Segurança</h2>
          <p className="text-slate-600">Quanto vale a sua paz de espírito?</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-8 bg-white border ${tier.highlight ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-all`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Recomendado
                </div>
              )}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{tier.title}</h3>
              <div className="text-4xl font-bold text-slate-900 mb-6">{tier.price}</div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                    <Check size={16} className="text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="border-t border-slate-200 pt-16">
          <h3 className="text-center text-xl font-semibold text-slate-900 mb-10">Quem Protegemos</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {AUDIENCE.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <div className="p-4 bg-white rounded-full shadow-sm border border-slate-100">
                  <item.icon size={28} />
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;