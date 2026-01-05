
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Container } from './ui/Container';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showroom', href: '/showroom' },
    { name: 'Service', href: '/service' },
    { name: 'Offers', href: '/offers' },
    { name: 'Finance', href: '/finance' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = pathname === '/';

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-6'}`}>
      {/* Utility Strip */}
      <div className={`bg-black text-white text-[9px] font-black uppercase tracking-[0.3em] py-2 transition-all overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'}`}>
        <Container className="flex justify-between items-center">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><Phone size={10} className="text-toyota-red"/> 011-4040-4040 (Okhla)</span>
            <span className="hidden md:flex items-center gap-2"><MapPin size={10} className="text-toyota-red"/> Delhi | Noida | Gurgaon</span>
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-toyota-red transition-colors">Legacy</Link>
            <Link to="/u-trust" className="hover:text-toyota-red transition-colors">U-Trust Exchange</Link>
          </div>
        </Container>
      </div>

      <Container className="flex justify-between items-center mt-2">
        <Link to="/" className="flex items-center gap-4 group">
          <div className={`relative h-10 w-40 transition-all ${!scrolled && isHome ? 'brightness-0 invert' : ''}`}>
            <img 
              src="/assets/logo1.png" 
              alt="Galaxy Toyota Official Logo" 
              className="h-full object-contain"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-[11px] font-black uppercase tracking-widest transition-all relative group ${!scrolled && isHome ? 'text-white' : 'text-black'} hover:text-toyota-red`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-toyota-red transition-all ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <Link to="/book-test-drive" className="bg-toyota-red text-white px-8 py-3.5 font-black uppercase tracking-widest text-[9px] hover:bg-black transition-all shadow-xl">
            Book Test Drive
          </Link>
        </nav>

        <button className={`lg:hidden p-2 transition-colors ${!scrolled && isHome ? 'text-white' : 'text-black'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-0 bg-white z-[200] p-8 flex flex-col animate-in fade-in slide-in-from-top-4">
          <div className="flex justify-between items-center mb-16">
            <div className="relative h-10 w-40">
              <img src="/assets/logo1.png" alt="Galaxy Toyota" className="h-full object-contain" />
            </div>
            <button onClick={() => setIsOpen(false)}><X size={32}/></button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-display font-black uppercase border-b-4 border-gray-50 pb-4">
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/book-test-drive" onClick={() => setIsOpen(false)} className="bg-toyota-red text-white text-center py-6 mt-12 font-black uppercase tracking-widest">
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
};
