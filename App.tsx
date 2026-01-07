
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
        <section className="max-w-3xl mx-auto px-6 pt-8 text-center">
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

      {/* Styles for soft pink shadows and background animations */}
      <style>{`
        .shadow-soft-rose {
          box-shadow: 0 10px 25px -5px rgba(225, 175, 175, 0.2);
        }
        @keyframes subtle-float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default App;
