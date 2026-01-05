
import React, { useState } from 'react';
import { GALAXY_LOCATIONS } from '../lib/locations';
import { Container } from '../components/ui/Container';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, Settings } from 'lucide-react';

export const Contact: React.FC = () => {
  const showrooms = GALAXY_LOCATIONS.filter(l => l.category === 'Sales');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Select Model',
    location: 'Select Location',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Contact Form:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-toyota-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/banners/contact-hero.webp')] bg-cover bg-center"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <h4 className="text-toyota-red font-black uppercase tracking-[0.4em] text-[10px] mb-8">Get In Touch</h4>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-12">
              CONTACT <br/> <span className="text-toyota-red">US</span>
            </h1>
            <p className="text-xl font-light text-gray-400 leading-relaxed">
              New Delhi's premier Toyota network is here to assist you. Whether you're looking for a new car, expert service, or an exchange, our team is just a message away.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. CONTACT FORM & INFO SECTION */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Form Column */}
            <div className="flex-1 bg-toyota-lightGrey p-12 shadow-2xl relative border-t-8 border-toyota-red">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-up">
                  <CheckCircle2 size={80} className="text-toyota-red" />
                  <h3 className="text-4xl font-display font-black uppercase">Message Received</h3>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Our executive will contact you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-toyota-red font-black uppercase text-[10px] tracking-widest border-b border-toyota-red">Send another message</button>
                </div>
              ) : (
                <>
                  <h3 className="text-4xl font-display font-black uppercase mb-10 tracking-tighter">ENQUIRY <span className="text-toyota-red">FORM</span></h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name *</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full p-4 bg-white outline-none font-bold text-sm border border-transparent focus:border-toyota-red transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mobile Number *</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+91-0000000000" 
                          className="w-full p-4 bg-white outline-none font-bold text-sm border border-transparent focus:border-toyota-red transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com" 
                        className="w-full p-4 bg-white outline-none font-bold text-sm border border-transparent focus:border-toyota-red transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Interested Model</label>
                        <select 
                          className="w-full p-4 bg-white outline-none font-bold text-sm border border-transparent focus:border-toyota-red transition-all"
                          value={formData.model}
                          onChange={(e) => setFormData({...formData, model: e.target.value})}
                        >
                          <option disabled>Select Model</option>
                          <option>Innova Hycross</option>
                          <option>Fortuner</option>
                          <option>Hyryder</option>
                          <option>Glanza</option>
                          <option>Taisor</option>
                          <option>Vellfire</option>
                          <option>Hilux</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Preferred Showroom</label>
                        <select 
                          className="w-full p-4 bg-white outline-none font-bold text-sm border border-transparent focus:border-toyota-red transition-all"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                        >
                          <option disabled>Select Showroom</option>
                          {showrooms.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Message</label>
                      <textarea 
                        rows={4}
                        placeholder="How can we help you?" 
                        className="w-full p-4 bg-white outline-none font-bold text-sm border border-transparent focus:border-toyota-red transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-toyota w-full flex items-center justify-center gap-3 !py-5">
                      Send Message <Send size={18}/>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Details Column */}
            <div className="flex-1 space-y-16">
              <div>
                <h3 className="text-4xl font-display font-black uppercase mb-8 tracking-tighter">CENTRAL <span className="text-toyota-red">HOTLINES</span></h3>
                <div className="space-y-10">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-toyota-lightGrey flex items-center justify-center text-toyota-red group-hover:bg-toyota-red group-hover:text-white transition-all">
                      <Phone size={24}/>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Sales Enquiry</h5>
                      <p className="text-3xl font-display font-black text-toyota-black">011-4040-4040</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-toyota-lightGrey flex items-center justify-center text-toyota-red group-hover:bg-toyota-red group-hover:text-white transition-all">
                      <Settings size={24} className="animate-spin-slow"/>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Service Booking</h5>
                      <p className="text-3xl font-display font-black text-toyota-black">1800-102-5001</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-toyota-lightGrey flex items-center justify-center text-toyota-red group-hover:bg-toyota-red group-hover:text-white transition-all">
                      <Clock size={24}/>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Business Hours</h5>
                      <p className="text-xl font-display font-black text-toyota-black uppercase">Mon-Sun: 9:00 AM - 7:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-toyota-black text-white p-10">
                 <h4 className="text-xl font-display font-black uppercase mb-6 flex items-center gap-3">
                   <Mail className="text-toyota-red" size={20}/> ONLINE SUPPORT
                 </h4>
                 <p className="text-gray-400 text-sm font-medium mb-4">Official Email: info@galaxytoyota.com</p>
                 <p className="text-gray-400 text-sm font-medium">Customer Care: care@galaxytoyota.in</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
