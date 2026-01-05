
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MapPin, Search, ChevronDown, 
  Facebook, Twitter, Instagram, Youtube, Clock,
  Car, ShieldCheck, Settings, Users
} from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Showroom', path: '/showroom', icon: <Car size={18}/> },
    { name: 'Services', path: '/services', icon: <Settings size={18}/> },
    { name: 'Finance', path: '/finance', icon: <ShieldCheck size={18}/> },
    { name: 'Offers', path: '/offers', icon: <Clock size={18}/> },
    { name: 'About', path: '/about', icon: <Users size={18}/> },
    { name: 'Contact', path: '/contact', icon: <MapPin size={18}/> },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="hidden lg:flex bg-toyota-black text-white py-2 px-10 justify-between text-xs font-bold uppercase tracking-widest">
        <div className="flex space-x-6">
          <span className="flex items-center"><Phone size={14} className="mr-2 text-toyota-red"/> Sales: (732) 555-0100</span>
          <span className="flex items-center"><MapPin size={14} className="mr-2 text-toyota-red"/> Eatontown, NJ</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/careers" className="hover:text-toyota-red">Careers</Link>
          <Link to="/contact" className="hover:text-toyota-red">Location</Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white py-4 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-toyota-red p-1 rounded-sm group-hover:rotate-12 transition-transform">
              <Car className="text-white" size={24}/>
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter text-toyota-black">
              GALAXY <span className="text-toyota-red">TOYOTA</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest hover:text-toyota-red transition-colors ${location.pathname === link.path ? 'text-toyota-red border-b-2 border-toyota-red pb-1' : 'text-toyota-black'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book-test-drive" className="bg-toyota-red text-white px-6 py-2 rounded-sm font-bold uppercase text-xs hover:bg-toyota-darkRed transition-all shadow-lg hover:shadow-toyota-red/20">
              Book Test Drive
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-toyota-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-8 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-2xl font-display font-bold uppercase border-b border-gray-100 pb-2 flex items-center justify-between"
              >
                {link.name}
                <span className="text-toyota-red">{link.icon}</span>
              </Link>
            ))}
            <Link to="/book-test-drive" className="bg-toyota-red text-white text-center py-4 rounded font-bold uppercase text-lg">
              Book Test Drive
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-toyota-charcoal text-white">
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5">
          <div>
            <div className="text-2xl font-display font-bold tracking-tighter mb-6">
              GALAXY <span className="text-toyota-red">TOYOTA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              As your premier Toyota dealership in Eatontown, NJ, Galaxy Toyota is committed to providing a superior automotive experience, from sales to expert service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-toyota-red transition-colors"><Facebook size={18}/></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-toyota-red transition-colors"><Twitter size={18}/></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-toyota-red transition-colors"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-toyota-red transition-colors"><Youtube size={18}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6 text-toyota-red">Our Models</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/showroom" className="hover:text-white transition-colors">Innova Hycross</Link></li>
              <li><Link to="/showroom" className="hover:text-white transition-colors">Toyota Fortuner</Link></li>
              <li><Link to="/showroom" className="hover:text-white transition-colors">Urban Cruiser Hyryder</Link></li>
              <li><Link to="/showroom" className="hover:text-white transition-colors">Toyota Glanza</Link></li>
              <li><Link to="/showroom" className="hover:text-white transition-colors">Toyota Camry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6 text-toyota-red">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Service Booking</Link></li>
              <li><Link to="/finance" className="hover:text-white transition-colors">EMI Calculator</Link></li>
              <li><Link to="/offers" className="hover:text-white transition-colors">Current Offers</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Join Our Team</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6 text-toyota-red">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-toyota-red flex-shrink-0"/>
                <span>123 Galaxy Way, Eatontown, NJ 07724, United States</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-toyota-red flex-shrink-0"/>
                <span>Sales: (732) 555-0100</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-3 text-toyota-red flex-shrink-0"/>
                <span>Mon-Sat: 9 AM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 px-4 text-center text-xs text-gray-500 uppercase tracking-[0.3em]">
          © 2024 Galaxy Toyota Group. All Rights Reserved. Designed for Excellence.
        </div>
      </footer>
    </div>
  );
};
