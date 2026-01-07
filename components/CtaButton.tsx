
import React from 'react';
import { Users } from 'lucide-react';

interface CtaButtonProps {
  className?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ className }) => {
  const handleJoinGroup = () => {
    // Replace with actual group link
    window.open('https://chat.whatsapp.com/example', '_blank');
  };

  return (
    <div className={`flex flex-col items-center w-full max-w-md mx-auto ${className}`}>
      <button
        onClick={handleJoinGroup}
        className="group relative w-full bg-[#D48C70] hover:bg-[#C27B60] text-white font-bold py-5 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
      >
        {/* Subtle Pulse Animation */}
        <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
        <Users className="w-6 h-6" />
        <span className="text-lg tracking-wide uppercase">Entrar no Grupo VIP Agora</span>
      </button>
      <p className="mt-4 text-xs md:text-sm text-slate-500 text-center font-medium opacity-80 leading-snug">
        Você receberá o link do encontro ao vivo e todas as instruções por lá.
      </p>
    </div>
  );
};
