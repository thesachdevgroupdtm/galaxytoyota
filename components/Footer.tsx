
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="relative h-14 w-56 brightness-0 invert">
              <img 
                src="/assets/logo1.png" 
                alt="Galaxy Toyota Official Logo" 
                className="h-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Delhi's premier Toyota destination for 40 years. Providing end-to-end automotive solutions including sales, service, insurance, and certified pre-owned cars.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-toyota-red transition-all cursor-pointer"><Facebook size={18}/></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-toyota-red transition-all cursor-pointer"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-toyota-red transition-all cursor-pointer"><Youtube size={18}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-black uppercase mb-10 text-toyota-red tracking-widest border-b border-white/5 pb-4">Our Fleet</h4>
            <ul className="grid grid-cols-1 gap-4 text-[11px] font-black uppercase tracking-widest text-gray-500">
              <li><Link to="/vehicle/fortuner" className="hover:text-white flex items-center gap-3 transition-colors"><ChevronRight size={12}/> Toyota Fortuner</Link></li>
              <li><Link to="/vehicle/hycross" className="hover:text-white flex items-center gap-3 transition-colors"><ChevronRight size={12}/> Innova Hycross</Link></li>
              <li><Link to="/vehicle/hyryder" className="hover:text-white flex items-center gap-3 transition-colors"><ChevronRight size={12}/> Hyryder Hybrid</Link></li>
              <li><Link to="/vehicle/glanza" className="hover:text-white flex items-center gap-3 transition-colors"><ChevronRight size={12}/> Toyota Glanza</Link></li>
              <li><Link to="/vehicle/taisor" className="hover:text-white flex items-center gap-3 transition-colors"><ChevronRight size={12}/> Urban Cruiser Taisor</Link></li>
              <li><Link to="/vehicle/vellfire" className="hover:text-white flex items-center gap-3 transition-colors"><ChevronRight size={12}/> Toyota Vellfire</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-black uppercase mb-10 text-toyota-red tracking-widest border-b border-white/5 pb-4">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-4 text-[11px] font-black uppercase tracking-widest text-gray-500">
              <li><Link to="/service" className="hover:text-white transition-colors">Book Service</Link></li>
              <li><Link to="/finance" className="hover:text-white transition-colors">EMI Calculator</Link></li>
              <li><Link to="/offers" className="hover:text-white transition-colors">Festive Offers</Link></li>
              <li><Link to="/u-trust" className="hover:text-white transition-colors">Used Car Exchange</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our History</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Dealer Network</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-black uppercase mb-10 text-toyota-red tracking-widest border-b border-white/5 pb-4">Head Office</h4>
            <div className="text-[11px] font-black uppercase tracking-widest text-gray-500 space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-toyota-red shrink-0" size={20}/>
                <p className="leading-relaxed">Plot No. 1, Okhla Industrial Estate Phase III, New Delhi 110020</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-toyota-red shrink-0" size={20}/>
                <div>
                   <p className="text-white mb-1">011-4040-4040</p>
                   <p className="text-[9px] opacity-40">Sales Enquiry</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-toyota-red shrink-0" size={20}/>
                <p>Mon - Sun: 09:30 AM - 07:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-gray-600">
              <ShieldCheck className="text-toyota-red" size={16}/> Certified Authorised Toyota Dealer Group
           </div>
           <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">
              © 2024 Galaxy Toyota. All Rights Reserved. | <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | <Link to="/terms" className="hover:text-white">Terms</Link>
           </p>
        </div>
      </Container>
    </footer>
  );
};
