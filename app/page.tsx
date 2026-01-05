
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { VEHICLES } from '@/lib/inventory';
import { GALAXY_LOCATIONS } from '@/lib/locations';
import { 
  ChevronRight, ChevronLeft, Zap, ShieldCheck, 
  Award, ArrowRight, Settings, Phone, Star, 
  Car, Info, Users, Clock, Shield, Sparkles, MapPin, Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeadPopup } from '@/components/LeadPopup';

const HERO_BANNERS = [
  { img: '/assets/banner1.jpg', title: 'DRIVE TO PLAY', subtitle: 'Experience the All New Camry Strong Hybrid Electric Vehicle', cta: 'Explore Camry' },
  { img: '/assets/banner2.jpg', title: 'AWESOME REWARDS', subtitle: 'GST Benefits up to ₹4.36 Lakh* on Selected Models', cta: 'Get Best Offer' },
  { img: '/assets/banner4.jpg', title: 'THE KING OF EARTH', subtitle: 'Land Cruiser 300 - 70 Years of Unrivaled Off-Road Legacy', cta: 'Conquer Now' },
  { img: '/assets/banner3.jpg', title: 'HILUX BLACK EDITION', subtitle: 'Unbreakable Toughness Meets Premium Lifestyle', cta: 'Book Adventure' },
  { img: '/assets/banner5.jpg', title: 'URBAN CRUISER TAISOR', subtitle: 'Make Your Way with Dynamic Crossover Performance', cta: 'Explore Taisor' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const openLeadPopup = () => {
    window.dispatchEvent(new CustomEvent('open-lead-popup'));
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);

  return (
    <div className="w-full relative bg-white">
      <LeadPopup />

      {/* 1. PREMIUM HERO BANNER SLIDER */}
      <section className="relative h-[100svh] w-full bg-black overflow-hidden" ref={sliderRef}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={HERO_BANNERS[currentSlide].img} 
              alt={HERO_BANNERS[currentSlide].title}
              fill 
              className="object-cover opacity-90"
              priority
              quality={100}
            />
            {/* Improved High-Contrast Gradient for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:hidden" />
          </motion.div>
        </AnimatePresence>

        <Container className="relative h-full flex flex-col justify-center text-white z-10">
          <motion.div 
            key={currentSlide + '-content'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl space-y-6 md:space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-1 w-16 bg-toyota-red" />
              <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">
                OFFICIAL PLATINUM DEALER DELHI NCR
              </h4>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[110px] font-display font-black uppercase leading-[0.85] tracking-tighter drop-shadow-2xl">
              {HERO_BANNERS[currentSlide].title.split(' ')[0]} <br/> 
              <span className="text-toyota-red">{HERO_BANNERS[currentSlide].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed md:border-l-4 md:border-toyota-red md:pl-10">
              {HERO_BANNERS[currentSlide].subtitle}. Join the legacy of 5,00,000+ happy Toyota owners across North India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-10">
              <Link 
                href="/book-test-drive" 
                className="bg-toyota-red text-white px-10 md:px-14 py-4 md:py-6 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all shadow-2xl text-center"
              >
                Book Test Drive
              </Link>
              <button 
                onClick={openLeadPopup}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-10 md:px-14 py-4 md:py-6 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all text-center"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        </Container>

        {/* Custom Navigation dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {HERO_BANNERS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-12 bg-toyota-red' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>

        {/* Manual Navigation Arrows */}
        <div className="hidden md:flex absolute bottom-12 right-12 gap-4 z-20">
          <button 
            onClick={prevSlide} 
            className="p-5 bg-white/5 hover:bg-toyota-red text-white transition-all backdrop-blur-md border border-white/10 rounded-full group"
          >
            <ChevronLeft size={28} className="group-hover:scale-110 transition-transform"/>
          </button>
          <button 
            onClick={nextSlide} 
            className="p-5 bg-white/5 hover:bg-toyota-red text-white transition-all backdrop-blur-md border border-white/10 rounded-full group"
          >
            <ChevronRight size={28} className="group-hover:scale-110 transition-transform"/>
          </button>
        </div>
      </section>

      {/* 2. FEATURED MODELS GRID */}
      <section className="bg-white py-24 md:py-40">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-4 leading-none">
                PREMIUM <span className="text-toyota-red">FLEET</span>
              </h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] border-l-4 border-toyota-red pl-6">
                Explore the official 2024 Toyota India Inventory at Galaxy Hubs
              </p>
            </div>
            <Link href="/showroom" className="text-toyota-red font-black uppercase text-[10px] tracking-[0.3em] flex items-center group mb-2">
              View Entire Inventory <ArrowRight size={16} className="ml-4 group-hover:translate-x-3 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-24">
            {VEHICLES.map((car) => (
              <Link key={car.id} href={`/showroom/${car.id}`} className="group flex flex-col">
                <div className="h-64 relative mb-10 flex items-center justify-center p-8 bg-gray-50 rounded-sm overflow-hidden group-hover:bg-gray-100 transition-colors">
                  <Image 
                    src={car.mainImage} 
                    alt={car.name} 
                    fill 
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 text-[8px] font-black uppercase tracking-widest text-toyota-red bg-white px-3 py-1.5 shadow-sm">
                    {car.type} Series
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase text-black mb-3 group-hover:text-toyota-red transition-colors flex justify-between items-center">
                  {car.name}
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all"/>
                </h3>
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-t border-gray-100 pt-6">
                  <div className="space-y-1">
                    <span className="block text-[8px] text-gray-300">Showroom Range From</span>
                    <span className="text-black font-black">{car.priceRange.split(' ')[1]} {car.priceRange.split(' ')[2]}</span>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="block text-[8px] text-gray-300">Efficiency</span>
                    <span className="flex items-center justify-end gap-1 text-toyota-red"><Zap size={12}/> {car.mileage}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. WHY CHOOSE GALAXY TOYOTA */}
      <section className="py-24 md:py-40 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-none">
              THE <span className="text-toyota-red">GALAXY</span> EDGE
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
              40 Years of Uncompromised Excellence • Authorised Platinum Partner
            </p>
            <div className="h-2 w-24 bg-toyota-red mx-auto mt-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {[
              { 
                icon: <Award size={64} />, 
                title: "PLATINUM STATUS", 
                desc: "Consistently recognized by Toyota Kirloskar Motor for achieving the highest standards in sales and service satisfaction." 
              },
              { 
                icon: <ShieldCheck size={64} />, 
                title: "100% TRANSPARENCY", 
                desc: "Direct factory pricing with no hidden costs. Every transaction is digitally documented for your absolute peace of mind." 
              },
              { 
                icon: <Users size={64} />, 
                title: "FAMILY OF 500K+", 
                desc: "Serving generations of families in Delhi NCR since 1984 with the world-renowned Toyota Hospitality." 
              }
            ].map((feat, i) => (
              <div key={i} className="group text-center px-6">
                <div className="text-toyota-red mx-auto mb-10 group-hover:scale-110 transition-transform duration-500">
                  {feat.icon}
                </div>
                <h3 className="text-3xl font-display font-black uppercase mb-6 tracking-tight group-hover:text-toyota-red transition-colors">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed uppercase font-bold tracking-widest">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-24 md:py-40 bg-black text-white relative overflow-hidden">
        <Image 
          src="/assets/cars/hycross-int.webp" 
          alt="Galaxy Toyota Official Service" 
          fill 
          className="object-cover opacity-10" 
        />
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24 md:mb-32">
             <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter">
               COMPLETE <span className="text-toyota-red">CARE</span>
             </h2>
             <Link href="/service" className="text-white font-black uppercase text-[10px] tracking-[0.5em] border-b-4 border-toyota-red pb-3 hover:text-toyota-red transition-all">
               View Comprehensive Service Menu
             </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { title: 'EM60 EXPRESS', desc: 'Authorised periodic maintenance by dual-technician teams in exactly 60 minutes.', icon: <Clock/> },
              { title: 'SPARSH BODYSHOP', desc: 'World-class accidental repair hub with computerized paint matching and factory finish.', icon: <Sparkles/> },
              { title: 'TFS FINANCE', desc: 'Toyota Financial Services: Low interest rates, minimal documentation, and instant approval.', icon: <Award/> },
              { title: 'TOYOTA U-TRUST', desc: 'The most reliable destination to trade-in or buy certified pre-owned Toyota cars.', icon: <ShieldCheck/> },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-10 md:p-14 border border-white/10 hover:bg-toyota-red transition-all duration-700 group cursor-pointer">
                <div className="text-toyota-red group-hover:text-white mb-10 transform scale-150 origin-left transition-transform duration-500">
                  {s.icon}
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-black uppercase mb-4 tracking-tighter">
                  {s.title}
                </h4>
                <p className="text-[10px] text-gray-400 group-hover:text-white uppercase font-bold tracking-[0.2em] leading-relaxed transition-colors">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. LOCATIONS PREVIEW */}
      <section className="py-24 md:py-40 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
             <div className="lg:w-1/3 space-y-12">
                <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.8] mb-8">
                  VISIT <br/> <span className="text-toyota-red">GALAXY</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium border-l-4 border-toyota-red pl-10">
                  With over 16 state-of-the-art facilities across New Delhi, Noida, and NCR, world-class Toyota hospitality is always nearby.
                </p>
                <Link href="/locations" className="inline-flex bg-black text-white px-14 py-6 font-black uppercase tracking-widest text-[10px] hover:bg-toyota-red transition-all shadow-xl group">
                  All Authorized Locations <ChevronRight className="ml-4 group-hover:translate-x-2 transition-transform" size={16}/>
                </Link>
             </div>

             <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {GALAXY_LOCATIONS.slice(0, 4).map(loc => (
                  <div key={loc.id} className="p-10 md:p-14 bg-gray-50 border border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-toyota-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"/>
                    <h5 className="text-[9px] font-black uppercase tracking-widest text-toyota-red mb-6">Authorised {loc.category} Hub</h5>
                    <h4 className="text-3xl font-display font-black uppercase mb-6 tracking-tight leading-none">
                      {loc.name.split('-')[1]?.trim() || loc.name}
                    </h4>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10 h-10 overflow-hidden leading-relaxed">
                      {loc.address}
                    </p>
                    <div className="flex justify-between items-center pt-10 border-t border-gray-200">
                      <span className="text-base font-black tracking-tight">{loc.phones[0]}</span>
                      <Link href={`/locations/${loc.slug}`} className="text-toyota-red group-hover:translate-x-2 transition-transform">
                        <ChevronRight size={24}/>
                      </Link>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </Container>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bg-toyota-red py-24 md:py-40 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-[-20deg] translate-x-32" />
         <Container className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-4xl text-center lg:text-left">
               <h4 className="text-black font-black uppercase tracking-[0.5em] text-[10px] mb-8">Take the Next Step</h4>
               <h2 className="text-6xl md:text-[110px] font-display font-black uppercase tracking-tighter mb-8 leading-none">
                 EXPERIENCE <br/> <span className="text-black">QUALITY.</span>
               </h2>
               <p className="text-xl md:text-3xl font-light opacity-90 leading-relaxed max-w-2xl">
                 Experience the legendary Quality, Durability, and Reliability (QDR) of your preferred Toyota firsthand.
               </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Link 
                href="/book-test-drive" 
                className="bg-black text-white px-16 py-7 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl text-center"
              >
                Schedule Doorstep Drive
              </Link>
              <button 
                onClick={openLeadPopup}
                className="bg-white text-toyota-red px-16 py-7 font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-2xl text-center"
              >
                Enquire Now
              </button>
            </div>
         </Container>
      </section>
    </div>
  );
}
