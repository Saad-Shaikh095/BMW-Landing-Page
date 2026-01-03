
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Gallery from './components/Gallery';
import ChatBot from './components/ChatBot';
import Performance from './components/Performance';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Specs Section with Skew effect */}
      <div className="skew-section bg-zinc-950 pb-20 pt-32">
        <div className="skew-content">
          <Specs />
        </div>
      </div>
      
      <Performance />
      
      {/* Dynamic Mid-Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            <img 
              src="https://i.pinimg.com/1200x/cd/3e/6d/cd3e6d91b959f55335dcbda0f85e8271.jpg" 
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl filter contrast-125"
              alt="M8 Stance"
            />
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 className="text-4xl font-black mb-4 italic">COMMAND THE ROAD.</h3>
              <p className="text-gray-300 max-w-2xl text-lg">
                Adaptive M Suspension and Active M Differential ensure that every ounce of power reaches the tarmac with surgical precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Call to Action Section */}
      <section className="py-32 bg-zinc-950 border-y border-white/5 relative">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap -rotate-12 translate-y-1/2">
            M COMPETITION M COMPETITION
          </div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter">LEAVE NO DOUBT.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-xl">
            The BMW M8 Competition is waiting for those who refuse to compromise. Step into the future of high-performance luxury.
          </p>
          <button className="px-12 py-6 bg-blue-600 text-white font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(37,99,235,0.4)]">
            Book Your Test Flight
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-4xl font-black tracking-tighter mb-8 italic flex items-center">
                <span className="text-white">BMW</span>
                <span className="mx-2 text-gray-700">/</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600">M8</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 text-lg leading-relaxed">
                Innovation, Precision, and Adrenaline. Experience the world of M Power.
              </p>
              <div className="flex space-x-6">
                {['FB', 'TW', 'IG', 'YT'].map(social => (
                  <a key={social} href="#" className="text-gray-600 hover:text-blue-500 font-black tracking-tighter transition-colors">{social}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-white">The Range</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-500 transition-colors">M8 Competition Coupe</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">M8 Competition Convertible</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">M8 Competition Gran Coupe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-white">Experience</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-500 transition-colors">M Driving School</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">BMW Individual</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Track Events</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
            <p>&copy; 2024 BMW OF NORTH AMERICA, LLC. THE BMW NAME, MODEL NAMES AND LOGO ARE REGISTERED TRADEMARKS.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Safety</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
