
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Award, Target, History, Users, Building, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full pt-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
            alt="History" 
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10 text-white">
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-4">
            OUR <span className="text-toyota-red">LEGACY</span>
          </h1>
          <p className="text-xl max-w-2xl font-light text-gray-300">
            Four decades of excellence, trust, and commitment to the Toyota way of life in Delhi NCR.
          </p>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="relative h-12 w-48 mb-10">
              <Image src="/assets/logo1.png" alt="Galaxy Toyota" fill className="object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-8 border-l-8 border-toyota-red pl-8">
              THE GALAXY <span className="text-toyota-red">PROMISE</span>
            </h2>
            <p className="text-gray-600 text-lg leading-loose mb-10">
              Galaxy Toyota, an authorized dealer of Toyota Kirloskar Motor, has been at the forefront of the automotive industry since its inception. Founded on the principles of transparency and customer satisfaction, we have served over 500,000 happy customers across Delhi NCR.
            </p>
            <p className="text-gray-600 text-lg leading-loose">
              Our facilities are equipped with state-of-the-art technology, reflecting Toyota's global standards of Quality, Durability, and Reliability (QDR). Every member of the Galaxy family is trained to deliver a seamless experience, whether you are buying your first car or servicing a long-time companion.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { label: 'Founded', value: '1984', icon: <History className="text-toyota-red"/> },
              { label: 'Locations', value: '12+', icon: <Building className="text-toyota-red"/> },
              { label: 'Technicians', value: '300+', icon: <ShieldCheck className="text-toyota-red"/> },
              { label: 'Happy Clients', value: '500k+', icon: <Users className="text-toyota-red"/> },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 p-10 text-center hover:shadow-xl transition-all border-b-4 border-transparent hover:border-toyota-red">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-display font-black text-black mb-2">{stat.value}</div>
                <div className="text-xs uppercase font-black tracking-widest text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="bg-neutral-900 text-white py-32">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="p-16 border border-white/10 hover:border-toyota-red transition-all">
            <Target className="text-toyota-red mb-8" size={48}/>
            <h3 className="text-4xl font-display font-black uppercase mb-6 tracking-tight">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To provide a delightful and safe automotive journey to every customer through innovative solutions, ethical practices, and the relentless pursuit of perfection in service.
            </p>
          </div>
          <div className="p-16 border border-white/10 hover:border-toyota-red transition-all">
            <Award className="text-toyota-red mb-8" size={48}/>
            <h3 className="text-4xl font-display font-black uppercase mb-6 tracking-tight">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the most admired and trusted automotive dealership group in India, setting benchmarks in customer service and operational excellence.
            </p>
          </div>
        </Container>
      </section>

      {/* Milestone Timeline */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-black uppercase mb-4">MILESTONES OF <span className="text-toyota-red">EXCELLENCE</span></h2>
            <div className="h-2 w-32 bg-toyota-red mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: '1984', title: 'The Beginning', desc: 'Started with our first showroom in Okhla, New Delhi.' },
              { year: '2005', title: 'Expansion Phase', desc: 'Opened major workshop facilities in Noida and Gurgaon.' },
              { year: '2015', title: 'Innovation Lead', desc: 'Introduced India’s first digital showroom experience.' },
              { year: '2023', title: 'Sustainability Award', desc: 'Awarded as the most environmentally responsible Toyota dealer.' }
            ].map((m, i) => (
              <div key={i} className="flex gap-12 group">
                <div className="text-4xl font-display font-black text-toyota-red w-32 shrink-0 group-hover:scale-110 transition-transform">{m.year}</div>
                <div className="pb-12 border-l-2 border-toyota-red/20 pl-12 relative">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-toyota-red"></div>
                  <h4 className="text-2xl font-display font-bold uppercase mb-2">{m.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
