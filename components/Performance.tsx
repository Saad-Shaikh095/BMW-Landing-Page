
import React from 'react';

const Performance: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="https://i.pinimg.com/1200x/15/c4/80/15c48007ddd23ae806b2467c991e7f61.jpg" 
                alt="M8 Track Performance" 
                className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl md:text-6xl font-black mb-8 italic-speed tracking-tighter">
              BORN ON THE <span className="text-red-600 underline decoration-4 underline-offset-8">LIMIT.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              The M8 is not just a car; it's a precision instrument. Every component is optimized for maximum feedback and relentless speed. Experience the 4.4L V8 that defines the segment.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Track Mode', desc: 'Disables all driver assistance for pure, raw control.' },
                { title: 'M xDrive', desc: 'Switch from intelligent AWD to pure 100% RWD.' },
                { title: 'Carbon Ceramic', desc: 'Unfading stopping power in the most extreme conditions.' }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6 items-start p-6 glass-effect border-l-2 border-blue-500 hover:bg-white/5 transition-all">
                  <div className="text-blue-500 font-black text-2xl">0{i+1}</div>
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
