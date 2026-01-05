
'use client';

// Fix: Import React to resolve missing React namespace for FormEvent type
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, CheckCircle, Smartphone, User, Mail, Car, MapPin } from 'lucide-react';
import { VEHICLES } from '@/lib/inventory';

export const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openPopup = useCallback(() => {
    setIsVisible(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem('lead_popup_closed', 'true');
  }, []);

  useEffect(() => {
    // 1. Time-based trigger (8-10 seconds)
    const timer = setTimeout(() => {
      const hasClosed = sessionStorage.getItem('lead_popup_closed');
      if (!hasClosed) openPopup();
    }, 9000);

    // 2. Scroll-based trigger (40% of page)
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const hasClosed = sessionStorage.getItem('lead_popup_closed');
      if (scrolled > 40 && !hasClosed) openPopup();
    };

    // 3. Manual trigger via custom event
    const handleManualOpen = () => openPopup();
    window.addEventListener('open-lead-popup', handleManualOpen);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-lead-popup', handleManualOpen);
    };
  }, [openPopup]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(closePopup, 4000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 lg:p-8 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative bg-white w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-500 rounded-sm">
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-toyota-red text-white flex items-center justify-center transition-all duration-300 rounded-full md:bg-black/10 md:text-black md:hover:text-white"
          onClick={closePopup}
          aria-label="Close form"
        >
          <X size={24}/>
        </button>

        {/* Left Side: Campaign / Branding */}
        <div className="hidden md:block relative h-full min-h-[600px] bg-black">
          <Image 
            src="/assets/banner2.jpg" 
            alt="Galaxy Toyota Exclusive Offer" 
            fill 
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
            <div className="relative h-12 w-48 mb-8 brightness-0 invert">
              <Image 
                src="/assets/logo1.png" 
                alt="Galaxy Toyota" 
                fill 
                className="object-contain" 
              />
            </div>
            <h2 className="text-5xl font-display font-black uppercase text-white leading-none mb-6 tracking-tighter">
              DRIVE HOME AN <br/> <span className="text-toyota-red">ICON TODAY.</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-[10px]">
                <CheckCircle size={16} className="text-toyota-red"/> Priority Delivery Available
              </div>
              <div className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-[10px]">
                <CheckCircle size={16} className="text-toyota-red"/> Best Exchange Value (U-Trust)
              </div>
              <div className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-[10px]">
                <CheckCircle size={16} className="text-toyota-red"/> Exclusive GST Benefits
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Lead Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white relative">
          {isSubmitted ? (
            <div className="text-center py-20 flex flex-col items-center">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 animate-bounce">
                <CheckCircle size={56}/>
              </div>
              <h3 className="text-4xl font-display font-black uppercase mb-4 tracking-tighter">Thank You!</h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-xs mx-auto">
                Your request has been prioritized. A Galaxy Toyota relationship manager will call you within 15 minutes.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 text-center md:text-left">
                <div className="md:hidden relative h-10 w-40 mx-auto mb-6">
                  <Image src="/assets/logo1.png" alt="Galaxy Toyota" fill className="object-contain" />
                </div>
                <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-3 leading-none">
                  GET THE BEST <span className="text-toyota-red">OFFER</span>
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Fill in your details for a personalized quote & doorstep test drive.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-toyota-red transition-colors" />
                  <input 
                    required 
                    type="text"
                    placeholder="Full Name" 
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-transparent focus:border-toyota-red/30 focus:bg-white outline-none font-bold text-xs transition-all" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Smartphone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-toyota-red transition-colors" />
                    <input 
                      required 
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Mobile Number" 
                      className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-transparent focus:border-toyota-red/30 focus:bg-white outline-none font-bold text-xs transition-all" 
                    />
                  </div>
                  <div className="relative group">
                    <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-toyota-red transition-colors" />
                    <input 
                      type="email" 
                      placeholder="Email (Optional)" 
                      className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-transparent focus:border-toyota-red/30 focus:bg-white outline-none font-bold text-xs transition-all" 
                    />
                  </div>
                </div>

                <div className="relative group">
                  <Car size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-toyota-red transition-colors" />
                  <select 
                    required 
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-transparent focus:border-toyota-red/30 focus:bg-white outline-none font-bold text-xs appearance-none cursor-pointer transition-all"
                  >
                    <option disabled selected value="">Interested Model</option>
                    {VEHICLES.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                  </select>
                </div>

                <div className="relative group">
                  <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-toyota-red transition-colors" />
                  <select 
                    required 
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-transparent focus:border-toyota-red/30 focus:bg-white outline-none font-bold text-xs appearance-none cursor-pointer transition-all"
                  >
                    <option disabled selected value="">Preferred Location (Delhi NCR)</option>
                    <option>Galaxy Toyota Okhla (Head Office)</option>
                    <option>Galaxy Toyota Dwarka</option>
                    <option>Galaxy Toyota Moti Nagar</option>
                    <option>Galaxy Toyota Noida Sector 63</option>
                    <option>Galaxy Toyota Shalimar Bagh</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-toyota-red text-white py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-all shadow-xl mt-6 active:scale-95"
                >
                  Request Call Back Now
                </button>

                <p className="text-[9px] text-gray-400 text-center uppercase font-bold tracking-widest mt-6 leading-relaxed">
                  By clicking submit, you authorize Galaxy Toyota to contact you regarding your enquiry. <br/>
                  <span className="text-toyota-red">*</span> T&C Apply.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
