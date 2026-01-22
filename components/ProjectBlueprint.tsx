
import React from 'react';

const ProjectBlueprint: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-[#0f172a] min-h-screen pt-32 pb-20 font-sans text-white/90 selection:bg-primary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-white/10 pb-12">
          <div>
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-accent font-bold mb-6 hover:opacity-70 transition-all uppercase tracking-widest text-xs"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Exit Blueprint
            </button>
            <h1 className="text-5xl font-serif font-black mb-4">Platform Blueprint</h1>
            <p className="text-white/50 text-lg max-w-xl">Technical mapping of the Travella Trails digital ecosystem.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono uppercase tracking-tighter">
               Build: v1.4.2-Stable
             </div>
             <div className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-lg text-[10px] font-mono text-primary uppercase tracking-tighter">
               Status: Production
             </div>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Column 1: Layout & Structure */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
              </div>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="text-accent text-sm font-mono italic">01.</span> Visual Architecture
              </h2>
              
              <div className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-accent uppercase tracking-widest">Header & Nav</h4>
                    <p className="text-sm text-white/60 leading-relaxed">Floating "Glassmorphic" container with blur effect. Persistent state tracking for active menu highlighting.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-accent uppercase tracking-widest">Hero Section</h4>
                    <p className="text-sm text-white/60 leading-relaxed">Parallax image engine with centralized AI input portal. Animated "Next Trail" typography with Playfair Display.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-accent uppercase tracking-widest">Discovery Grid</h4>
                    <p className="text-sm text-white/60 leading-relaxed">Dynamic category filtering system. Cards utilize 3D-hover transforms and multi-layer gradients.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-accent uppercase tracking-widest">Footer Hub</h4>
                    <p className="text-sm text-white/60 leading-relaxed">4-Column high-contrast layout for site-wide navigation and technical transparency.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Data Flow */}
            <div className="p-10 bg-accent rounded-[2.5rem] text-dark">
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="text-dark/40 text-sm font-mono italic">02.</span> Intelligence Pipeline
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="bg-white/40 p-6 rounded-3xl border border-white/50 w-full md:w-auto text-center">
                  <span className="block text-xs font-black uppercase mb-2">User Intent</span>
                  <div className="text-[10px] font-mono bg-dark/10 p-2 rounded">"Kyoto in Spring"</div>
                </div>
                <div className="hidden md:block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div className="bg-dark text-white p-6 rounded-3xl w-full md:w-auto text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-dark text-[8px] px-2 py-0.5 rounded font-black uppercase">Gemini 3 Flash</div>
                  <span className="block text-xs font-black uppercase mb-2">Process Engine</span>
                  <div className="animate-pulse text-accent text-[10px]">Processing JSON...</div>
                </div>
                <div className="hidden md:block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div className="bg-white/40 p-6 rounded-3xl border border-white/50 w-full md:w-auto text-center">
                  <span className="block text-xs font-black uppercase mb-2">UI Render</span>
                  <div className="text-[10px] font-mono bg-dark/10 p-2 rounded">Itinerary Card</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Tech Specs */}
          <div className="space-y-8">
            <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10">
              <h3 className="text-xl font-black mb-6">Technical Stack</h3>
              <div className="space-y-4">
                {[
                  { label: "Core Runtime", value: "React 19" },
                  { label: "Type Logic", value: "TypeScript 5.x" },
                  { label: "Design System", value: "Tailwind JIT" },
                  { label: "AI Backend", value: "Google GenAI" },
                  { label: "Fonts", value: "Playfair / Jakarta" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-xs font-mono text-accent">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-primary/20 rounded-[2.5rem] border border-primary/30">
              <h3 className="text-xl font-black mb-6">Development Milestones</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/40">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                  <h5 className="text-xs font-black mb-1">UI Design Approved</h5>
                  <p className="text-[10px] text-white/50">Modern-minimal travel aesthetic.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/40">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                  <h5 className="text-xs font-black mb-1">Core Components Live</h5>
                  <p className="text-[10px] text-white/50">Reusable DestinationCard & Page Shells.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/40">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-2 bg-primary animate-pulse rounded-full" />
                  <h5 className="text-xs font-black mb-1">AI Logic Optimization</h5>
                  <p className="text-[10px] text-white/50">Real-time JSON response mapping.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Info */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em]">Internal Architectural Manifest // Confidential</p>
          <div className="text-[10px] font-mono">© 2025 TRAVELLA TRAILS ENG</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlueprint;
