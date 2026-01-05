
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Service } from './pages/Service';
import { VehicleDetail } from './pages/VehicleDetail';
import { Showroom } from './pages/Showroom';
import { Offers } from './pages/Offers';
import { Insurance } from './pages/Insurance';
import { BookTestDrive } from './pages/BookTestDrive';
import { Contact } from './pages/Contact';
import { Locations } from './pages/Locations';
import { LocationDetail } from './pages/LocationDetail';
import { ShieldCheck } from 'lucide-react';
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
        </div>
      </div>
    </Container>
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/service" element={<Service />} />
            <Route path="/u-trust" element={<UTrust />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="/book-test-drive" element={<BookTestDrive />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
