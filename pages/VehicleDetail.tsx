
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VEHICLES } from '../lib/inventory';
import { Container } from '../components/ui/Container';
import { ShieldCheck, Zap, Gauge, ArrowRight, Download, Eye, ChevronRight, X, ChevronLeft, Maximize2, Layout, Car, Settings, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = VEHICLES.find(v => v.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'interior' | 'exterior' | 'performance' | 'safety'>('overview');

  // Sync scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) return (
    <div className="pt-40 text-center font-display font-black min-h-screen">
      <h2 className="text-4xl uppercase">Model Not Found</h2>
      <Link to="/showroom" className="mt-8 inline-block text-toyota-red border-b-2 border-toyota-red">Back to Showroom</Link>
    </div>
  );

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev + 1) % car.gallery.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev - 1 + car.gallery.length) % car.gallery.length);
  };

  const tabData = [
    { id: 'overview', label: 'Overview', icon: <Eye size={18}/>, content: car.longDescription, image: car.mainImage },
    { id: 'interior', label: 'Interior', icon: <Layout size={18}/>, content: car.interiorDescription, image: car.interiorImage },
    { id: 'exterior', label: 'Exterior', icon: <Car size={18}/>, content: car.exteriorDescription, image: car.exteriorImage },
    { id: 'performance', label: 'Performance', icon: <Settings size={18}/>, content: car.performanceDescription, image: car.mainImage },
    { id: 'safety', label: 'Safety', icon: <Shield size={18}/>, content: car.safetyDescription, image: car.safetyImage || car.mainImage },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO - MODEL SPECIFIC BANNER */}
      <section className="relative h-[85vh] bg-toyota-black overflow-hidden flex items-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={car.bannerImage} className="w-full h-full object-cover" alt={car.name} />
        </motion.div>
        <Container className="relative z-10 text-white">
          <div className="max-w-4xl space-y-8">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-toyota-red"></div>
              <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-xs">Official {car.type} Series</h4>
            </motion.div>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85]"
            >
              {car.name}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-light text-gray-200 max-w-2xl leading-relaxed"
            >
              {car.tagline}. {car.description}
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-10"
            >
              <Link to="/book-test-drive" className="btn-toyota !px-12 !py-6 shadow-2xl">Book Test Drive</Link>
              <button className="bg-white/10 backdrop-blur-lg border border-white/20 px-12 py-6 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-toyota-black transition-all flex items-center gap-3">
                <Download size={18}/> Digital Brochure
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. SPECIFICATION STRIP */}
      <div className="bg-white border-y border-gray-100 sticky top-[70px] z-40 shadow-sm">
        <Container className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {[
            { label: 'Max Power', val: car.horsepower, icon: <Gauge size={22}/> },
            { label: 'Fuel Efficiency', val: car.mileage, icon: <Zap size={22}/> },
            { label: 'Max Torque', val: car.torque, icon: <ArrowRight size={22}/> },
            { label: 'Seating', val: `${car.seatingCapacity} Adults`, icon: <ShieldCheck size={22}/> },
          ].map((s, i) => (
            <div key={i} className="py-10 text-center px-4 hover:bg-toyota-lightGrey transition-colors cursor-default group">
              <div className="flex justify-center text-toyota-red mb-3 group-hover:scale-125 transition-transform duration-300">{s.icon}</div>
              <div className="text-3xl font-display font-black tracking-tight text-toyota-black">{s.val}</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-gray-400 mt-2">{s.label}</div>
            </div>
          ))}
        </Container>
      </div>

      {/* 3. INTERACTIVE GALLERY */}
      <section className="py-24 bg-toyota-lightGrey overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4">
              VISUAL <span className="text-toyota-red">MASTERPIECE</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs border-l-4 border-toyota-red pl-6 inline-block">
              Experience the craftsmanship of the {car.name} from every angle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main Stage */}
            <div className="lg:col-span-4 relative h-[450px] md:h-[650px] bg-white group overflow-hidden shadow-2xl rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={car.gallery[activeImage]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-contain p-8 md:p-16"
                  alt={`${car.name} detail`}
                />
              </AnimatePresence>
              
              {/* Controls */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 pointer-events-none">
                <button 
                  onClick={prevImage} 
                  className="pointer-events-auto w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-toyota-black shadow-xl hover:bg-toyota-red hover:text-white transition-all transform -translate-x-10 group-hover:translate-x-0"
                >
                  <ChevronLeft size={28}/>
                </button>
                <div 
                  onClick={() => setIsLightboxOpen(true)}
                  className="pointer-events-auto flex flex-col items-center cursor-pointer group/zoom"
                >
                  <div className="w-16 h-16 rounded-full bg-toyota-red/90 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                    <Maximize2 size={32}/>
                  </div>
                </div>
                <button 
                  onClick={nextImage} 
                  className="pointer-events-auto w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-toyota-black shadow-xl hover:bg-toyota-red hover:text-white transition-all transform translate-x-10 group-hover:translate-x-0"
                >
                  <ChevronRight size={28}/>
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[650px] pb-4 lg:pb-0 scrollbar-hide">
              {car.gallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative flex-shrink-0 w-28 h-28 lg:w-full lg:h-44 border-4 transition-all duration-300 rounded-sm overflow-hidden ${activeImage === idx ? 'border-toyota-red scale-95 shadow-inner' : 'border-white opacity-60 hover:opacity-100 hover:scale-[1.02]'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                  {activeImage === idx && (
                    <div className="absolute inset-0 bg-toyota-red/10 flex items-center justify-center">
                      <div className="w-1 h-8 bg-toyota-red absolute left-0"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-toyota-black/95 flex items-center justify-center p-4 md:p-20"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-toyota-red transition-colors z-[110]" 
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={48} strokeWidth={1} />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={activeImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={car.gallery[activeImage]} 
                className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(235,10,30,0.2)]"
              />
              
              <button onClick={prevImage} className="absolute left-4 md:left-12 w-20 h-20 bg-white/5 hover:bg-toyota-red text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/10">
                <ChevronLeft size={40}/>
              </button>
              <button onClick={nextImage} className="absolute right-4 md:right-12 w-20 h-20 bg-white/5 hover:bg-toyota-red text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/10">
                <ChevronRight size={40}/>
              </button>
              
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white font-black uppercase tracking-[0.4em] text-sm bg-white/5 border border-white/10 px-10 py-4 rounded-full backdrop-blur-xl">
                {activeImage + 1} <span className="text-gray-500 mx-2">/</span> {car.gallery.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. EXPANDED SPECIFICATIONS (TABS) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-black uppercase tracking-tighter mb-4">
              DETAILED <span className="text-toyota-red">EXPLORATION</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Dive deep into every aspect of the {car.name}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tab Navigation */}
            <div className="lg:w-1/4 flex lg:flex-col flex-wrap gap-2">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-4 px-8 py-5 text-sm font-black uppercase tracking-widest transition-all text-left border-l-4 ${activeTab === tab.id ? 'bg-toyota-black text-white border-toyota-red shadow-xl translate-x-2' : 'bg-toyota-lightGrey text-gray-500 border-transparent hover:bg-gray-200'}`}
                >
                  <span className={activeTab === tab.id ? 'text-toyota-red' : 'text-gray-400'}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-3/4 bg-toyota-lightGrey p-10 lg:p-16 relative overflow-hidden shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <h3 className="text-3xl font-display font-black uppercase mb-6 text-toyota-black">
                      {tabData.find(t => t.id === activeTab)?.label} <span className="text-toyota-red">Features</span>
                    </h3>
                    <p className="text-gray-600 text-lg leading-loose font-medium">
                      {tabData.find(t => t.id === activeTab)?.content}
                    </p>
                    <div className="mt-10 flex gap-4">
                       <div className="w-12 h-1 bg-toyota-red"></div>
                       <Link to="/contact" className="text-xs font-black uppercase tracking-widest text-toyota-black hover:text-toyota-red transition-colors">Enquire About This Feature</Link>
                    </div>
                  </div>
                  <div className="relative group">
                    <img 
                      src={tabData.find(t => t.id === activeTab)?.image} 
                      className="w-full h-[400px] object-cover shadow-2xl rounded-sm transition-transform duration-700 group-hover:scale-105" 
                      alt={activeTab} 
                    />
                    <div className="absolute inset-0 border-[15px] border-white/10 m-6"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. PRICING TABLE */}
      <section className="py-24 bg-toyota-lightGrey">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-16 text-center">
              VARIANTS & <span className="text-toyota-red">PRICING</span>
            </h2>
            <div className="overflow-x-auto shadow-2xl rounded-sm bg-white overflow-hidden border-t-8 border-toyota-red">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-toyota-black text-white uppercase text-[11px] font-black tracking-widest">
                    <th className="p-8 text-left">Variant Configuration</th>
                    <th className="p-8 text-left">Engine / Transmission</th>
                    <th className="p-8 text-right">Showroom Price*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {car.variants.map((v, i) => (
                    <tr key={i} className="hover:bg-toyota-lightGrey transition-all text-sm font-bold text-gray-700 group">
                      <td className="p-8">
                        <span className="text-toyota-black uppercase font-black text-lg block group-hover:text-toyota-red transition-colors">{v.name}</span>
                        <div className="flex gap-2 mt-2">
                          {v.features.slice(0, 3).map(f => (
                            <span key={f} className="text-[9px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-500 uppercase tracking-widest">{f}</span>
                          ))}
                        </div>
                      </td>
                      <td className="p-8 uppercase text-[11px] tracking-widest text-gray-500 font-black">
                        {v.engine} <br/> <span className="text-toyota-red">{v.transmission}</span>
                      </td>
                      <td className="p-8 text-right">
                        <div className="font-display text-4xl font-black text-toyota-black tracking-tighter group-hover:scale-110 origin-right transition-transform">{v.price}</div>
                        <div className="text-[10px] text-gray-400 mt-1">Ex-Showroom Delhi</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 bg-white p-8 border-l-4 border-toyota-red flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-[11px] text-gray-500 uppercase tracking-widest font-black leading-loose max-w-2xl text-center md:text-left">
                *Ex-showroom prices are indicative and subject to change without prior notice. On-road prices vary based on chosen accessories, insurance, and local registration taxes. 
              </p>
              <Link to="/contact" className="btn-toyota !py-4 !px-10 shrink-0 whitespace-nowrap">Get Exact Quote</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section className="bg-toyota-black py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-toyota-red skew-x-[-20deg] translate-x-20 opacity-20 hidden lg:block"></div>
        <Container className="relative z-10 text-center max-w-4xl">
           <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-10 tracking-tighter">READY FOR A <span className="text-toyota-red">GALAXY JOURNEY?</span></h2>
           <p className="text-2xl font-light text-gray-400 mb-16 leading-relaxed">Join over 500,000 happy customers across Delhi NCR. Book a personalized showroom appointment or request a home test drive today.</p>
           <div className="flex flex-col md:flex-row gap-8 justify-center">
             <Link to="/contact" className="btn-toyota !px-20 !py-6 text-lg hover:scale-105">Request Callback</Link>
             <Link to="/locations" className="border-2 border-white/20 text-white px-20 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-toyota-black transition-all hover:scale-105">Visit Nearest Hub</Link>
           </div>
        </Container>
      </section>
    </div>
  );
};
