
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Service } from './pages/Service';
import { VehicleDetail } from './pages/VehicleDetail';
import { Showroom } from './app/showroom/page';
import { Offers } from './pages/Offers';
import { Insurance } from './pages/Insurance';
import { BookTestDrive } from './pages/BookTestDrive';
import { Contact } from './pages/Contact';
import { Locations } from './pages/Locations';
import { LocationDetail } from './pages/LocationDetail';
import { Award, Zap, ShieldCheck, ChevronRight } from 'lucide-react';
import { Container } from './components/ui/Container';

const Finance = () => (
  <div className="pt-44 min-h-screen bg-white">
    <Container>
      <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12 border-b-8 border-toyota-red pb-6 inline-block">
        TOYOTA <span className="text-toyota-red">FINANCE</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pb-24">
        <div className="prose prose-xl text-gray-600 font-medium">
          <p className="mb-10 text-2xl font-light leading-relaxed">Toyota Financial Services (TFS) is the world's leader in automotive financing. We offer tailored solutions that make owning a Toyota easy and transparent.</p>
          <div className="space-y-12">
            {[
              { title: 'Low EMI Plans', desc: 'Flexible repayment tenure up to 7 years with the most competitive interest rates in the industry.' },
              { title: '100% Funding', desc: 'On-road funding options for selected profiles with minimal documentation and instant approval.' },
              { title: 'Balloon Schemes', desc: 'Pay lower EMIs and a lump sum at the end of your tenure. Best for corporate professionals.' }
            ].map((f, i) => (
              <div key={i} className="border-l-4 border-toyota-red pl-8 group">
                <h3 className="text-3xl font-display font-black uppercase text-toyota-black mb-4 group-hover:text-toyota-red transition-colors">{f.title}</h3>
                <p className="text-gray-500 font-medium leading-loose">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-toyota-lightGrey p-12 shadow-2xl h-fit border-t-8 border-toyota-red">
           <h3 className="text-4xl font-display font-black uppercase mb-10 tracking-tighter">Quick Enquiry</h3>
           <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 outline-none font-bold text-sm bg-white" />
              <input type="tel" placeholder="Mobile Number" className="w-full p-4 outline-none font-bold text-sm bg-white" />
              <select className="w-full p-4 outline-none font-bold text-sm bg-white">
                <option>Interested Model</option>
                <option>Hycross</option>
                <option>Fortuner</option>
              </select>
              <button className="btn-toyota w-full">Request Quote</button>
           </form>
        </div>
      </div>
    </Container>
  </div>
);

const UTrust = () => (
  <div className="pt-44 min-h-screen bg-white pb-24">
    <Container>
      <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12 border-b-8 border-toyota-red pb-6 inline-block">
        TOYOTA <span className="text-toyota-red">U-TRUST</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
           <p className="text-2xl font-light leading-relaxed text-gray-500 mb-12">Exchange any brand car for a brand new Toyota. Experience a transparent 203-point evaluation process and get the best market value for your vehicle.</p>
           <div className="grid grid-cols-2 gap-6">
              {[
                { title: '203 Checkpoints', desc: 'Rigorous certification' },
                { title: 'Any Brand', desc: 'We accept all cars' },
                { title: 'Best Value', desc: 'Transparent pricing' },
                { title: 'Warranty', desc: 'Up to 2 years' }
              ].map((b, i) => (
                <div key={i} className="bg-toyota-lightGrey p-8 border-l-4 border-toyota-red">
                   <h4 className="text-xl font-display font-black uppercase mb-2">{b.title}</h4>
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{b.desc}</p>
                </div>
              ))}
           </div>
        </div>
        <div className="relative">
           <img src="https://galaxytoyota.in/assets/images/sections/utrust-cars.jpg" className="w-full h-auto object-cover shadow-2xl" alt="U-Trust" />
           <div className="absolute -bottom-10 -right-10 bg-toyota-red p-12 text-white hidden md:block">
              <span className="text-5xl font-display font-black">BEST</span>
              <p className="text-[10px] font-black uppercase tracking-widest">Resale Value</p>
           </div>
        </div>
      </div>
    </Container>
  </div>
);

const Sparsh = () => (
  <div className="pt-44 min-h-screen bg-toyota-charcoal text-white pb-24">
    <Container>
      <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12 border-b-8 border-toyota-red pb-6 inline-block">
        SPARSH <span className="text-toyota-red">BODY & PAINT</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
           <img src="https://galaxytoyota.in/assets/images/sections/sparsh-paint.jpg" className="w-full h-[600px] object-cover shadow-2xl grayscale" alt="Sparsh Paint" />
        </div>
        <div>
           <h3 className="text-3xl font-display font-black uppercase mb-8 text-toyota-red">Factory Finish Restoration</h3>
           <p className="text-xl font-light text-gray-400 mb-12 leading-relaxed">Our specialized SPARSH Body & Paint hub in Okhla is equipped with state-of-the-art repair facilities to bring your Toyota back to its original factory condition after an accident.</p>
           <div className="space-y-8">
              {[
                { title: 'Computerized Matching', desc: 'Perfect paint shade matching using digital tools.' },
                { title: 'High-Tech Booths', desc: 'Dust-free environment for impeccable finish.' },
                { title: 'Cashless Claims', desc: 'Tie-ups with all major insurance providers.' }
              ].map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <ShieldCheck className="text-toyota-red shrink-0" size={24}/>
                   <div>
                      <h4 className="text-xl font-display font-black uppercase mb-2">{s.title}</h4>
                      <p className="text-gray-500 text-sm">{s.desc}</p>
                   </div>
                </div>
              ))}
           </div>
           <button className="btn-toyota mt-12 !bg-white !text-toyota-black">Schedule Repair</button>
        </div>
      </div>
    </Container>
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/u-trust" element={<UTrust />} />
        <Route path="/sparsh" element={<Sparsh />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:slug" element={<LocationDetail />} />
        <Route path="/book-test-drive" element={<BookTestDrive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
