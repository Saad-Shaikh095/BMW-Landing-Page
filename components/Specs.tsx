
import React from 'react';
import { SPECS } from '../constants';

const Specs: React.FC = () => {
  return (
    <section id="specs" className="container mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-sm font-black text-blue-500 tracking-[0.5em] uppercase mb-4">Telemetry & Specs</h2>
        <h3 className="text-5xl font-black italic tracking-tighter">ENGINEERED TO DOMINATE.</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SPECS.map((spec, idx) => (
          <div key={idx} className="relative p-10 bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-all group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-6 group-hover:text-blue-400 transition-colors">
              {spec.label}
            </h4>
            <p className="text-6xl font-black mb-6 italic tracking-tighter text-white group-hover:scale-110 transition-transform origin-left duration-500">
              {spec.value}
            </p>
            <p className="text-gray-500 text-xs leading-relaxed uppercase font-bold tracking-wider">
              {spec.description}
            </p>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specs;
