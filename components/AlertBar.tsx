
import React from 'react';
import { AlertCircle } from 'lucide-react';

export const AlertBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#F5E6E0] border-b border-rose-200 shadow-sm py-3 px-4 md:px-6">
      <div className="max-w-4xl mx-auto flex items-start gap-3 sm:items-center">
        <AlertCircle className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-[13px] md:text-sm leading-relaxed text-rose-900 font-medium">
          <span className="font-bold">⚠️ ATENÇÃO:</span> Esta página não será exibida novamente. 
          Para receber o link do encontro ao vivo e todas as orientações importantes, é essencial entrar no Grupo VIP agora.
        </p>
      </div>
    </div>
  );
};
