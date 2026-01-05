
import React from 'react';
import { SERVICES } from '../lib/services';
import { Clock, Shield, Calendar, Wrench, Settings, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Service: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="bg-toyota-black text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1625047509168-a7026f36aeaf?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Workshop" />
        </div>
        <div className="container-xl relative z-10 text-center">
          <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-sm mb-6">Toyota Service Excellence</h4>
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-8">
            PRECISION <span className="text-toyota-red">CARE</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-400 font-light mb-12">
            Your Toyota deserves the best. Our certified technicians ensure every screw is tightened to perfection using genuine parts and advanced tools.
          </p>
          <button className="btn-toyota">Book Service Online</button>
        </div>
      </section>

      {/* Service Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: 'Quality', icon: <Shield/>, desc: 'Factory-standard precision and care.' },
              { title: 'Reliability', icon: <Clock/>, desc: 'Genuine parts with nationwide warranty.' },
              { title: 'Speed', icon: <Wrench/>, desc: 'Express maintenance in 60 minutes.' },
              { title: 'Trust', icon: <Settings/>, desc: 'Transparent pricing, no hidden costs.' }
            ].map((feat, i) => (
              <div key={i} className="bg-toyota-lightGrey p-10 group hover:bg-toyota-red hover:text-white transition-all duration-500">
                <div className="text-toyota-red group-hover:text-white mb-6 scale-150 transform origin-left transition-transform">{feat.icon}</div>
                <h3 className="text-2xl font-display font-black uppercase mb-4">{feat.title}</h3>
                <p className="text-sm opacity-70 uppercase tracking-widest font-bold">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-32">
            {SERVICES.map((service, i) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-8 border-l-8 border-toyota-red pl-8">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-toyota-black">
                        <div className="w-2 h-2 bg-toyota-red"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-12 btn-toyota !bg-toyota-black hover:!bg-toyota-red">Learn More</button>
                </div>
                <div className="flex-1 bg-toyota-lightGrey h-[500px] w-full flex items-center justify-center relative group overflow-hidden shadow-2xl">
                  <img 
                    src={`https://images.unsplash.com/photo-${1550 + i * 10}552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt={service.title} 
                  />
                  <div className="absolute inset-0 bg-toyota-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Search className="text-white" size={48}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="bg-toyota-red py-24 text-white">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-display font-black uppercase mb-8">TOYOTA <span className="text-toyota-black">i-CONNECT</span></h2>
            <p className="text-xl font-light mb-12">
              Book services, track vehicle health, and receive real-time updates directly on your smartphone. The ultimate companion for your Toyota journey.
            </p>
            <div className="flex gap-6">
              <button className="bg-toyota-black px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">Download on App Store</button>
              <button className="bg-toyota-black px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">Get it on Play Store</button>
            </div>
          </div>
          <div className="relative">
             <div className="bg-white/10 backdrop-blur-xl p-12 border border-white/20">
               <h3 className="text-3xl font-display font-bold uppercase mb-6">Need Assistance?</h3>
               <p className="mb-10 text-white/80">Our service advisors are available 24/7 for emergency roadside assistance and service inquiries.</p>
               <div className="text-4xl font-display font-black text-toyota-black tracking-tighter">(732) 555-0100</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
