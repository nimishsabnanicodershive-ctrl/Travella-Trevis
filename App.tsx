
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import DestinationCard from './components/DestinationCard';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ItinerariesPage from './components/ItinerariesPage';
import BlueprintPage from './components/BlueprintPage';
import ArchitectureManifest from './components/ArchitectureManifest';
import ProjectBlueprint from './components/ProjectBlueprint';
import ContactPage from './components/ContactPage';
import { DESTINATIONS, SearchIcon, MenuIcon } from './constants';

type Page = 'home' | 'about' | 'experience' | 'itineraries' | 'blueprint' | 'architecture' | 'platform-blueprint' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [search, setSearch] = useState('');
  const [aiResult, setAiResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [filter, setFilter] = useState<'All' | 'Beach' | 'Nature' | 'City' | 'Culture'>('All');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  

  const navigateTo = (page: Page) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentPage(page);
    setMobileNavOpen(false);
  };

  const filteredDestinations = filter === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === filter);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg border border-white/40">
            <button 
              onClick={navigateTo('home')} 
              className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
              aria-label="Go to home page"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold" aria-hidden="true">T</div>
              <span className="text-xl font-bold tracking-tight text-dark">Travella <span className="text-primary">Trails</span></span>
            </button>

            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
              <a href="#" onClick={navigateTo('home')} className={`hover:text-primary transition-colors ${currentPage === 'home' ? 'text-primary' : ''}`}>Destinations</a>
              <a href="#" onClick={navigateTo('itineraries')} className={`hover:text-primary transition-colors ${currentPage === 'itineraries' ? 'text-primary' : ''}`}>Itineraries</a>
              <a href="#" onClick={navigateTo('experience')} className={`hover:text-primary transition-colors ${currentPage === 'experience' ? 'text-primary' : ''}`}>Experience</a>
              <a href="#" onClick={navigateTo('about')} className={`hover:text-primary transition-colors ${currentPage === 'about' ? 'text-primary' : ''}`}>About</a>
              <a href="#" onClick={navigateTo('contact')} className={`hover:text-primary transition-colors ${currentPage === 'contact' ? 'text-primary' : ''}`}>Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
               <button className="text-sm font-bold text-primary">Login</button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 text-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {mobileNavOpen && (
        <div className="md:hidden fixed top-[76px] left-0 right-0 z-40 px-4">
          <div className="glass rounded-2xl p-4 shadow-2xl flex flex-col gap-3 bg-white/95 border border-slate-100">
            <button
              onClick={navigateTo('home')}
              className={`text-base font-semibold text-left py-2 px-1 rounded-lg ${currentPage === 'home' ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
            >
              Destinations
            </button>
            <button
              onClick={navigateTo('itineraries')}
              className={`text-base font-semibold text-left py-2 px-1 rounded-lg ${currentPage === 'itineraries' ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
            >
              Itineraries
            </button>
            <button
              onClick={navigateTo('experience')}
              className={`text-base font-semibold text-left py-2 px-1 rounded-lg ${currentPage === 'experience' ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
            >
              Experience
            </button>
            <button
              onClick={navigateTo('about')}
              className={`text-base font-semibold text-left py-2 px-1 rounded-lg ${currentPage === 'about' ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
            >
              About
            </button>
            <button
              onClick={navigateTo('contact')}
              className={`text-base font-semibold text-left py-2 px-1 rounded-lg ${currentPage === 'contact' ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {currentPage === 'home' && (
        <>
          <section ref={heroSectionRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover scale-105"
                alt="Hero Background"
              />
              <div className="absolute inset-0 hero-gradient"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
              <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-md text-accent text-sm font-bold rounded-full mb-6 border border-accent/30 animate-bounce">
                Explore Your Dream Escape 2025
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-serif leading-tight">
                Discover Your <br/><span className="text-accent italic">Next Trail</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
                Join thousands of explorers who trust Travella Trails for their curated, seamless, and unforgettable travel experiences across the globe.
              </p>

              <div className="max-w-xl mx-auto glass rounded-2xl p-2 shadow-2xl">
                <form className="flex items-center bg-white rounded-xl p-1" onSubmit={async (e) => {
                  e.preventDefault();
                  if (!search.trim()) {
                    searchInputRef.current?.focus();
                    return;
                  }
                  try {
                    setError('');
                    setLoading(true);

                    const prompt = `Create a 3-day travel itinerary for: ${search}. Return strict JSON with shape: { "title": string, "summary": string, "days": [{ "day": string, "theme": string, "activities": string[] }] }`;

                    const res = await fetch('/api/plan', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ prompt }),
                    });

                    if (!res.ok) {
                      throw new Error('Failed to generate itinerary');
                    }

                    const data = await res.json();
                    setAiResult(data);
                  } catch (err) {
                    console.error(err);
                    setError('We could not generate a plan right now. Please try again in a moment.');
                  } finally {
                    setLoading(false);
                  }
                }}>

                  <div className="flex-1 flex items-center gap-3 px-4">
                    <SearchIcon />
                    <input 
                      ref={searchInputRef}
                      type="text" 
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Where do you want to go?" 
                      className="w-full py-3 bg-transparent outline-none text-slate-700 font-medium placeholder:text-slate-400"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all disabled:opacity-50"
                  >
                    {loading ? 'Thinking...' : 'AI Planner'}
                  </button>
                </form>
                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-20">
            {aiResult && (
              <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-slate-100">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                      <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-2">AI-Generated Itinerary</span>
                      <h2 className="text-4xl font-serif font-black text-dark mb-4">{aiResult.title}</h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-4">{aiResult.summary}</p>
                    </div>
                    <button onClick={() => setAiResult(null)} className="text-slate-400 hover:text-red-500 font-bold flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      Clear
                    </button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {aiResult.days.map((day: any) => (
                      <div key={day.day} className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold mb-4">
                          {day.day}
                        </div>
                        <h4 className="font-bold text-lg mb-3">{day.theme}</h4>
                        <ul className="space-y-3">
                          {day.activities.map((act: string, idx: number) => (
                            <li key={idx} className="flex gap-3 text-sm text-slate-600 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <section className="mb-20">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-black text-dark mb-4">Explore Destinations</h2>
                  <p className="text-slate-500 font-medium text-lg">Discovery made easy with {DESTINATIONS.length} handpicked spots.</p>
                </div>
                
                <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-2xl">
                  {['All', 'Beach', 'Nature', 'City', 'Culture'].map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setFilter(cat as any)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${filter === cat ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-dark'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredDestinations.map(dest => (
                  <DestinationCard key={dest.id} destination={dest as any} />
                ))}
              </div>
            </section>
          </main>
        </>
      )}

      {currentPage === 'about' && <AboutPage onBack={navigateTo('home')} />}
      {currentPage === 'experience' && <ExperiencePage onBack={navigateTo('home')} />}
      {currentPage === 'itineraries' && <ItinerariesPage onBack={navigateTo('home')} />}
      {currentPage === 'blueprint' && <BlueprintPage onBack={navigateTo('home')} />}
      {currentPage === 'architecture' && <ArchitectureManifest onBack={navigateTo('home')} />}
      {currentPage === 'platform-blueprint' && <ProjectBlueprint onBack={navigateTo('home')} />}
      {currentPage === 'contact' && <ContactPage onBack={navigateTo('home')} />}

      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={navigateTo('home')}>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">T</div>
                <span className="text-xl font-bold tracking-tight text-dark">Travella Trails</span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">Empowering explorers to see the world with comfort, trust, and ease since 2018.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-6">Explore</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" onClick={navigateTo('home')} className="hover:text-primary transition-colors">Destinations</a></li>
                <li><a href="#" onClick={navigateTo('itineraries')} className="hover:text-primary transition-colors">Itineraries</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" onClick={navigateTo('about')} className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-6">Technical</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" onClick={navigateTo('blueprint')} className="text-primary font-bold hover:underline">EOD Report</a></li>
                <li><a href="#" onClick={navigateTo('architecture')} className="hover:text-primary transition-colors">How it works</a></li>
                <li><a href="#" onClick={navigateTo('platform-blueprint')} className="hover:text-primary transition-colors">Blueprint Hub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm font-medium">© 2024 Travella Trails. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors font-bold">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors font-bold">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
