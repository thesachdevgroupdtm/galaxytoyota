
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Zap, Award, Star, Settings, Phone, Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { VEHICLES } from '../lib/inventory';
import { GALAXY_LOCATIONS } from '../lib/locations';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. HERO SLIDER */}
      <section className="relative h-screen min-h-[600px] w-full bg-toyota-black overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-80">
          <img 
            src="/assets/banners/hycross-banner.jpg" 
            className="w-full h-full object-cover" 
            alt="Toyota Innova Hycross" 
          />
        </div>
        <Container className="relative z-10 h-full flex flex-col justify-center text-white">
          <div className="max-w-4xl space-y-8 animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-toyota-red"></div>
              <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-xs">Galaxy Elite Experience</h4>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display font-black uppercase leading-[0.85] tracking-tighter">
              DRIVE THE <br/> <span className="text-toyota-red">IMPOSSIBLE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              New Delhi's premier destination for the legendary Toyota fleet. 40 years of uncompromised reliability and service excellence.
            </p>
            <div className="flex flex-wrap gap-6 pt-8">
              <Link to="/showroom" className="btn-toyota flex items-center gap-3 !px-12 !py-5 text-base shadow-2xl">
                Explore Range <ChevronRight size={20}/>
              </Link>
              <Link to="/locations" className="bg-white/10 backdrop-blur-md border border-white/20 px-12 py-5 font-bold uppercase tracking-widest text-base hover:bg-white hover:text-toyota-black transition-all">
                Find Showroom
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SHOWROOM GRID */}
      <section className="bg-toyota-lightGrey py-24">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter mb-4 leading-none">
                PREMIUM <span className="text-toyota-red">SHOWROOM</span>
              </h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs border-l-4 border-toyota-red pl-6">
                Complete 2024 Toyota India Fleet - Authorized NCR Inventory
              </p>
            </div>
            <Link to="/showroom" className="text-toyota-red font-black uppercase text-xs tracking-[0.3em] flex items-center group">
              View All Models <ArrowRight size={16} className="ml-4 group-hover:translate-x-3 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {VEHICLES.slice(0, 8).map((car) => (
              <div key={car.id} className="group bg-white relative overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="h-60 overflow-hidden bg-white p-8 flex items-center justify-center relative">
                  <img src={car.mainImage} alt={car.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest text-toyota-red bg-toyota-lightGrey px-3 py-1">
                    {car.type}
                  </div>
                </div>
                <div className="p-8 border-t border-gray-50 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-black uppercase text-toyota-black mb-4 tracking-tight leading-tight">{car.name}</h3>
                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-widest">
                    <span>Starts {car.priceRange.split(' ')[1]} {car.priceRange.split(' ')[2]}</span>
                    <span className="flex items-center gap-1 text-toyota-red"><Zap size={10}/> {car.mileage}</span>
                  </div>
                  <Link to={`/vehicle/${car.id}`} className="mt-auto block w-full text-center bg-toyota-black text-white py-4 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-toyota-red transition-all">
                    Detail Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. NETWORK SECTION */}
      <section className="py-24 bg-white">
        <Container>
           <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-display font-black uppercase mb-4 tracking-tighter">DELHI NCR <span className="text-toyota-red">NETWORK</span></h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Authorised Sales, Service, U-Trust & SPARSH hubs</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GALAXY_LOCATIONS.slice(0, 3).map((loc) => (
                 <div key={loc.id} className="bg-toyota-lightGrey p-10 group hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-toyota-red">
                    <div className="flex flex-wrap gap-2 mb-6">
                       {loc.services.map(t => (
                          <span key={t} className="px-3 py-1 bg-white text-[8px] font-black uppercase tracking-widest text-toyota-red border border-toyota-red/20">{t}</span>
                       ))}
                    </div>
                    <h4 className="text-3xl font-display font-black uppercase mb-4">{loc.name}</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 h-16 overflow-hidden">{loc.address}</p>
                    <div className="flex justify-between items-center border-t border-gray-200 pt-8">
                       <span className="text-lg font-display font-black text-toyota-black">{loc.phones[0]}</span>
                       <Link to="/locations" className="text-[10px] font-black uppercase tracking-widest text-toyota-red">Get Map</Link>
                    </div>
                 </div>
              ))}
           </div>
        </Container>
      </section>

      {/* 4. SERVICE EXCELLENCE */}
      <section className="py-24 bg-toyota-charcoal text-white overflow-hidden">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <img src="/assets/banners/service-hero.jpg" className="w-full h-[600px] object-cover shadow-2xl grayscale" alt="Service Hub" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-toyota-red/90 p-12 backdrop-blur-md">
                <div className="text-7xl font-display font-black leading-none">60</div>
                <div className="text-xs font-black uppercase tracking-[0.3em]">Minutes Express</div>
             </div>
          </div>
          <div>
            <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">Toyota Service Masterclass</h4>
            <h2 className="text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-10 text-white">
              FASTEST <br/> <span className="text-toyota-red">WORKSHOP</span>
            </h2>
            <p className="text-gray-400 text-lg leading-loose font-medium mb-12">
              Our Okhla and Noida service hubs are equipped with dual-technician bays. Experience the EM60 - Full periodic maintenance in exactly 60 minutes or less.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div className="space-y-4">
                  <div className="h-0.5 w-12 bg-toyota-red"></div>
                  <h5 className="text-xl font-display font-black uppercase">Genuine Parts</h5>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">100% Factory Sourced</p>
               </div>
               <div className="space-y-4">
                  <div className="h-0.5 w-12 bg-white"></div>
                  <h5 className="text-xl font-display font-black uppercase">T-Gloss Studio</h5>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Ceramic Protection</p>
               </div>
            </div>
            <Link to="/service" className="btn-toyota !bg-white !text-toyota-black hover:!bg-toyota-red hover:!text-white">Book Appointment</Link>
          </div>
        </Container>
      </section>

      {/* 5. U-TRUST */}
      <section className="py-24 bg-toyota-lightGrey">
         <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">Certified Pre-Owned</h4>
               <h2 className="text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter mb-10 leading-none">
                  TOYOTA <br/> <span className="text-toyota-red">U-TRUST</span>
               </h2>
               <p className="text-gray-600 text-lg leading-loose font-medium mb-12">
                  Exchange any brand car for a new Toyota. Every U-Trust car undergoes a rigorous 203-point inspection and comes with up to 2 years of warranty.
               </p>
               <div className="flex gap-12">
                  <div>
                     <div className="text-5xl font-display font-black text-toyota-black">203</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Quality Checks</div>
                  </div>
                  <div>
                     <div className="text-5xl font-display font-black text-toyota-black">2Y</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Max Warranty</div>
                  </div>
               </div>
               <Link to="/u-trust" className="btn-toyota mt-12 inline-block">Exchange Car Now</Link>
            </div>
            <div className="relative">
               <img src="/assets/banners/u-trust-used-cars.jpg" className="w-full h-auto object-cover shadow-2xl rounded-sm" alt="U-Trust" />
            </div>
         </Container>
      </section>

      {/* 6. HAPPY DELIVERIES */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-display font-black uppercase mb-4 tracking-tighter">OUR <span className="text-toyota-red">CUSTOMERS</span></h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Join the ever-growing Galaxy Family</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="h-80 overflow-hidden relative group">
                <img src={`/assets/customer/delivery-${num}.jpg`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="Delivery" />
                <div className="absolute bottom-4 left-4 bg-toyota-red text-white p-2 text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Happy Galaxy Family</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. OFFERS SECTION */}
      <section className="py-24 bg-toyota-black relative overflow-hidden">
        <img 
          src="/assets/banners/festive-banner.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
          alt="Festive Offer"
        />
        <Container className="relative z-10 text-white text-center">
          <h2 className="text-5xl lg:text-[100px] font-display font-black uppercase tracking-tighter leading-none mb-10">
            YEAR END <span className="text-toyota-red">BENEFITS</span>
          </h2>
          <p className="text-2xl font-light mb-12 max-w-2xl mx-auto">GST benefits up to ₹ 4.36 Lakh* available on selected models. Direct showroom support for corporate employees.</p>
          <Link to="/offers" className="btn-toyota !bg-white !text-toyota-black hover:!bg-toyota-red hover:!text-white">Claim Rewards Now</Link>
        </Container>
      </section>

      {/* 8. EMI CALCULATOR */}
      <section className="py-24 bg-toyota-lightGrey">
         <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <h2 className="text-5xl lg:text-7xl font-display font-black uppercase mb-8 leading-tight tracking-tighter">FINANCE <br/> <span className="text-toyota-red">YOUR DREAM</span></h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-12 font-bold uppercase tracking-widest">Toyota Financial Services Competitive Rates</p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 bg-white border-t-4 border-toyota-red">
                     <Award className="text-toyota-red mb-4" size={32}/>
                     <h5 className="text-xl font-display font-black uppercase">Low EMI</h5>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Flexible Tenure</p>
                  </div>
                  <div className="p-8 bg-white border-t-4 border-toyota-red">
                     <Zap className="text-toyota-red mb-4" size={32}/>
                     <h5 className="text-xl font-display font-black uppercase">Fast Pay</h5>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Zero Doc Fee</p>
                  </div>
               </div>
            </div>
            <div className="bg-white p-12 shadow-2xl">
               <h3 className="text-4xl font-display font-black uppercase mb-12 tracking-tight text-center">EMI CALCULATOR</h3>
               <div className="space-y-12">
                  <div className="space-y-4">
                     <div className="flex justify-between font-black uppercase text-[10px] tracking-widest">
                        <span>Loan Amount</span>
                        <span className="text-toyota-red font-display text-lg">₹ 15,00,000</span>
                     </div>
                     <input type="range" className="w-full h-1 bg-gray-200 accent-toyota-red appearance-none cursor-pointer" min="500000" max="5000000" step="100000" />
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between font-black uppercase text-[10px] tracking-widest">
                        <span>Tenure (Months)</span>
                        <span className="text-toyota-red font-display text-lg">60 Months</span>
                     </div>
                     <input type="range" className="w-full h-1 bg-gray-200 accent-toyota-red appearance-none cursor-pointer" min="12" max="84" step="12" />
                  </div>
                  <div className="pt-10 border-t border-gray-100 flex flex-col items-center">
                     <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Estimated EMI</div>
                     <div className="text-7xl font-display font-black text-toyota-red tracking-tighter leading-none">₹ 28,450*</div>
                  </div>
                  <button className="btn-toyota w-full py-6 text-base shadow-xl">Get Pre-Approval</button>
               </div>
            </div>
         </Container>
      </section>

      {/* 9. GLOBAL MAP */}
      <section className="h-[500px] w-full bg-toyota-black relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.921315802377!2d77.1001!3d28.631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0363!2zR2FsYXh5IFRveW90YQ!5e0!3m2!1sen!2sin!4v1" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(150%)' }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
        <Container className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-white p-12 shadow-2xl max-w-sm border-t-8 border-toyota-red pointer-events-auto">
            <h4 className="text-4xl font-display font-black uppercase mb-8 leading-none">VISIT <span className="text-toyota-red">US</span></h4>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <MapPin className="text-toyota-red shrink-0" size={20}/>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Okhla Ind. Estate Phase III, Delhi 110020</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-toyota-red shrink-0" size={20}/>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">011-4040-4040</p>
              </div>
            </div>
            <Link to="/locations" className="btn-toyota w-full !py-4 block text-center">Full Network</Link>
          </div>
        </Container>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="bg-toyota-red py-16 text-white">
         <Container className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
               <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-2">JOIN GALAXY <span className="text-toyota-black">INSIGHTS</span></h2>
               <p className="text-lg opacity-80">Be the first to know about new Toyota launches in NCR.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-4">
               <input type="email" placeholder="Email Address" className="px-8 py-4 bg-white text-toyota-black outline-none font-bold text-sm w-full lg:w-80" />
               <button className="bg-toyota-black text-white px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-toyota-red transition-all">Join</button>
            </div>
         </Container>
      </section>
    </div>
  );
};
