
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown, Car, Settings, ShieldCheck } from 'lucide-react';
import { Container } from './ui/Container';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const navItems = [
    { name: 'Showroom', path: '/showroom' },
    { name: 'Service', path: '/service' },
    { name: 'U-Trust', path: '/u-trust' },
    { name: 'Finance', path: '/finance' },
    { name: 'Offers', path: '/offers' },
    { name: 'Locations', path: '/locations' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100'}`}>
      {/* Utility Strip */}
      <div className={`bg-toyota-black text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 transition-all overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'}`}>
        <Container className="flex justify-between items-center h-full">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><Phone size={12} className="text-toyota-red"/> 011-4040-4040 (Okhla)</span>
            <span className="hidden md:flex items-center gap-2"><Phone size={12} className="text-toyota-red"/> 0120-4040-404 (Noida)</span>
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-toyota-red">Legacy</Link>
            <Link to="/careers" className="hover:text-toyota-red">Careers</Link>
          </div>
        </Container>
      </div>

      <Container className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-display font-black tracking-tighter leading-none text-toyota-black">
              GALAXY <span className="text-toyota-red">TOYOTA</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-40">Authorised Toyota Partner</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-[12px] font-extrabold uppercase tracking-widest transition-all relative group ${location.pathname === item.path ? 'text-toyota-red' : 'text-toyota-black hover:text-toyota-red'}`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-toyota-red transition-all ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <Link to="/book-test-drive" className="btn-toyota !py-3 !px-8 text-xs shadow-lg hover:shadow-toyota-red/30">
            Book Test Drive
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-toyota-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 p-6 flex flex-col gap-6 overflow-y-auto animate-fade-up">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-2xl font-display font-black uppercase border-b border-gray-100 pb-4 flex items-center justify-between"
            >
              {item.name}
              <ChevronDown className="-rotate-90 text-toyota-red" size={20}/>
            </Link>
          ))}
          <Link to="/book-test-drive" className="btn-toyota w-full text-center py-5 text-lg mt-4">
            Request Callback
          </Link>
          <div className="mt-auto pt-10 border-t border-gray-100 grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase text-gray-400">Delhi Hotline</span>
              <span className="text-lg font-bold">011-4040-4040</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
