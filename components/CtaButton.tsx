
import React from 'react';
import { Users } from 'lucide-react';

interface CtaButtonProps {
  className?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ className }) => {
  const handleJoinGroup = () => {
    window.open('https://chat.whatsapp.com/KzSI4Ew6LUGCVAcbANZyFm', '_blank');
  };

  return (
    <div className={`flex flex-col items-center w-full max-w-md mx-auto ${className}`}>
      <button
        onClick={handleJoinGroup}
        className="
          group relative w-full bg-[#28a745] hover:bg-[#218838] text-white font-bold py-5 px-8 rounded-full 
          shadow-[0_8px_20px_-5px_rgba(40,167,69,0.4)]
          transform transition-all duration-300 ease-out
          hover:-translate-y-[2px] hover:scale-[1.03] active:scale-[0.96]
          flex items-center justify-center gap-3 overflow-hidden
          animate-entrance animate-breathing-pulse
          cursor-pointer select-none touch-manipulation
        "
        style={{ animationDelay: '150ms', animationFillMode: 'both' }}
      >
        {/* Camada de brilho sweep (horizontal) */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></span>
        
        {/* Camada de brilho contínua automática (mobile focus) */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine-auto pointer-events-none"></span>

        <Users className="w-6 h-6 flex-shrink-0" />
        <span className="text-lg tracking-wide uppercase whitespace-nowrap">Entrar no Grupo VIP Agora</span>
      </button>
      <p className="mt-4 text-xs md:text-sm text-slate-500 text-center font-medium opacity-80 leading-snug">
        Você receberá o link do encontro ao vivo e todas as instruções por lá.
      </p>
    </div>
  );
};
