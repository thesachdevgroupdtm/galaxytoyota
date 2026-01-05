
import React from 'react';
import { OFFERS } from '../lib/data';
import { ChevronRight, Calendar, Info, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Offers: React.FC = () => {
  // Enhanced static offers for December
  const customOffers = [
    {
      id: 'early-festive',
      title: 'Early Celebrations',
      subtitle: 'Awesome Rewards Program',
      banner: '/assets/banners/early-celebrations-with-awesome-rewards.jpg',
      expiry: 'Valid Dec 2024',
      description: 'Avail GST benefits up to ₹4.36 Lakh* on limited stocks. This exclusive program is designed to bring you the best Toyota value before the year ends.',
      terms: ['Applicable on selected models', 'Offer valid on billing till month end']
    },
    {
      id: 'camry-dec',
      title: 'Camry December Offer',
      subtitle: 'Luxury Redefined',
      banner: '/assets/banners/toyota-camry-december-offer.jpg',
      expiry: 'Dec 31st, 2024',
      description: 'Special finance schemes and priority delivery on India\'s finest luxury hybrid sedan. Experience serenity with exclusive December perks.',
      terms: ['T&C Apply', 'Limited stock available']
    },
    {
      id: 'hyryder-ends',
      title: 'Why Buy Hyryder Now?',
      subtitle: 'Year End Special',
      banner: '/assets/banners/why-buy-a-toyota-hyryder-before-2025-ends.jpg',
      expiry: 'Limited Time',
      description: 'The Urban Cruiser Hyryder is available with special exchange bonuses and reduced interest rates. Drive into 2025 with India\'s most trusted hybrid SUV.',
      terms: ['Exchange bonus on any brand', 'Low EMI starting ₹15,999']
    },
    {
      id: 'rumion-dec',
      title: 'Rumion December Offer',
      subtitle: 'The Family Choice',
      banner: '/assets/banners/toyota-rumion-december-offer.jpg',
      expiry: 'Dec 31st, 2024',
      description: 'Get exclusive accessories kit worth ₹20,000 on the purchase of Rumion MPV. Perfect for the holiday road trips.',
      terms: ['Available at all Galaxy locations']
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-toyota-lightGrey">
      <section className="bg-toyota-black text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/banners/festive-banner.jpg')] bg-cover bg-center"></div>
        <div className="container-xl relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-8 leading-none">
            DECEMBER <span className="text-toyota-red">REWARDS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Experience the Toyota way of life with our year-end special promotions and exclusive Galaxy rewards.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl space-y-24">
          {customOffers.map((offer, i) => (
            <div key={offer.id} className="bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex-1 h-[400px] lg:h-auto overflow-hidden">
                <img src={offer.banner} className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" alt={offer.title} />
              </div>
              <div className="flex-1 p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-toyota-red font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                  <Calendar size={14}/> {offer.expiry}
                </div>
                <h2 className="text-5xl font-display font-black uppercase mb-4 tracking-tighter leading-none">{offer.title}</h2>
                <h4 className="text-xl font-display font-bold text-gray-400 uppercase tracking-widest mb-8">{offer.subtitle}</h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {offer.description}
                </p>
                <div className="bg-toyota-lightGrey p-8 mb-10 border-l-4 border-toyota-red">
                  <h5 className="font-display font-bold uppercase mb-4 text-sm tracking-widest flex items-center gap-2">
                    <Info size={16}/> Details
                  </h5>
                  <ul className="space-y-3">
                    {offer.terms.map((term, idx) => (
                      <li key={idx} className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-3 font-bold">
                        <div className="w-1.5 h-1.5 bg-toyota-red rounded-full"></div> {term}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn-toyota w-full text-center !bg-toyota-black hover:!bg-toyota-red">Claim Reward Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
