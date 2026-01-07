
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const NextSteps: React.FC = () => {
  const steps = [
    "Entrar no Grupo VIP do encontro",
    "Receber o link do workshop ao vivo",
    "Receber lembretes e orientações importantes",
    "Garantir acesso a todas as informações do evento"
  ];

  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-8 md:py-12">
      <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl p-8 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 text-center md:text-left flex items-center gap-2">
          <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">📌</span>
          O que você precisa fazer agora:
        </h3>
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#D48C70]" />
              </div>
              <p className="text-slate-700 text-[15px] md:text-base font-medium transition-colors group-hover:text-rose-900">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-rose-100/50">
          <p className="text-center text-slate-600 text-[15px] leading-relaxed italic">
            "Todas as comunicações oficiais do workshop acontecem exclusivamente pelo <span className="text-rose-700 font-semibold">Grupo VIP</span>."
          </p>
        </div>
      </div>
    </section>
  );
};
