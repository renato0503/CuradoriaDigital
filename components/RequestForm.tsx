import React, { useState } from 'react';
import { Send, Lock } from 'lucide-react';

interface RequestFormProps {
  onSubmit: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'link',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send data to backend here
    onSubmit();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 p-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Solicite Sua Curadoria Agora</h2>
        <p className="text-slate-400 text-sm">Preencha os dados abaixo para iniciar a análise de segurança.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail para Contato</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Tipo de Curadoria</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50"
          >
            <option value="link">Link / URL Suspeita</option>
            <option value="auction">Site de Leilão / E-commerce</option>
            <option value="software">Software / Download de Arquivo</option>
            <option value="other">Outros / Investigação Geral</option>
          </select>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">Ativo a ser Verificado</label>
          <textarea
            id="details"
            name="details"
            required
            rows={4}
            value={formData.details}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-slate-50"
            placeholder="Cole o link aqui, nome do software ou detalhes do leilão..."
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Enviar Pedido e Iniciar
          </button>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
            <Lock size={12} />
            <span>Seus dados são processados com sigilo absoluto.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;