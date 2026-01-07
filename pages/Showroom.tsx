
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../lib/inventory';
import { Zap, ArrowRight, Fuel, Gauge, Settings } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { motion } from 'framer-motion';

export const Showroom: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const tabs = ['All', 'SUV', 'MPV', 'Sedan', 'Hatchback', 'Pickup', 'Luxury'];

  const filteredVehicles = VEHICLES.filter(v => activeTab === 'All' || v.type === activeTab);

  return (
    <div className="w-full pt-44 min-h-screen bg-toyota-lightGrey pb-32">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 px-4 md:px-0">
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
          
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto no-scrollbar">
            {tabs.map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 font-black uppercase text-[10px] tracking-[0.2em] transition-all border-2 whitespace-nowrap ${activeTab === tab ? 'bg-toyota-red text-white border-toyota-red shadow-xl' : 'bg-white text-toyota-black border-transparent hover:border-gray-200'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Grid / Mobile: Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
          {filteredVehicles.map((car, idx) => (
            <motion.div 
              key={car.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[85vw] md:min-w-0 snap-center group bg-white relative overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 overflow-hidden p-12 flex items-center justify-center bg-white relative">
                <img src={car.mainImage} alt={car.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest text-gray-300">Authorised Toyota</div>
                <div className="absolute top-6 left-6 px-3 py-1 bg-toyota-lightGrey text-[9px] font-black uppercase tracking-widest text-toyota-red">
                  {car.type}
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col border-t border-gray-50">
                <h3 className="text-4xl font-display font-black uppercase text-toyota-black mb-4 tracking-tight group-hover:text-toyota-red transition-colors">{car.name}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-8 leading-relaxed h-12 overflow-hidden">{car.description}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-10 border-y border-gray-50 py-8">
                  <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Fuel size={10}/> Fuel Type</div>
                    <div className="text-sm font-extrabold text-toyota-black">{car.fuelType}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Zap size={10}/> Mileage</div>
                    <div className="text-sm font-extrabold text-toyota-black">{car.mileage}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Gauge size={10}/> Power</div>
                    <div className="text-sm font-extrabold text-toyota-black">{car.horsepower}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Settings size={10}/> Range From</div>
                    <div className="text-sm font-extrabold text-toyota-red">{car.priceRange.split(' ')[1]} {car.priceRange.split(' ')[2]}</div>
                  </div>
                </div>

                <div className="mb-10">
                   <div className="text-[9px] font-black uppercase tracking-widest text-gray-300 mb-3">Available Variants</div>
                   <div className="flex flex-wrap gap-2">
                     {car.variants.map((v, i) => (
                       <span key={i} className="px-3 py-1 bg-toyota-lightGrey text-[8px] font-black uppercase tracking-widest text-gray-500">{v.name.split(' ').pop()}</span>
                     ))}
                   </div>
                </div>
                
                <Link to={`/vehicle/${car.id}`} className="mt-auto flex items-center justify-center gap-4 w-full text-center bg-toyota-black text-white py-5 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-toyota-red transition-all">
                  Explore Model <ArrowRight size={14}/>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="mt-12 md:hidden flex justify-center items-center gap-3">
           <div className="w-12 h-1 bg-toyota-red/20 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: [-20, 40] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-4 h-full bg-toyota-red"
              />
           </div>
           <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Swipe to Explore</span>
        </div>
      </Container>
    </div>
  );
};
