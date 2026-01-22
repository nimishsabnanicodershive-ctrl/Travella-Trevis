
import React from 'react';

const ExperiencePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const experiences = [
    {
      title: "Sustainable Safari",
      location: "Maasai Mara, Kenya",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
      tags: ["Nature", "Eco-Friendly"],
      description: "Witness the great migration with zero-emission electric vehicles and luxury eco-lodges."
    },
    {
      title: "Zen Temple Retreat",
      location: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
      tags: ["Culture", "Wellness"],
      description: "A 5-day immersion into mindfulness, tea ceremonies, and traditional forest bathing."
    },
    {
      title: "Alpine Gastronomy",
      location: "Dolomites, Italy",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop",
      tags: ["Food", "Adventure"],
      description: "Hike through stunning peaks and stop at high-altitude 'rifugios' for Michelin-star cuisine."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-12 hover:-translate-x-1 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </button>

        <div className="text-center mb-20">
          <span className="text-primary font-extrabold uppercase tracking-[0.2em] text-sm mb-4 block">Curated Moments</span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-dark mb-6">Signature Experiences</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Beyond just sightseeing, we offer immersive journeys that connect you deeply with local cultures and landscapes.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-2 mb-3">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-accent text-dark text-[10px] font-black uppercase tracking-wider rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-white/70 text-sm flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {exp.location}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed px-2 line-clamp-2">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Highlight */}
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">Create Your Own Custom Experience</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Don't see exactly what you're looking for? Our travel architects can design a bespoke experience tailored precisely to your passions—whether it's photography, culinary arts, or extreme sports.
            </p>
            <button className="px-8 py-4 bg-accent text-dark font-black rounded-2xl hover:bg-white transition-all shadow-xl shadow-black/10">
              Consult an Architect
            </button>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl aspect-square object-cover shadow-2xl" alt="Custom 1" />
            <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl aspect-square object-cover shadow-2xl mt-8" alt="Custom 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
