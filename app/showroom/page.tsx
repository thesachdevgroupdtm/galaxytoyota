
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../../lib/inventory';
import { ChevronRight, Filter, Zap, Search, ArrowRight } from 'lucide-react';

export const Showroom: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const tabs = ['All', 'SUV', 'MPV', 'Sedan', 'Hatchback', 'Pickup', 'Luxury'];

  const filteredVehicles = VEHICLES.filter(v => activeTab === 'All' || v.type === activeTab);

  return (
    <div className="w-full pt-44 min-h-screen bg-toyota-lightGrey pb-32">
      <div className="container-xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-toyota-red"></div>
              <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-[10px]">Official Fleet</h4>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-4 leading-none">
              THE <span className="text-toyota-red">SHOWROOM</span>
            </h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs pl-2">Complete 2024 Toyota India Lineup - Authorised Galaxy Inventory</p>
          </div>
          
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto">
            {tabs.map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 font-black uppercase text-[10px] tracking-[0.2em] transition-all border-2 ${activeTab === tab ? 'bg-toyota-red text-white border-toyota-red shadow-xl' : 'bg-white text-toyota-black border-transparent hover:border-gray-200'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredVehicles.map((car, idx) => (
            <div key={car.id} className="group bg-white relative overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="h-72 overflow-hidden p-12 flex items-center justify-center bg-white relative">
                <img src={car.mainImage} alt={car.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest text-gray-300">Certified Toyota</div>
              </div>
              <div className="p-12 flex-grow flex flex-col border-t border-gray-50">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-toyota-red mb-3">{car.type} Series</div>
                <h3 className="text-4xl font-display font-black uppercase text-toyota-black mb-8 tracking-tight">{car.name}</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-10 border-y border-gray-50 py-8">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Ex-Showroom</div>
                    <div className="text-lg font-extrabold text-toyota-black leading-none">{car.priceRange.split(' ')[1]} {car.priceRange.split(' ')[2]}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Fuel Efficiency</div>
                    <div className="text-lg font-extrabold text-toyota-black flex items-center gap-2 leading-none">
                      <Zap size={16} className="text-toyota-red"/> {car.mileage}
                    </div>
                  </div>
                </div>
                
                <Link to={`/vehicle/${car.id}`} className="mt-auto flex items-center justify-center gap-4 w-full text-center bg-toyota-black text-white py-5 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-toyota-red transition-all group-button">
                  View Detail Specs <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform"/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
