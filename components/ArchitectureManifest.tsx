
import React from 'react';

const ArchitectureManifest: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 font-sans selection:bg-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:opacity-70 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Dashboard
        </button>

        {/* Simplified Header */}
        <div className="border-l-4 border-primary pl-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-dark mb-4">How Travella Trails Works</h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">We’ve combined expert travel knowledge with smart technology to make your trip planning simple, fast, and inspiring.</p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Section 1: The Smart Planner */}
          <div className="space-y-8">
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 text-2xl">
                🧠
              </div>
              <h2 className="text-2xl font-black text-dark mb-4">Our "Smart Brain" (AI)</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Whenever you type a dream destination into our planner, a powerful AI called <strong>Gemini</strong> goes to work. It scans thousands of travel possibilities to create a personalized 3-day plan just for you in seconds.</p>
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl">
                <p className="text-xs font-bold text-slate-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"/> Personalized for your interests
                </p>
                <p className="text-xs font-bold text-slate-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"/> Accurate local vibes and themes
                </p>
                <p className="text-xs font-bold text-slate-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"/> Instant results—no waiting for emails
                </p>
              </div>
            </div>

            <div className="p-8 bg-dark rounded-[2.5rem] text-white">
              <h2 className="text-2xl font-black mb-4">Why is it so fast?</h2>
              <p className="text-white/70 leading-relaxed mb-6">Our website is built using "React," which means instead of reloading the whole page every time you click, it only changes the parts you need to see. It’s like turning a page in a book instead of waiting for a new book to arrive.</p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold">No Waiting</div>
                <div className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold">Mobile Ready</div>
              </div>
            </div>
          </div>

          {/* Section 2: The Experience */}
          <div className="space-y-8">
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-dark mb-6">Your Journey at a Glance</h2>
              <div className="space-y-4">
                {[
                  { name: "Discovery Hub", desc: "Browse 35+ hand-picked world destinations.", icon: "🌍" },
                  { name: "Expert Guides", desc: "Routes tested and approved by travel pros.", icon: "🗺️" },
                  { name: "Immersive View", desc: "Big, beautiful photos to help you feel the vibe.", icon: "📸" },
                  { name: "Safe & Secure", desc: "Your data stays private while you explore.", icon: "🛡️" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-default">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-sm text-dark">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-accent rounded-[2.5rem] text-dark relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <h2 className="text-2xl font-black mb-4">Our Design Style</h2>
              <p className="text-sm font-medium mb-6 opacity-80">We use soft colors and clear fonts to make sure you can find information easily without getting overwhelmed.</p>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/50 p-3 rounded-xl">
                  <span className="block text-lg">🎨</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Modern Colors</span>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <span className="block text-lg">✍️</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Easy Reading</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-20 pt-10 border-t border-slate-200 text-center">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">Travella Trails Technical Summary for Everyone</p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureManifest;
