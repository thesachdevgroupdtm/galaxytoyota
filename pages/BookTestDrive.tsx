
import React from 'react';
import { VEHICLES } from '../lib/data';
import { Calendar, MapPin, User, Phone, Mail, ChevronRight, Info } from 'lucide-react';

export const BookTestDrive: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-toyota-lightGrey">
      <section className="bg-toyota-black text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="container-xl relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-8 leading-none">
            TEST THE <span className="text-toyota-red">BEST</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Experience the legendary performance and comfort of your favorite Toyota firsthand. Schedule your drive today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
           <div className="bg-white shadow-2xl flex flex-col lg:flex-row max-w-6xl mx-auto">
              <div className="flex-1 p-16 border-r border-gray-100">
                <h2 className="text-4xl font-display font-black uppercase mb-12 tracking-tighter">Your <span className="text-toyota-red">Details</span></h2>
                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><User size={12}/> Full Name</label>
                       <input type="text" className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm focus:ring-2 ring-toyota-red" placeholder="Enter Name" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Phone size={12}/> Mobile No.</label>
                       <input type="text" className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm focus:ring-2 ring-toyota-red" placeholder="+1 (732) 000-0000" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Mail size={12}/> Email Address</label>
                     <input type="email" className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm focus:ring-2 ring-toyota-red" placeholder="email@example.com" />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><MapPin size={12}/> Preferred Showroom</label>
                       <select className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm focus:ring-2 ring-toyota-red">
                         <option>Eatontown, NJ</option>
                         <option>Okhla, New Delhi</option>
                         <option>Noida, NCR</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2"><Calendar size={12}/> Preferred Date</label>
                       <input type="date" className="w-full p-4 bg-toyota-lightGrey border-none outline-none font-bold text-sm focus:ring-2 ring-toyota-red" />
                     </div>
                   </div>
                </form>
              </div>

              <div className="flex-1 bg-toyota-lightGrey p-16 flex flex-col">
                <h2 className="text-4xl font-display font-black uppercase mb-12 tracking-tighter">Select <span className="text-toyota-red">Model</span></h2>
                <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[400px] mb-12 pr-4 custom-scrollbar">
                   {VEHICLES.map(v => (
                     <button key={v.id} className="p-6 bg-white border-2 border-transparent hover:border-toyota-red transition-all text-left flex flex-col items-center group">
                        <img src={v.mainImage} className="w-full h-24 object-contain mb-4 group-hover:scale-110 transition-transform" alt={v.name} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-center">{v.name}</span>
                     </button>
                   ))}
                </div>
                <div className="mt-auto">
                  <div className="p-6 bg-toyota-red/5 border-l-4 border-toyota-red mb-8">
                     <p className="text-[10px] text-toyota-red font-black uppercase tracking-widest flex items-center gap-2 mb-2"><Info size={14}/> Important Notice</p>
                     <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-loose font-bold">Please carry your original valid Driving License for the test drive session.</p>
                  </div>
                  <button className="btn-toyota w-full !py-5">Confirm Booking</button>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
