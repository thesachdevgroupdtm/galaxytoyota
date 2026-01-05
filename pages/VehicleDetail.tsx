
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VEHICLES } from '../lib/inventory';
import { Container } from '../components/ui/Container';
import { 
  ShieldCheck, Zap, Gauge, ArrowRight, Eye, 
  ChevronRight, Layout, Car, 
  Settings, Shield, Users, Heart, Sparkles, MapPin, 
  Wrench, HelpCircle, UserPlus, Layers, Activity,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

export const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = VEHICLES.find(v => v.id === id);

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

  const sections = [
    { id: 'overview', title: 'Model Overview', icon: <Eye size={18}/> },
    { id: 'exterior', title: 'Exterior Design', icon: <Car size={18}/> },
    { id: 'interior', title: 'Interior Space', icon: <Layout size={18}/> },
    { id: 'performance', title: 'Engine & Dynamics', icon: <Activity size={18}/> },
    { id: 'safety', title: 'Safety Systems', icon: <Shield size={18}/> },
    { id: 'tech', title: 'Tech & Connectivity', icon: <Settings size={18}/> },
    { id: 'ride', title: 'Ride Quality', icon: <Zap size={18}/> },
    { id: 'reliability', title: 'Reliability', icon: <ShieldCheck size={18}/> },
    { id: 'service', title: 'Service & Maintenance', icon: <Wrench size={18}/> },
    { id: 'variants', title: 'Variants Explained', icon: <Layers size={18}/> },
    { id: 'buyer', title: 'Ideal Buyer Profile', icon: <UserPlus size={18}/> },
    { id: 'context', title: 'Comparison Context', icon: <HelpCircle size={18}/> },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. HERO - DESKTOP & MOBILE OPTIMIZED */}
      <section className="relative h-[80vh] md:h-[90vh] bg-black overflow-hidden flex items-center">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.7 }} transition={{ duration: 1.5 }} className="absolute inset-0">
          <img src={car.bannerImage || car.mainImage} className="w-full h-full object-cover" alt={car.name} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <Container className="relative z-10 text-white px-4 md:px-8">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-3">
              <div className="h-1 w-12 bg-toyota-red"></div>
              <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Official {car.type} Series</h4>
            </motion.div>
            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-5xl md:text-[120px] font-display font-black uppercase tracking-tighter leading-[0.8] mb-4">
              {car.name}
            </motion.h1>
            <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl md:text-3xl font-light text-gray-200 max-w-2xl leading-relaxed">
              {car.tagline}. Starting from <span className="text-white font-bold">{car.priceRange.split('-')[0]}*</span>
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4 md:gap-6 pt-10">
              <Link to="/book-test-drive" className="flex-1 md:flex-none bg-toyota-red text-white px-12 py-5 md:py-6 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all shadow-2xl text-center">Book Test Drive</Link>
              <button onClick={openLeadPopup} className="flex-1 md:flex-none bg-white/10 backdrop-blur-lg border border-white/20 px-12 py-5 md:py-6 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all text-center">Request Quote</button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. SPEC STRIP */}
      <div className="bg-white border-y border-gray-100 sticky top-[70px] z-40 shadow-sm overflow-x-auto no-scrollbar">
        <Container className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 min-w-[500px]">
          {[
            { label: 'Max Power', val: car.horsepower, icon: <Gauge size={24}/> },
            { label: 'Efficiency', val: car.mileage, icon: <Zap size={24}/> },
            { label: 'Max Torque', val: car.torque, icon: <ArrowRight size={24}/> },
            { label: 'Seating', val: `${car.seatingCapacity} Adults`, icon: <Users size={24}/> },
          ].map((s, i) => (
            <div key={i} className="py-8 md:py-10 text-center px-4 hover:bg-gray-50 transition-colors cursor-default group">
              <div className="flex justify-center text-toyota-red mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-display font-black tracking-tight text-black">{s.val}</div>
              <div className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-gray-400 mt-2">{s.label}</div>
            </div>
          ))}
        </Container>
      </div>

      {/* 3. DEEP DIVE SECTIONS - LONG FORM CONTENT */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sidebar Nav - Desktop Only */}
            <aside className="hidden lg:block w-72 sticky top-48 h-fit space-y-2">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-toyota-red mb-6">Deep Dive Explore</h4>
               {sections.map(s => (
                 <a key={s.id} href={`#${s.id}`} className="flex items-center gap-4 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black hover:bg-gray-50 transition-all border-l-2 border-transparent hover:border-toyota-red">
                   {s.icon} {s.title}
                 </a>
               ))}
            </aside>

            {/* Content Area */}
            <div className="flex-1 space-y-32 md:space-y-48 px-4 md:px-0">
               {/* 1. OVERVIEW */}
               <div id="overview" className="scroll-mt-48 space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-toyota-red" />
                    <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px]">Strategic Perspective</h4>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">MODEL <br/> <span className="text-toyota-red">POSITIONING</span></h2>
                  <div className="prose prose-lg md:prose-xl text-gray-600 font-medium leading-relaxed space-y-6">
                    <p>{car.longDescription}</p>
                    <p>The {car.name} represents more than just a segment leader; it is a meticulously engineered solution for the discerning Indian motorist. Positioned as the gold standard in the {car.type} category, it balances aspiration with absolute functional excellence. In the context of Delhi NCR's rapidly evolving infrastructure and emission norms, the {car.name} offers a future-proof investment through its advanced engineering and Toyota's global commitment to Quality, Durability, and Reliability (QDR). Every aspect of its market positioning reflects a deep understanding of status, comfort, and the intrinsic value of time, ensuring that every kilometer driven reinforces the owner's choice of world-class automotive excellence.</p>
                    <p>Designed on the principles of endurance, the {car.name} thrives where others struggle. Whether navigating the chaotic urban corridors of New Delhi or cruising at high speeds on the Yamuna Expressway, its chassis and powertrain are tuned to provide a composed, authoritative presence. It is not merely a vehicle; it is an executive lounge, a family fortress, and a reliable partner that values your legacy as much as its own.</p>
                  </div>
               </div>

               {/* 2. EXTERIOR */}
               <div id="exterior" className="scroll-mt-48 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="h-1 w-12 bg-toyota-red" />
                      <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px]">Aesthetic Authority</h4>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">EXTERIOR <br/> <span className="text-toyota-red">DESIGN</span></h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{car.exteriorDescription}</p>
                    <div className="text-gray-500 space-y-6">
                      <p>The exterior philosophy of the {car.name} is built around the concept of 'Vibrant Clarity'. Every curve is intentional, serving both a stylistic purpose and an aerodynamic one. The front fascia is dominated by the signature Toyota grille, flanked by high-performance LED headlamps that offer exceptional visibility during night-time NCR commutes. The muscular shoulder line runs seamlessly across the body, giving it a planted, wide-track look that exudes confidence on any road surface.</p>
                      <p>Aerodynamic efficiency is a silent hero in this design. By minimizing the drag coefficient, the {car.name} achieves superior high-speed stability and reduced wind noise, allowing for a whisper-quiet cabin environment. Details like the shark-fin antenna, integrated rear spoiler, and precision-cut alloy wheels are not just accessories but integral components of its performance-driven silhouette.</p>
                    </div>
                  </div>
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                    <img src={car.exteriorImage} className="w-full h-full object-cover" alt="Exterior" />
                  </div>
               </div>

               {/* 3. INTERIOR */}
               <div id="interior" className="scroll-mt-48 grid grid-cols-1 md:grid-cols-2 gap-20 items-center md:flex-row-reverse">
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl md:order-2">
                    <img src={car.interiorImage} className="w-full h-full object-cover" alt="Interior" />
                  </div>
                  <div className="space-y-10 md:order-1">
                    <div className="flex items-center gap-4">
                      <div className="h-1 w-12 bg-toyota-red" />
                      <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px]">Mastercraft Cabin</h4>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">INTERIOR <br/> <span className="text-toyota-red">CRAFTSMANSHIP</span></h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{car.interiorDescription}</p>
                    <div className="text-gray-500 space-y-6">
                       <p>Step into a world designed around the 'Omotenashi' philosophy—Toyota's commitment to selfless hospitality. The cabin of the {car.name} is a sanctuary from the urban chaos. High-grade leather, soft-touch materials, and precision stitching come together to create an environment that feels premium and durable. Ergonomics are prioritized, with every control falling perfectly to hand, ensuring the driver remains focused on the journey ahead.</p>
                       <p>Space management is where the {car.name} truly excels. Passengers are treated to class-leading legroom and headroom, making long-distance interstate travel a fatigue-free experience. Intelligent storage solutions, multi-zone climate control, and ambient lighting further enhance the sense of luxury and practicality. Whether it's a board meeting on the move or a family weekend escape, the interior adapts to your needs with ease.</p>
                    </div>
                  </div>
               </div>

               {/* 4. PERFORMANCE */}
               <div id="performance" className="scroll-mt-48 space-y-12">
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-toyota-red" />
                    <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px]">Engineering Soul</h4>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">PERFORMANCE & <br/> <span className="text-toyota-red">DYNAMICS</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="p-10 bg-gray-50 border-l-4 border-toyota-red space-y-4">
                        <Zap className="text-toyota-red" size={32}/>
                        <h4 className="text-2xl font-display font-black uppercase">POWERTRAIN</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">The heart of the {car.name} is a {car.engine} engine that delivers a combined {car.horsepower} with instant torque. Tuned for Indian fuel conditions and diverse altitudes.</p>
                     </div>
                     <div className="p-10 bg-gray-50 border-l-4 border-toyota-red space-y-4">
                        <Activity className="text-toyota-red" size={32}/>
                        <h4 className="text-2xl font-display font-black uppercase">DYNAMICS</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Advanced suspension geometry provides a composed ride even on uneven road surfaces. High-speed stability is unmatched in its class.</p>
                     </div>
                     <div className="p-10 bg-gray-50 border-l-4 border-toyota-red space-y-4">
                        <Settings className="text-toyota-red" size={32}/>
                        <h4 className="text-2xl font-display font-black uppercase">EFFICIENCY</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Certified mileage of {car.mileage} ensures that performance doesn't come at the cost of your wallet or the environment.</p>
                     </div>
                  </div>
                  <div className="prose prose-xl text-gray-600 font-medium">
                     <p>Performance in a Toyota is about more than just numbers on a spec sheet; it is about the 'Drive To Play'. The {car.name} offers a linear, predictable power delivery that makes both bumper-to-bumper traffic and open highways equally manageable. The transmission is tuned for seamless shifts, minimizing power loss and maximizing refinement. In the Hybrid variants, the transition between electric and petrol modes is so smooth it is often imperceptible to the occupants.</p>
                  </div>
               </div>

               {/* Add more sections like Safety, Tech, etc following the same pattern */}
               {/* 5. SAFETY */}
               <div id="safety" className="scroll-mt-48 bg-gray-50 p-12 md:p-24 rounded-sm border-t-8 border-toyota-red">
                  <h3 className="text-4xl md:text-6xl font-display font-black uppercase mb-10 tracking-tight">INTELLIGENT <span className="text-toyota-red">SAFETY</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div className="space-y-8">
                        <p className="text-xl text-gray-600 leading-relaxed">{car.safetyDescription}</p>
                        <div className="space-y-6">
                           {car.safetyFeatures?.map((sf, idx) => (
                             <div key={idx} className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-toyota-red shadow-sm group-hover:bg-toyota-red group-hover:text-white transition-all"><Shield size={20}/></div>
                                <span className="text-sm font-black uppercase tracking-widest text-black">{sf}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                     <div className="prose prose-lg text-gray-500">
                        <p>Toyota safety is a multi-layered shield. Beyond the airbags and electronic stability aids, the {car.name} features a high-tensile steel frame with Global Outstanding Assessment (GOA) technology. This structure is designed to absorb and redistribute impact energy during a collision, minimizing cabin intrusion. Pedestrian protection engineering, ISOFIX mounts for child seats, and impact-sensing door unlocks are all standard features that highlight Toyota's 'Safety for All' vision.</p>
                     </div>
                  </div>
               </div>

               {/* REPEAT FOR ALL 12 SECTIONS WITH HIGH QUALITY TEXT */}
               {/* Ownership & Maintenance section */}
               <div id="service" className="scroll-mt-48 grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-8">
                     <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">SERVICE & <span className="text-toyota-red">OWNERSHIP</span></h3>
                     <p className="text-lg text-gray-600 leading-relaxed">The legendary Toyota low cost of ownership is a result of precision engineering and a massive authorized service network. At Galaxy Toyota, we offer specialized programs like EM60 (Express Maintenance in 60 minutes) to respect your time. Our technicians are factory-trained and use only 100% genuine parts, ensuring your {car.name} remains a true Toyota throughout its lifecycle.</p>
                     <div className="flex gap-10 border-y border-gray-100 py-10">
                        <div>
                           <div className="text-4xl font-display font-black text-black">₹ 0.40/KM*</div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Maintenance Cost</div>
                        </div>
                        <div>
                           <div className="text-4xl font-display font-black text-black">3 YRS / 1L KM</div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Standard Warranty</div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-black text-white p-12 space-y-8 flex flex-col justify-center">
                     <h4 className="text-2xl font-display font-black uppercase border-b border-white/10 pb-6">Ownership Highlights</h4>
                     <ul className="space-y-6">
                        <li className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]"><ShieldCheck className="text-toyota-red" size={20}/> Best-in-class Resale Value</li>
                        <li className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]"><Zap className="text-toyota-red" size={20}/> 24/7 Roadside Assistance</li>
                        <li className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]"><Users className="text-toyota-red" size={20}/> Galaxy Priority Hub Access</li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. VARIANTS & PRICING TABLE */}
      <section id="variants" className="py-24 md:py-40 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="max-w-5xl mx-auto px-4 md:px-0">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-10 text-center leading-none">VARIANTS & <span className="text-toyota-red">PRICING</span></h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] text-center mb-20">Current Ex-Showroom Indications - New Delhi Region</p>
            <div className="overflow-x-auto shadow-2xl rounded-sm bg-white overflow-hidden border-t-8 border-black">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-black text-white uppercase text-[11px] font-black tracking-widest">
                    <th className="p-8 md:p-10 text-left">Trim Level</th>
                    <th className="p-8 md:p-10 text-left">Powertrain</th>
                    <th className="p-8 md:p-10 text-right">Price*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {car.variants.map((v, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-all text-sm font-bold text-gray-700 group">
                      <td className="p-8 md:p-10">
                        <span className="text-black uppercase font-black text-xl md:text-2xl block group-hover:text-toyota-red transition-colors">{v.name}</span>
                      </td>
                      <td className="p-8 md:p-10 uppercase text-[10px] md:text-[11px] tracking-widest text-gray-500 font-black">
                        {v.engine} <br/> <span className="text-toyota-red mt-2 block">{v.transmission}</span>
                      </td>
                      <td className="p-8 md:p-10 text-right">
                        <div className="font-display text-4xl md:text-5xl font-black text-black tracking-tighter">{v.price}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">*Ex-Showroom price for Delhi. Registration, Insurance, and TCS extra. T&C Apply.</p>
          </div>
        </Container>
      </section>

      {/* 5. STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden grid grid-cols-2 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <Link to="/book-test-drive" className="bg-black text-white py-6 text-center font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 border-r border-white/10"><Clock size={16}/> Book Drive</Link>
        <button onClick={openLeadPopup} className="bg-toyota-red text-white py-6 text-center font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"><Sparkles size={16}/> Get Offer</button>
      </div>

      {/* 6. CALL TO ACTION */}
      <section className="bg-black py-32 md:py-48 text-white relative overflow-hidden pb-40 md:pb-48">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-toyota-red/5 skew-x-[-15deg] -translate-x-20" />
        <Container className="relative z-10 text-center max-w-5xl px-4">
           <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-[10px] mb-10">Your Journey Starts Here</h4>
           <h2 className="text-6xl md:text-[110px] font-display font-black uppercase mb-12 tracking-tighter leading-none">READY TO <br/> <span className="text-toyota-red">DRIVE?</span></h2>
           <p className="text-xl md:text-3xl font-light text-gray-500 mb-20 leading-relaxed">Join over 500,000 happy families who trust Galaxy Toyota. Experience the legendary {car.name} at our flagship Okhla showroom or request a test drive at your doorstep.</p>
           <div className="flex flex-col md:flex-row gap-8 justify-center">
             <Link to="/book-test-drive" className="bg-white text-black px-20 py-7 font-black uppercase tracking-widest text-xs hover:bg-toyota-red hover:text-white transition-all shadow-2xl">Schedule Test Drive</Link>
             <button onClick={openLeadPopup} className="border-2 border-white text-white px-20 py-7 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">Enquire Now</button>
           </div>
        </Container>
      </section>
    </div>
  );
};
