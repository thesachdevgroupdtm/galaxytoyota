
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALAXY_LOCATIONS } from '../lib/locations';
import { Container } from '../components/ui/Container';
import { MapPin, Phone, Clock, Search, ChevronRight, Navigation, Globe } from 'lucide-react';

export const Locations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Sales' | 'Service' | 'Used Cars' | 'Sparsh'>('All');

  const filtered = GALAXY_LOCATIONS.filter(loc => {
    const matchesSearch = 
      loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      loc.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || loc.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const categories = ['All', 'Sales', 'Service', 'Used Cars', 'Sparsh'] as const;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="bg-toyota-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px] mb-8">Authorised Network</h4>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-12">
              OUR <br/> <span className="text-toyota-red">NETWORK</span>
            </h1>
            <p className="text-xl font-light text-gray-400 leading-relaxed max-w-2xl">
              Spanning across Delhi, Noida, and the NCR region, our 16+ touchpoints ensure that Toyota excellence is always within your reach.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. FILTER & SEARCH */}
      <section className="sticky top-[70px] z-30 bg-white border-b border-gray-100 py-6">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all border ${activeFilter === filter ? 'bg-toyota-red text-white border-toyota-red' : 'bg-white text-toyota-black border-gray-200 hover:border-toyota-red'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
              <input 
                type="text" 
                placeholder="Search area (e.g. Dwarka, Moti Nagar)..."
                className="w-full pl-12 pr-4 py-3 bg-toyota-lightGrey border-none outline-none font-bold text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. LOCATIONS GRID */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtered.map((loc) => (
              <div key={loc.id} className="group bg-white border border-gray-100 p-8 flex flex-col hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 ${loc.category === 'Sales' ? 'bg-toyota-red' : loc.category === 'Service' ? 'bg-toyota-black' : 'bg-gray-400'}`}></div>
                
                <div className="mb-8 flex justify-between items-start">
                  <span className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest ${loc.category === 'Sales' ? 'bg-toyota-red text-white' : 'bg-toyota-lightGrey text-toyota-black'}`}>
                    {loc.category} Hub
                  </span>
                </div>

                <h3 className="text-2xl font-display font-black uppercase mb-6 tracking-tight leading-none h-14 overflow-hidden group-hover:text-toyota-red transition-colors">
                  {loc.name}
                </h3>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex gap-4">
                    <MapPin className="text-toyota-red shrink-0" size={18}/>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 leading-relaxed">{loc.address}</p>
                      <p className="text-[10px] font-black text-gray-400 mt-1">{loc.city}, {loc.state} - {loc.pincode}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-toyota-red shrink-0" size={18}/>
                    <div className="space-y-1">
                      {loc.phones.map(p => (
                        <p key={p} className="text-sm font-black text-toyota-black">{p}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-toyota-red shrink-0" size={18}/>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{loc.hours}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to={`/locations/${loc.slug}`} 
                    className="bg-toyota-black text-white py-4 text-center text-[9px] font-black uppercase tracking-widest hover:bg-toyota-red transition-all"
                  >
                    View Details
                  </Link>
                  <a 
                    href={loc.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-toyota-black py-3.5 text-center text-[9px] font-black uppercase tracking-widest hover:bg-toyota-black hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation size={12}/> Map
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <Globe size={64} className="mx-auto text-gray-100 mb-8" />
              <h3 className="text-4xl font-display font-black text-gray-300 uppercase">No touchpoints found in this area.</h3>
              <p className="text-gray-400 mt-4 uppercase tracking-widest font-bold text-xs">Try searching for a different sector or category.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
