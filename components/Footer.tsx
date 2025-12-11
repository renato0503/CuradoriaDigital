import React from 'react';
import { COMPETITORS } from '../constants';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        
        {/* Brand & Context */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
             <Shield className="text-blue-500" size={32} />
             <span className="text-xl font-bold">Curadoria Digital</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Validamos a segurança da internet para que você confie. 
            Combinamos inteligência artificial e curadoria humana para proteger você de fraudes.
          </p>
        </div>

        {/* Competitors Context */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contexto de Mercado</h4>
          <p className="text-sm mb-4">
            Diferente de ferramentas automatizadas puras como:
          </p>
          <ul className="space-y-2 text-sm">
            {COMPETITORS.map((comp, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                {comp}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500 italic">
            Nós oferecemos a camada humana de interpretação e due diligence que algoritmos isolados não conseguem fornecer.
          </p>
        </div>
      </div>

      {/* Final CTA Strip */}
      <div className="border-t border-slate-800 pt-8 text-center">
        <p className="text-lg font-medium text-white mb-2">Validamos para que Você Confie</p>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Curadoria Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;