
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VEHICLES } from '../lib/inventory';
import { Container } from '../components/ui/Container';
import { 
  ShieldCheck, Zap, Gauge, ArrowRight, Eye, 
  ChevronRight, X, ChevronLeft, Layout, Car, 
  Settings, Shield, Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = VEHICLES.find(v => v.id === id);
  const [activeTab, setActiveTab] = useState<'overview' | 'interior' | 'exterior' | 'performance' | 'safety'>('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) return (
    <div className="pt-40 text-center font-display font-black min-h-screen">
      <h2 className="text-4xl uppercase">Model Not Found</h2>
      <Link to="/showroom" className="mt-8 inline-block text-toyota-red border-b-2 border-toyota-red">Back to Showroom</Link>
    </div>
  );

  const openLeadPopup = () => {
    window.dispatchEvent(new CustomEvent('open-lead-popup'));
  };

  const tabData = [
    { id: 'overview', label: 'Overview', icon: <Eye size={18}/>, content: car.longDescription, image: car.mainImage },
    { id: 'interior', label: 'Interior', icon: <Layout size={18}/>, content: car.interiorDescription, image: car.interiorImage },
    { id: 'exterior', label: 'Exterior', icon: <Car size={18}/>, content: car.exteriorDescription, image: car.exteriorImage },
    { id: 'performance', label: 'Performance', icon: <Settings size={18}/>, content: car.performanceDescription, image: car.mainImage },
    { id: 'safety', label: 'Safety', icon: <Shield size={18}/>, content: car.safetyDescription, image: car.safetyImage || car.mainImage },
  ];

  return (
    <div className="w-full">
      {/* 1. PREMIUM HERO - MODEL SPECIFIC */}
      <section className="relative h-[90vh] bg-black overflow-hidden flex items-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={car.bannerImage || car.mainImage} 
            className="w-full h-full object-cover" 
            alt={car.name} 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <Container className="relative z-10 text-white">
          <div className="max-w-4xl space-y-8">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-toyota-red"></div>
              <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Official {car.type} Series
              </h4>
            </motion.div>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-[120px] font-display font-black uppercase tracking-tighter leading-[0.8] mb-4"
            >
              {car.name}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-light text-gray-200 max-w-2xl leading-relaxed"
            >
              {car.tagline}. Starting from <span className="text-white font-bold">{car.priceRange.split('-')[0]}*</span>
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-10"
            >
              <Link to="/book-test-drive" className="bg-toyota-red text-white px-12 py-6 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                Book Test Drive
              </Link>
              <button 
                onClick={openLeadPopup}
                className="bg-white/10 backdrop-blur-lg border border-white/20 px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
              >
                Request Custom Quote
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. SPECIFICATION STRIP */}
      <div className="bg-white border-y border-gray-100 sticky top-[70px] z-40 shadow-sm overflow-x-auto no-scrollbar">
        <Container className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 min-w-[600px]">
          {[
            { label: 'Max Power', val: car.horsepower, icon: <Gauge size={24}/> },
            { label: 'Efficiency', val: car.mileage, icon: <Zap size={24}/> },
            { label: 'Max Torque', val: car.torque, icon: <ArrowRight size={24}/> },
            { label: 'Capacity', val: `${car.seatingCapacity} Adults`, icon: <Users size={24}/> },
          ].map((s, i) => (
            <div key={i} className="py-10 text-center px-4 hover:bg-gray-50 transition-colors cursor-default group">
              <div className="flex justify-center text-toyota-red mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <div className="text-3xl font-display font-black tracking-tight text-black">{s.val}</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-gray-400 mt-2">{s.label}</div>
            </div>
          ))}
        </Container>
      </div>

      {/* 3. RICH CONTENT EXPANSION */}
      <section className="py-24 md:py-40 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center mb-32 md:mb-48">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-toyota-red" />
                <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px]">Elegance Redefined</h4>
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
                DESIGN & <br/> <span className="text-toyota-red">STYLING</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed">
                <p>{car.exteriorDescription}</p>
                <p className="mt-6">Every curve and contour of the {car.name} is designed with a singular purpose: to command attention while optimizing aerodynamic efficiency.</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img src={car.exteriorImage} alt="Exterior Design" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center mb-32 md:mb-48 lg:flex-row-reverse">
             <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl lg:order-2">
              <img src={car.interiorImage} alt="Interior Comfort" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-10 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-toyota-red" />
                <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px]">Pure Comfort</h4>
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
                INTERIOR <br/> <span className="text-toyota-red">CRAFTSMANSHIP</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed">
                <p>{car.interiorDescription}</p>
              </div>
              <ul className="grid grid-cols-1 gap-4 pt-10">
                {car.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-black">
                    <ShieldCheck size={18} className="text-toyota-red"/> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. VARIANTS & PRICING */}
      <section className="py-24 md:py-40 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-10 text-center leading-none">
              VARIANTS & <span className="text-toyota-red">PRICING</span>
            </h2>
            <div className="overflow-x-auto shadow-2xl rounded-sm bg-white overflow-hidden border-t-8 border-black">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-black text-white uppercase text-[11px] font-black tracking-widest">
                    <th className="p-10 text-left">Trim Level</th>
                    <th className="p-10 text-left">Powertrain</th>
                    <th className="p-10 text-right">Ex-Showroom*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {car.variants.map((v, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-all text-sm font-bold text-gray-700 group">
                      <td className="p-10">
                        <span className="text-black uppercase font-black text-2xl block group-hover:text-toyota-red transition-colors">{v.name}</span>
                      </td>
                      <td className="p-10 uppercase text-[11px] tracking-widest text-gray-500 font-black">
                        {v.engine} <br/> <span className="text-toyota-red mt-2 block">{v.transmission}</span>
                      </td>
                      <td className="p-10 text-right">
                        <div className="font-display text-5xl font-black text-black tracking-tighter">{v.price}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-black py-32 md:py-48 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-toyota-red/5 skew-x-[-15deg] -translate-x-20" />
        <Container className="relative z-10 text-center max-w-5xl">
           <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-[10px] mb-10">Your Journey Starts Here</h4>
           <h2 className="text-6xl md:text-[110px] font-display font-black uppercase mb-12 tracking-tighter leading-none">
             READY TO <br/> <span className="text-toyota-red">DRIVE?</span>
           </h2>
           <div className="flex flex-col md:flex-row gap-8 justify-center">
             <Link to="/book-test-drive" className="bg-white text-black px-20 py-7 font-black uppercase tracking-widest text-xs hover:bg-toyota-red hover:text-white transition-all shadow-2xl">
               Schedule Test Drive
             </Link>
             <button onClick={openLeadPopup} className="border-2 border-white text-white px-20 py-7 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
               Enquire Now
             </button>
           </div>
        </Container>
      </section>
    </div>
  );
};
