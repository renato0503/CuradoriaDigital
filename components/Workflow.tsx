import React, { useEffect, useState } from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { CheckCircle2, Circle, Clock, Loader2 } from 'lucide-react';

const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Simulate the immediate progression to step 1 (Received) upon mounting
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep(1); // Move to "Received" state essentially immediately/shortly
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Acompanhamento do Pedido</h2>
          <p className="text-slate-600">
            Acompanhe o status da sua solicitação em tempo real.
          </p>
        </div>

        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          
          {WORKFLOW_STEPS.map((step, index) => {
            // Logic for visual state
            const isCompleted = index < activeStep;
            const isCurrent = index === activeStep;
            const isPending = index > activeStep;

            return (
              <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8 md:mb-12 last:mb-0">
                
                {/* Icon Wrapper */}
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 bg-white
                  ${isCompleted ? 'border-emerald-500 text-emerald-500' : ''}
                  ${isCurrent ? 'border-blue-600 text-blue-600 animate-pulse' : ''}
                  ${isPending ? 'border-slate-300 text-slate-300' : ''}
                `}>
                  {isCompleted && <CheckCircle2 size={20} />}
                  {isCurrent && <Loader2 size={20} className="animate-spin" />}
                  {isPending && <Circle size={20} />}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border bg-white shadow-sm transition-all duration-500 hover:shadow-md">
                   <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isCurrent ? 'text-blue-600' : 'text-slate-500'}`}>
                        Passo 0{step.id}
                      </span>
                      {isCurrent && (
                         <span className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            <Clock size={12} /> Em andamento
                         </span>
                      )}
                   </div>
                   <h3 className={`text-lg font-bold mb-2 ${isPending ? 'text-slate-400' : 'text-slate-900'}`}>
                     {step.title}
                   </h3>
                   <p className={`text-sm ${isPending ? 'text-slate-400' : 'text-slate-600'}`}>
                     {step.description}
                   </p>
                   {!isPending && (
                     <div className="mt-3 text-xs text-slate-500 border-t border-slate-100 pt-2">
                       Previsão: {step.duration}
                     </div>
                   )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;