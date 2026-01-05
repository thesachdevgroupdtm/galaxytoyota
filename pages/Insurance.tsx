
import React from 'react';
import { ShieldCheck, Heart, Zap, Clock, FileText, ChevronRight, PhoneCall } from 'lucide-react';

export const Insurance: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <section className="relative h-[60vh] flex items-center bg-toyota-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Insurance" />
        </div>
        <div className="relative z-10 container-xl px-4 md:px-12 text-white">
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-4 leading-none">
            TOYOTA <span className="text-toyota-red">PROTECT</span>
          </h1>
          <p className="text-xl max-w-2xl font-light text-gray-300">
            Secure your investment with our comprehensive insurance solutions. Cashless claims, zero depreciation, and 100% peace of mind.
          </p>
        </div>
      </section>

      <section className="section-padding bg-toyota-lightGrey">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-display font-black uppercase mb-8 border-l-8 border-toyota-red pl-8 leading-tight">
              WHY CHOOSE <br/> <span className="text-toyota-red">TOYOTA INSURANCE?</span>
            </h2>
            <div className="space-y-12">
               {[
                 { title: 'Cashless Repairs', desc: 'Available at all Toyota authorized service centers across the country.', icon: <Zap size={24}/> },
                 { title: 'Genuine Parts', desc: 'We only use 100% genuine Toyota parts for all insurance repairs.', icon: <ShieldCheck size={24}/> },
                 { title: 'Zero Depreciation', desc: 'No deduction on plastic, fiber, or rubber parts during claims.', icon: <Heart size={24}/> },
                 { title: '24/7 Roadside Assistance', desc: 'Always there for you, no matter where the road takes you.', icon: <Clock size={24}/> },
               ].map((item, i) => (
                 <div key={i} className="flex gap-6">
                   <div className="text-toyota-red shrink-0">{item.icon}</div>
                   <div>
                     <h4 className="text-xl font-display font-bold uppercase mb-2 tracking-wide">{item.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-white p-16 shadow-2xl">
             <h3 className="text-3xl font-display font-black uppercase mb-8">Request a Quote</h3>
             <form className="space-y-6">
               <div className="grid grid-cols-2 gap-6">
                 <input type="text" placeholder="Full Name" className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm" />
                 <input type="text" placeholder="Phone Number" className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm" />
               </div>
               <select className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm">
                 <option>Select Your Model</option>
                 <option>Innova Hycross</option>
                 <option>Fortuner</option>
                 <option>Hyryder</option>
               </select>
               <input type="text" placeholder="Registration Number" className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm" />
               <button className="btn-toyota w-full">Calculate Premium</button>
             </form>
          </div>
        </div>
      </section>

      <section className="section-padding bg-toyota-black text-white">
        <div className="container-xl">
           <div className="text-center mb-20">
             <h2 className="text-5xl font-display font-black uppercase mb-4 tracking-tighter">THE CLAIMS <span className="text-toyota-red">PROCESS</span></h2>
             <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Simple, Fast, and Transparent</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
             {[
               { step: '01', title: 'Notification', desc: 'Inform our 24/7 helpline or your advisor about the incident.' },
               { step: '02', title: 'Survey', desc: 'Our surveyors will assess the damage at our workshop.' },
               { step: '03', title: 'Repair', desc: 'Certified technicians repair your car with genuine parts.' },
               { step: '04', title: 'Delivery', desc: 'Collect your car after a seamless cashless settlement.' },
             ].map((s, i) => (
               <div key={i} className="text-center space-y-6">
                 <div className="text-7xl font-display font-black text-white/5">{s.step}</div>
                 <h4 className="text-2xl font-display font-bold uppercase tracking-wide">{s.title}</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};
