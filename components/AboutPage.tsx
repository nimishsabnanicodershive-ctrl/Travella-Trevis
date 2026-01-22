
import React from 'react';

const AboutPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-12 hover:translate-x-1 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-primary font-extrabold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-dark mb-8 leading-tight">
              We Believe Travel <br/> <span className="text-primary">Changes Everything.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in 2018, Travella Trails began with a simple mission: to make the world’s most breathtaking experiences accessible to everyone. What started as a small blog for solo travelers has grown into a global community of explorers.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just book trips; we craft stories. Our team of local experts across 40 countries works tirelessly to ensure that every "trail" you take is authentic, sustainable, and unforgettable.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3">
              <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974&auto=format&fit=crop" alt="Our mission" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 aspect-square w-48 rounded-3xl overflow-hidden border-8 border-white shadow-xl -rotate-6 hidden md:block">
              <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop" alt="Community" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 bg-slate-50 rounded-[40px] p-12 text-center">
          <div>
            <div className="text-4xl font-black text-primary mb-2">150+</div>
            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">Destinations</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">500k+</div>
            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">Explorers</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">12k+</div>
            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">Itineraries</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">4.9/5</div>
            <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">Avg. Rating</div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32 text-center">
          <h2 className="text-4xl font-serif font-black text-dark mb-16">The Values That Drive Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Authenticity First", desc: "No tourist traps. We find the hidden gems that give you the real pulse of a destination." },
              { title: "Sustainable Travel", desc: "We prioritize carbon-neutral transit and support local eco-conscious businesses." },
              { title: "Radical Trust", desc: "Our 24/7 support means we're with you every step of the way, wherever you are." }
            ].map((v, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-black text-dark mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-serif font-black text-dark mb-4">Meet the Visionaries</h2>
              <p className="text-slate-500 font-medium">The experts behind your next favorite memory.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Founder & Lead Explorer", img: "https://i.pravatar.cc/300?u=sarah" },
              { name: "Marcus Chen", role: "Head of Itineraries", img: "https://i.pravatar.cc/300?u=marcus" },
              { name: "Elena Rodriguez", role: "Sustainability Director", img: "https://i.pravatar.cc/300?u=elena" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-black text-dark">{member.name}</h4>
                <p className="text-primary font-bold text-sm uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
