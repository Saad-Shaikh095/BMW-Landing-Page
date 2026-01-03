
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=2500" 
          alt="BMW M8 Competition"
          className="w-full h-full object-cover filter brightness-[0.65] contrast-125 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        {/* Speed lines decoration */}
        <div className="speed-line top-1/4 left-10 opacity-20"></div>
        <div className="speed-line top-2/3 left-1/4 opacity-10" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-1 w-16 bg-blue-500 rounded-full"></span>
            <span className="text-blue-500 font-extrabold uppercase tracking-[0.3em] text-xs">M Competition Series</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-4 leading-[0.9] m-text-shadow text-italic-speed">
            UNLEASH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066b1] via-[#00a0e3] to-[#e30613]">ADRENALINE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-medium tracking-tight border-l-4 border-red-600 pl-6 py-2">
            The BMW M8 Competition. A masterclass in savage power and surgical precision. 
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
              Start Configuration
            </button>
            <button className="px-10 py-5 glass-effect text-white font-black uppercase tracking-tighter hover:bg-white/10 transition-all border-white/20">
              Explore Track Modes
            </button>
          </div>
        </div>
      </div>

      {/* Vertical M-Color Bar */}
      <div className="absolute right-0 top-0 bottom-0 w-2 m-gradient opacity-80"></div>

      {/* Hero Stats */}
      <div className="absolute bottom-12 left-6 md:left-12 flex space-x-12 z-20">
        <div className="border-l border-white/20 pl-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Engine</p>
          <p className="text-3xl font-black italic">V8 TWIN-TURBO</p>
        </div>
        <div className="border-l border-white/20 pl-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Launch Control</p>
          <p className="text-3xl font-black italic">3.2S <span className="text-sm font-normal text-gray-400">0-100</span></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
