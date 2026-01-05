
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-toyota-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container-xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
          <div className="text-3xl font-display font-black tracking-tighter mb-8 flex items-center gap-2">
            <span className="text-white">GALAXY</span>
            <span className="text-toyota-red">TOYOTA</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Galaxy Toyota is New Jersey's premier destination for high-quality Toyota vehicles. Our commitment to service excellence is unmatched, delivering the legendary Toyota experience for over 40 years.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-toyota-red transition-all cursor-pointer"><Facebook size={18}/></a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-toyota-red transition-all cursor-pointer"><Twitter size={18}/></a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-toyota-red transition-all cursor-pointer"><Instagram size={18}/></a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-toyota-red transition-all cursor-pointer"><Youtube size={18}/></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-display font-bold uppercase mb-8 text-toyota-red tracking-widest">Our Models</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
            <li><Link to="/showroom" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Innova Hycross</Link></li>
            <li><Link to="/showroom" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Toyota Fortuner</Link></li>
            <li><Link to="/showroom" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Hyryder</Link></li>
            <li><Link to="/showroom" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Toyota Glanza</Link></li>
            <li><Link to="/showroom" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Camry Hybrid</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-display font-bold uppercase mb-8 text-toyota-red tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
            <li><Link to="/service" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Service Booking</Link></li>
            <li><Link to="/finance" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> EMI Calculator</Link></li>
            <li><Link to="/insurance" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Insurance</Link></li>
            <li><Link to="/about" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-display font-bold uppercase mb-8 text-toyota-red tracking-widest">Contact Info</h4>
          <div className="text-sm text-gray-400 space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-toyota-red shrink-0" size={20}/>
              <p>123 Galaxy Way, Eatontown, NJ 07724</p>
            </div>
            <div className="flex gap-4">
              <Phone className="text-toyota-red shrink-0" size={20}/>
              <p>Sales: (732) 555-0100</p>
            </div>
            <div className="flex gap-4">
              <Clock className="text-toyota-red shrink-0" size={20}/>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            </div>
            <div className="flex gap-4">
              <Mail className="text-toyota-red shrink-0" size={20}/>
              <p>info@galaxytoyota.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-xl px-4 border-t border-white/5 pt-12 text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
        © 2024 Galaxy Toyota Group. All Rights Reserved. Authorised Toyota Dealer.
        <div className="mt-4 flex justify-center gap-8">
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
