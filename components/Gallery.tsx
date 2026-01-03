
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Exterior' | 'Interior' | 'Action'>('All');

  const filteredItems = activeTab === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Precision Aesthetic.</h2>
            <p className="text-gray-400 max-w-lg">Every line, every curve serves a purpose. The M8 Competition is as much a work of art as it is a masterclass in engineering.</p>
          </div>
          <div className="flex space-x-6 mt-8 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto">
            {['All', 'Exterior', 'Interior', 'Action'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`text-sm uppercase tracking-widest whitespace-nowrap transition-all ${
                  activeTab === tab ? 'text-white border-b-2 border-blue-500 pb-1' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-video cursor-pointer bg-zinc-900">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold uppercase tracking-widest text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
