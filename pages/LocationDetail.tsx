
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { GALAXY_LOCATIONS } from '../lib/locations';
import { Container } from '../components/ui/Container';
import { Phone, MapPin, Clock, ShieldCheck, ChevronRight, Navigation, Calendar, UserCheck } from 'lucide-react';

export const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const loc = GALAXY_LOCATIONS.find(l => l.slug === slug);

  if (!loc) return <Navigate to="/locations" />;

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="relative h-[60vh] bg-toyota-black flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 grayscale">
          <img src={`/assets/banners/location-${loc.category.toLowerCase()}.webp`} className="w-full h-full object-cover" alt={loc.name} />
        </div>
        <Container className="relative z-10 text-white">
          <div className="max-w-4xl space-y-8 animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-toyota-red"></div>
              <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-xs">Official {loc.category} Hub</h4>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85]">
              {loc.name}
            </h1>
            <p className="text-2xl font-light text-gray-200 max-w-2xl">{loc.area}, {loc.city}</p>
            <div className="flex flex-wrap gap-6 pt-8">
              <a href={loc.mapUrl} className="btn-toyota flex items-center gap-3 !px-12 !py-5">
                Navigate Now <Navigation size={20}/>
              </a>
              <a href={`tel:${loc.phones[0]}`} className="bg-white/10 backdrop-blur-md border border-white/20 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-toyota-black transition-all">
                Call Branch
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. INFO GRID */}
      <section className="py-24 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-16">
              <div>
                <h2 className="text-4xl font-display font-black uppercase mb-12 tracking-tighter border-l-8 border-toyota-red pl-8">ADDRESS & <span className="text-toyota-red">CONTACT</span></h2>
                <div className="space-y-10">
                  <div className="flex gap-8 group">
                    <MapPin className="text-toyota-red shrink-0" size={32}/>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Location</h5>
                      <p className="text-2xl font-display font-black text-toyota-black uppercase leading-tight">{loc.address}, {loc.area}, {loc.city} - {loc.pincode}</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <Phone className="text-toyota-red shrink-0" size={32}/>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Primary Contact</h5>
                      <div className="space-y-1">
                        {loc.phones.map(p => (
                          <p key={p} className="text-3xl font-display font-black text-toyota-black">{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <Clock className="text-toyota-red shrink-0" size={32}/>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Operating Hours</h5>
                      <p className="text-xl font-display font-black text-toyota-black uppercase">{loc.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {loc.manager && (
                <div className="bg-toyota-lightGrey p-12 border-t-8 border-toyota-black">
                   <div className="flex items-center gap-6 mb-8">
                     <div className="w-16 h-16 bg-toyota-red rounded-full flex items-center justify-center text-white">
                        <UserCheck size={32}/>
                     </div>
                     <div>
                        <h4 className="text-2xl font-display font-black uppercase leading-none">{loc.manager}</h4>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Branch Authority</span>
                     </div>
                   </div>
                   <p className="text-gray-500 font-medium italic">"Committed to delivering the Toyota standard of excellence to every guest at our {loc.area} facility."</p>
                </div>
              )}
            </div>

            <div className="h-[600px] shadow-2xl relative">
              <iframe src={loc.mapEmbed} className="w-full h-full border-none grayscale" loading="lazy"></iframe>
              <div className="absolute bottom-10 left-10 bg-toyota-red text-white p-8 animate-fade-up">
                <span className="text-4xl font-display font-black block mb-2">100%</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Verified Listing</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SERVICES STRIP */}
      <section className="py-24 bg-toyota-lightGrey">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-black uppercase mb-4 tracking-tighter">SERVICES <span className="text-toyota-red">OFFERED</span></h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Authorised Toyota Standards</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loc.services.map((s, i) => (
              <div key={i} className="bg-white p-10 border-b-4 border-toyota-red shadow-sm hover:shadow-xl transition-all">
                <ShieldCheck className="text-toyota-red mb-6" size={32}/>
                <h4 className="text-xl font-display font-black uppercase mb-4 tracking-tight">{s}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Standard Toyota SOP</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <section className="bg-toyota-black py-24 text-white">
        <Container className="text-center max-w-3xl">
          <h2 className="text-5xl font-display font-black uppercase mb-8 tracking-tighter">PLAN YOUR <span className="text-toyota-red">VISIT</span></h2>
          <p className="text-xl font-light text-gray-400 mb-12">Connect with our {loc.area} team for priority handling of your enquiry or service booking.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-toyota !px-16">Request Callback</Link>
            <Link to="/book-test-drive" className="border border-white/20 px-16 py-4 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-toyota-black transition-all">Book Test Drive</Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
