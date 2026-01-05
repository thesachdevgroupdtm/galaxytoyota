
'use client';

// Fix: Import React to resolve missing React namespace for MouseEvent type
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { VEHICLES } from '@/lib/inventory';
import { Container } from '@/components/ui/Container';
import { 
  ShieldCheck, Zap, Gauge, ArrowRight, Download, Eye, 
  ChevronRight, X, ChevronLeft, Maximize2, Layout, Car, 
  Settings, Shield, Heart, Sparkles, MapPin, Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModelPage({ params }: { params: { id: string } }) {
  const car = VEHICLES.find(v => v.id === params.id);
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'interior' | 'exterior' | 'performance' | 'safety'>('overview');

  if (!car) notFound();

  const openLeadPopup = () => {
    window.dispatchEvent(new CustomEvent('open-lead-popup'));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const galleryCount = car.gallery?.length || 1;
    setActiveImage((prev) => (prev + 1) % galleryCount);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const galleryCount = car.gallery?.length || 1;
    setActiveImage((prev) => (prev - 1 + galleryCount) % galleryCount);
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
          <Image 
            src={car.bannerImage || car.mainImage} 
            fill 
            className="object-cover" 
            alt={car.name} 
            priority 
            quality={100}
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
              <Link href="/book-test-drive" className="bg-toyota-red text-white px-12 py-6 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
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

      {/* 2. SPECIFICATION STRIP (MODERNIZED) */}
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

      {/* 3. RICH CONTENT EXPANSION (DESIGN, PERFORMANCE, TECH) */}
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
                <p className="mt-6">Every curve and contour of the {car.name} is designed with a singular purpose: to command attention while optimizing aerodynamic efficiency. The bold front fascia and distinctive LED lighting signatures reflect Toyota's new global design language, ensuring a timeless road presence that lasts for generations.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-10">
                <div className="p-8 bg-gray-50 border-l-4 border-toyota-red">
                  <h5 className="font-display font-black text-xl mb-2">AERO DYNAMICS</h5>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Reduced Drag Coefficient</p>
                </div>
                <div className="p-8 bg-gray-50 border-l-4 border-toyota-red">
                  <h5 className="font-display font-black text-xl mb-2">PREMIUM FINISH</h5>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Multi-Layer Coating</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <Image src={car.exteriorImage} alt="Exterior Design" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center mb-32 md:mb-48 lg:flex-row-reverse">
             <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl lg:order-2">
              <Image src={car.interiorImage} alt="Interior Comfort" fill className="object-cover" />
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
                <p className="mt-6">Step into a world of uncompromised luxury. The cabin of the {car.name} is a sanctuary of premium materials and ergonomic design. From the soft-touch dashboard to the precision-stitched upholstery, every detail is engineered to provide a first-class experience for all passengers, making every long journey feel effortless.</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-toyota-red" />
                <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px]">Legendary Power</h4>
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
                PERFORMANCE & <br/> <span className="text-toyota-red">EFFICIENCY</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed">
                <p>{car.performanceDescription}</p>
                <p className="mt-6">{car.drivingExperience || "Experience a drive that is as thrilling as it is responsible. The high-performance engine is paired with Toyota's advanced transmission systems to deliver smooth, instantaneous power across the entire RPM range, while maintaining class-leading fuel efficiency."}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-10">
                <div className="flex-1 p-10 bg-black text-white text-center rounded-sm">
                  <div className="text-4xl font-display font-black text-toyota-red mb-2">{car.horsepower}</div>
                  <p className="text-[9px] uppercase tracking-widest font-black opacity-50">Combined Horsepower</p>
                </div>
                <div className="flex-1 p-10 bg-gray-50 text-center rounded-sm border border-gray-100">
                  <div className="text-4xl font-display font-black text-black mb-2">{car.mileage}</div>
                  <p className="text-[9px] uppercase tracking-widest font-black opacity-50">Certified Efficiency</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-12 md:p-20 rounded-sm relative group overflow-hidden">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.5 }}
                 className="relative aspect-video flex items-center justify-center"
               >
                 <Image src={car.mainImage} alt="Performance" fill className="object-contain" />
               </motion.div>
               <div className="absolute bottom-10 right-10 flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-toyota-red"><Zap size={20}/></div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-toyota-red"><Settings size={20}/></div>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. TECH & SAFETY (ENHANCED BULLETS) */}
      <section className="py-24 md:py-40 bg-gray-50 border-y border-gray-100">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="bg-white p-12 md:p-20 shadow-sm border-t-8 border-toyota-red">
                 <h3 className="text-4xl font-display font-black uppercase mb-10 tracking-tight">INTELLIGENT <span className="text-toyota-red">SAFETY</span></h3>
                 <p className="text-gray-500 mb-12 font-medium leading-relaxed">{car.safetyDescription}</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {(car.safetyFeatures || ['SRS Airbags', 'VSC with BA', 'HAC', 'ISOFIX']).map((s, i) => (
                      <div key={i} className="flex items-start gap-4">
                         <Shield className="text-toyota-red shrink-0" size={24} />
                         <div>
                            <h5 className="font-bold uppercase text-sm mb-1">{s}</h5>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Standard</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-black text-white p-12 md:p-20 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-toyota-red opacity-10 blur-3xl" />
                 <h3 className="text-4xl font-display font-black uppercase mb-10 tracking-tight">ADVANCED <span className="text-toyota-red">TECH</span></h3>
                 <p className="text-gray-400 mb-12 font-medium leading-relaxed">{car.techDescription || "The next generation of Toyota connectivity. Control your vehicle remotely, access real-time health reports, and enjoy seamless integration with your digital life through the 10.1-inch Smart Playcast system."}</p>
                 <div className="space-y-8">
                    {[
                      { title: 'i-CONNECT', val: '55+ Connected Features' },
                      { title: 'AUDIO', val: 'Premium JBL 9-Speaker System' },
                      { title: 'DISPLAY', val: '10-inch Head-Up Display (HUD)' },
                    ].map((t, i) => (
                      <div key={i} className="flex justify-between items-end border-b border-white/10 pb-6">
                         <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-toyota-red mb-2">{t.title}</h5>
                            <p className="text-2xl font-display font-black uppercase">{t.val}</p>
                         </div>
                         <ChevronRight className="text-gray-700" />
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </Container>
      </section>

      {/* 5. VARIANTS & PRICING (MODERNIZED) */}
      <section className="py-24 md:py-40 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-10 text-center leading-none">
              VARIANTS & <span className="text-toyota-red">PRICING</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] text-center mb-20">Current On-Road Indications - Delhi NCR Region</p>
            
            <div className="overflow-x-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-sm bg-white overflow-hidden border-t-8 border-black">
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
                        <div className="flex gap-2 mt-4">
                          {v.features.slice(0, 3).map(f => (
                            <span key={f} className="text-[9px] bg-gray-100 px-3 py-1 rounded-full text-gray-500 uppercase tracking-widest font-black">{f}</span>
                          ))}
                        </div>
                      </td>
                      <td className="p-10 uppercase text-[11px] tracking-widest text-gray-500 font-black">
                        {v.engine} <br/> <span className="text-toyota-red mt-2 block">{v.transmission}</span>
                      </td>
                      <td className="p-10 text-right">
                        <div className="font-display text-5xl font-black text-black tracking-tighter group-hover:scale-105 origin-right transition-transform">{v.price}</div>
                        <div className="text-[10px] text-gray-400 mt-2 font-black uppercase tracking-widest">Standard Delhi Price</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-16 bg-black text-white p-12 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4 max-w-2xl text-center md:text-left">
                <h4 className="text-2xl font-display font-black uppercase tracking-tight">OWNERSHIP BENEFITS</h4>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest font-black leading-loose">
                  Includes 3 years/100,000 km warranty. Hybrid batteries carry an extended 8-year warranty. 24/7 Roadside assistance available at all Galaxy Toyota locations.
                </p>
              </div>
              <button onClick={openLeadPopup} className="bg-toyota-red text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shrink-0">
                Get Exact On-Road Quote
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION (HIGH CONVERSION) */}
      <section className="bg-gray-50 py-32 md:py-48 text-black border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-toyota-red/5 skew-x-[-15deg] -translate-x-20" />
        <Container className="relative z-10 text-center max-w-5xl">
           <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-[10px] mb-10">Your Journey Starts Here</h4>
           <h2 className="text-6xl md:text-[110px] font-display font-black uppercase mb-12 tracking-tighter leading-none">
             READY TO <br/> <span className="text-toyota-red">DRIVE?</span>
           </h2>
           <p className="text-2xl md:text-3xl font-light text-gray-500 mb-20 leading-relaxed">
             Join over 500,000 happy families who trust Galaxy Toyota. Experience the legendary {car.name} at your nearest showroom or request a test drive at your doorstep.
           </p>
           <div className="flex flex-col md:flex-row gap-8 justify-center">
             <Link href="/book-test-drive" className="bg-black text-white px-20 py-7 font-black uppercase tracking-widest text-xs hover:bg-toyota-red transition-all shadow-2xl">
               Schedule Test Drive
             </Link>
             <button onClick={openLeadPopup} className="border-2 border-black text-black px-20 py-7 font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
               Enquire Now
             </button>
           </div>
        </Container>
      </section>
    </div>
  );
}
