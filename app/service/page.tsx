
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SERVICES } from '@/lib/services';
import { Clock, Shield, Calendar, Wrench, Settings, Search } from 'lucide-react';

export default function ServicePage() {
  return (
    <div className="w-full pt-32">
      {/* Hero */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1625047509168-a7026f36aeaf?auto=format&fit=crop&q=80&w=2000" 
            alt="Workshop" 
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10 text-center">
          <h4 className="text-toyota-red font-black uppercase tracking-[0.5em] text-sm mb-6">Toyota Service Excellence</h4>
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-8 leading-none">
            PRECISION <span className="text-toyota-red">CARE</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-400 font-light mb-12">
            Your Toyota deserves the best. Our certified technicians ensure every screw is tightened to perfection using genuine parts and advanced tools.
          </p>
          <Link href="/contact" className="bg-toyota-red text-white px-14 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
            Book Service Online
          </Link>
        </Container>
      </section>

      {/* Service Grid */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { title: 'Quality', icon: <Shield/>, desc: 'Factory-standard precision and care.' },
              { title: 'Reliability', icon: <Clock/>, desc: 'Genuine parts with nationwide warranty.' },
              { title: 'Speed', icon: <Wrench/>, desc: 'Express maintenance in 60 minutes.' },
              { title: 'Trust', icon: <Settings/>, desc: 'Transparent pricing, no hidden costs.' }
            ].map((feat, i) => (
              <div key={i} className="bg-gray-50 p-10 group hover:bg-toyota-red hover:text-white transition-all duration-500">
                <div className="text-toyota-red group-hover:text-white mb-6 scale-150 transform origin-left transition-transform">{feat.icon}</div>
                <h3 className="text-3xl font-display font-black uppercase mb-4">{feat.title}</h3>
                <p className="text-xs opacity-70 uppercase tracking-widest font-bold">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-40">
            {SERVICES.map((service, i) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-8 border-l-8 border-toyota-red pl-8">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    {service.longContent}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black">
                        <div className="w-2 h-2 bg-toyota-red"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="bg-black text-white px-12 py-4 font-black uppercase tracking-widest text-[10px] hover:bg-toyota-red transition-all">
                    Enquire More
                  </Link>
                </div>
                <div className="flex-1 relative aspect-video shadow-2xl rounded-sm overflow-hidden group">
                  <Image 
                    src={`https://images.unsplash.com/photo-${1550 + i * 10}552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200`} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Search className="text-white" size={48}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* App CTA */}
      <section className="bg-toyota-red py-32 text-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-display font-black uppercase mb-8 tracking-tighter">TOYOTA <span className="text-black">i-CONNECT</span></h2>
            <p className="text-2xl font-light mb-12 leading-relaxed opacity-90">
              Book services, track vehicle health, and receive real-time updates directly on your smartphone. The ultimate companion for your Toyota journey.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-black text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform border border-white/10">App Store</button>
              <button className="bg-black text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform border border-white/10">Play Store</button>
            </div>
          </div>
          <div className="relative">
             <div className="bg-white/10 backdrop-blur-3xl p-16 border border-white/20 shadow-2xl">
               <div className="relative h-10 w-40 mb-10 brightness-0 invert">
                 <Image src="/assets/logo1.png" alt="Galaxy Toyota" fill className="object-contain" />
               </div>
               <h3 className="text-3xl font-display font-bold uppercase mb-6 tracking-tight">Need Assistance?</h3>
               <p className="mb-10 text-white/80 text-lg font-light leading-relaxed">Our service advisors are available 24/7 for emergency roadside assistance and technical inquiries across Delhi NCR.</p>
               <div className="text-5xl font-display font-black text-black tracking-tighter">1800-102-5001</div>
             </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
