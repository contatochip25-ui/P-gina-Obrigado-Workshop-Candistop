
import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const SecurityInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100/50 px-6 py-3 rounded-2xl">
        <Lock className="w-4 h-4 text-rose-400" />
        <p className="text-[13px] md:text-sm text-rose-800/80 font-medium tracking-tight">
          Ambiente 100% seguro, discreto e sigiloso.
        </p>
      </div>
      <p className="mt-2 text-[11px] md:text-xs text-slate-400 max-w-xs text-center leading-relaxed">
        O grupo é fechado e apenas participantes confirmadas terão acesso.
      </p>
    </div>
  );
};
