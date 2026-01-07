
import React from 'react';
import { AlertBar } from './components/AlertBar';
import { NextSteps } from './components/NextSteps';
import { CtaButton } from './components/CtaButton';
import { SecurityInfo } from './components/SecurityInfo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-24 pb-12 overflow-x-hidden">
      <AlertBar />

      <main className="flex-grow">
        {/* Hero / Confirmation Section */}
        <section className="max-w-3xl mx-auto px-6 pt-8 text-center animate-entrance">
          <div className="mb-6 inline-block bg-white p-4 rounded-full shadow-soft-rose">
             <span className="text-4xl">🌸</span>
          </div>
          
          <h1 className="serif-font text-3xl md:text-5xl font-bold text-rose-900 mb-4 leading-tight">
            Obrigada por garantir sua vaga 💗
          </h1>
          
          <h2 className="text-lg md:text-xl font-medium text-slate-600 mb-6 max-w-xl mx-auto">
            Sua inscrição no <span className="text-rose-700 font-semibold">Workshop Saúde Íntima Feminina</span> foi confirmada com sucesso.
          </h2>
          
          <p className="text-slate-500 text-[15px] md:text-lg leading-relaxed max-w-lg mx-auto mb-10">
            Você deu um passo importante para entender melhor o que está acontecendo com seu corpo e sair do ciclo de dúvidas e insegurança.
          </p>

          {/* First Button for Mobile (High visibility) */}
          <div className="md:hidden mb-8">
            <CtaButton />
          </div>
        </section>

        {/* Steps and Content */}
        <NextSteps />

        {/* Security and Final CTA */}
        <section className="max-w-3xl mx-auto px-6 pb-12 space-y-8">
          <SecurityInfo />
          
          <div className="pt-4">
            <CtaButton />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-12 text-center border-t border-rose-100/30">
        <div className="px-6 space-y-2 opacity-50">
          <p className="text-[13px] text-slate-400 font-medium">
            Workshop Saúde Íntima Feminina &copy; 2026
          </p>
          <p className="text-[11px] text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <span>Conteúdo educativo</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Ambiente seguro</span>
          </p>
        </div>
      </footer>

      {/* Modern Premium Animations 2026 */}
      <style>{`
        .shadow-soft-rose {
          box-shadow: 0 10px 25px -5px rgba(225, 175, 175, 0.2);
        }

        /* 1. Entrada (Load) */
        @keyframes entrance {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-entrance {
          animation: entrance 400ms ease-out forwards;
        }

        /* 2. Pulso de Respiração (Idle Continuous) */
        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 20px -5px rgba(40, 167, 69, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 12px 25px -2px rgba(40, 167, 69, 0.45);
          }
        }
        .animate-breathing-pulse {
          animation: breathing 3s ease-in-out infinite;
        }

        /* 3. Brilho Sweep (Shine) */
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .animate-shine {
          animation: shine 800ms ease-out forwards;
        }

        /* 4. Brilho Automático Suave (Para mobile, sem hover) */
        .animate-shine-auto {
          animation: shine 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default App;
