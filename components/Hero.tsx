import React from 'react';
import { ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-slate-900 text-white min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <div className="bg-slate-800/50 p-4 rounded-full border border-slate-700 backdrop-blur-sm">
            <ShieldCheck size={64} className="text-blue-400" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Curadoria Digital
          <span className="block text-blue-400 mt-2 text-2xl md:text-4xl font-normal">
            Sua Plataforma de Confiança e Segurança na Web
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Navegue sem medo. Nós verificamos, autenticamos e analisamos links, leilões e arquivos para você não cair em golpes.
        </p>

        <div className="pt-8">
          <button
            onClick={onCtaClick}
            className="group bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
          >
            Solicitar Curadoria
            <ChevronDown className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;