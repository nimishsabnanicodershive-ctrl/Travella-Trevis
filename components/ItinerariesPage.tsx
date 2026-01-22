
import React, { useState, useEffect } from 'react';

const ItinerariesPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedItinerary, setSelectedItinerary] = useState<any | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('travella_wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Failed to parse wishlist", e);
      }
    }
  }, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('travella_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const itineraries = [
    {
      id: 'it-1',
      title: "The Ultimate Nordic Circuit",
      days: 10,
      price: 3400,
      region: "Scandinavia",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      highlights: ["Northern Lights Chasing", "Fjord Cruise", "Glacier Trekking"],
      visitPlaces: [
        { name: "Reykjavik Old Harbor", desc: "Whale watching and local seafood" },
        { name: "Geirangerfjord", desc: "Deep blue water and snow-capped peaks" },
        { name: "Lofoten Islands", desc: "Traditional red fishing huts and dramatic mountains" },
        { name: "Abisko National Park", desc: "The best place on earth for Northern Lights" }
      ]
    },
    {
      id: 'it-2',
      title: "Mediterranean Coastal Escape",
      days: 7,
      price: 1800,
      region: "Italy & Greece",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop",
      highlights: ["Hidden Coves", "Vineyard Tours", "Ancient Ruins"],
      visitPlaces: [
        { name: "Amalfi Coast Drive", desc: "Stunning cliffside villages and turquoise sea" },
        { name: "Santorini Oia", desc: "Iconic blue domes and legendary sunsets" },
        { name: "Ancient Parthenon", desc: "The birthplace of Western civilization" },
        { name: "Cinque Terre", desc: "Hiking between five colorful fishing villages" }
      ]
    },
    {
      id: 'it-3',
      title: "Trans-Himalayan Spirit",
      days: 14,
      price: 2600,
      region: "Nepal & Bhutan",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
      highlights: ["Everest Base Camp", "Monastery Stays", "High Mountain Passes"],
      visitPlaces: [
        { name: "Tiger's Nest Monastery", desc: "A sacred site clinging to a vertical cliff" },
        { name: "Kala Patthar", desc: "The closest view of Mount Everest summit" },
        { name: "Patan Durbar Square", desc: "Exquisite Newari architecture and art" },
        { name: "Punakha Dzong", desc: "One of the most beautiful fortresses in Bhutan" }
      ]
    }
  ];

  const handleViewTrail = (itinerary: any) => {
    setSelectedItinerary(itinerary);
  };

  const closeTrailDetails = () => {
    setSelectedItinerary(null);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-12 hover:-translate-x-1 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </button>

        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-extrabold uppercase tracking-widest text-sm mb-4 block">Proven Paths</span>
            <h1 className="text-5xl md:text-6xl font-serif font-black text-dark mb-6">Masterfully Crafted <span className="text-primary italic">Itineraries</span></h1>
            <p className="text-slate-500 text-lg">We've spent thousands of hours perfecting these routes so you don't have to. Every turn, stay, and meal has been tested by our trail scouts.</p>
          </div>
          <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl">
            <button className="px-6 py-2 bg-white rounded-xl shadow-sm text-sm font-bold text-dark">All</button>
            <button className="px-6 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-dark">Short Trips</button>
            <button className="px-6 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-dark">Expeditions</button>
          </div>
        </div>

        <div className="space-y-12">
          {itineraries.map((it) => (
            <div 
              key={it.id} 
              onClick={() => handleViewTrail(it)}
              className="group flex flex-col lg:flex-row bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
            >
              <div className="lg:w-2/5 relative overflow-hidden h-72 lg:h-auto">
                <img src={it.image} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-xs font-black text-primary shadow-sm">
                  {it.days} DAYS
                </div>
                {wishlist.includes(it.id) && (
                  <div className="absolute top-6 right-6 p-2 bg-red-500 text-white rounded-full shadow-lg animate-in zoom-in duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                )}
              </div>
              
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">{it.region}</span>
                    <h3 className="text-3xl font-black text-dark group-hover:text-primary transition-colors">{it.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-bold uppercase block">Starting From</span>
                    <span className="text-2xl font-black text-dark">${it.price}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {it.highlights.map(h => (
                    <span key={h} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewTrail(it);
                    }}
                    className="flex-1 lg:flex-none px-8 py-4 bg-primary text-white font-black rounded-2xl hover:bg-dark transition-all shadow-lg shadow-primary/20"
                  >
                    View Full Trail
                  </button>
                  <button 
                    onClick={(e) => toggleWishlist(it.id, e)}
                    className={`p-4 rounded-2xl border transition-all ${
                      wishlist.includes(it.id) 
                        ? 'bg-red-50 border-red-100 text-red-500' 
                        : 'border-slate-200 hover:bg-white text-slate-400 hover:text-red-400'
                    }`}
                    title={wishlist.includes(it.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill={wishlist.includes(it.id) ? "currentColor" : "none"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trail Details Modal */}
        {selectedItinerary && (
          <div className="fixed inset-0 bg-dark/90 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-[2rem] sm:rounded-[3.5rem] max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-500 relative scrollbar-hide">
              
              {/* Sticky Header for Mobile */}
              <div className="sticky top-0 z-30 flex justify-end p-4 lg:hidden">
                <button 
                  onClick={closeTrailDetails}
                  className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg text-dark"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              {/* Layout Container */}
              <div className="flex flex-col lg:flex-row min-h-full">
                
                {/* Visual Section - Fixed on Desktop */}
                <div className="lg:w-[45%] lg:sticky lg:top-0 lg:h-[95vh] relative overflow-hidden">
                  <img 
                    src={selectedItinerary.image}
                    alt={selectedItinerary.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                  
                  {/* Desktop Close Button */}
                  <button 
                    onClick={closeTrailDetails}
                    className="hidden lg:flex absolute top-8 left-8 w-14 h-14 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full items-center justify-center transition-all text-white hover:scale-110 active:scale-95 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-90 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
                  </button>

                  <div className="absolute bottom-12 left-8 right-8">
                    <div className="flex gap-2 mb-4">
                      <span className="px-4 py-1.5 bg-accent text-dark text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg">
                        {selectedItinerary.days} Days
                      </span>
                      <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20">
                        {selectedItinerary.region}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-4 leading-tight">
                      {selectedItinerary.title}
                    </h2>
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Starting From</p>
                        <p className="text-3xl font-black text-accent">${selectedItinerary.price}</p>
                      </div>
                      <div className="h-10 w-[1px] bg-white/20"></div>
                      <div>
                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Trail Status</p>
                        <p className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                          Now Open
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-[55%] p-8 lg:p-16">
                  
                  {/* Highlights Bar */}
                  <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-slate-100"></div>
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Signature Highlights</h3>
                      <div className="h-px flex-1 bg-slate-100"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedItinerary.highlights.map((highlight: string, idx: number) => (
                        <div key={idx} className="group p-4 bg-slate-50 hover:bg-primary/5 rounded-2xl border border-slate-100 transition-all flex items-center gap-4">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="primary" strokeWidth="2.5" className="text-primary"><polyline points="20 6 9 17 4 12"/></svg>
                          </div>
                          <span className="font-bold text-dark">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Places Section */}
                  <div className="mb-16">
                    <h3 className="text-3xl font-serif font-black text-dark mb-8">Iconic Trail Stops</h3>
                    <div className="space-y-8 relative">
                      {/* Vertical Line */}
                      <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-slate-100 hidden sm:block"></div>
                      
                      {selectedItinerary.visitPlaces.map((place: any, idx: number) => (
                        <div key={idx} className="relative sm:pl-16 flex flex-col sm:flex-row gap-4 group">
                          {/* Circle on line */}
                          <div className="absolute left-4 top-0 w-4 h-4 rounded-full border-4 border-white bg-primary shadow-md hidden sm:block z-10 group-hover:scale-125 transition-transform"></div>
                          
                          <div className="flex-1">
                            <h4 className="text-xl font-black text-dark mb-1">{place.name}</h4>
                            <p className="text-slate-500 font-medium">{place.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Included Grid */}
                  <div className="mb-16 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8 text-center">Your Package Includes</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
                        </div>
                        <p className="text-xs font-black text-dark uppercase mb-1">Stays</p>
                        <p className="text-[10px] text-slate-500 font-bold">Premium Hotels</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
                        </div>
                        <p className="text-xs font-black text-dark uppercase mb-1">Dining</p>
                        <p className="text-[10px] text-slate-500 font-bold">All Breakfasts</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <p className="text-xs font-black text-dark uppercase mb-1">24/7 Support</p>
                        <p className="text-[10px] text-slate-500 font-bold">Local Experts</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-lg">
                      Reserve My Spot
                    </button>
                    <button className="px-8 py-5 border-2 border-slate-200 text-dark font-black rounded-2xl hover:bg-slate-50 transition-all">
                      Download PDF
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Custom Section */}
        <div className="mt-24 p-12 bg-accent rounded-[3rem] text-dark flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="max-w-xl">
            <h3 className="text-3xl font-black mb-4">Need a path that’s truly your own?</h3>
            <p className="text-dark/70 font-bold">Use our AI Planner on the homepage or chat with our destination architects to mix and match activities from different trails.</p>
          </div>
          <button onClick={onBack} className="px-10 py-5 bg-dark text-white font-black rounded-2xl whitespace-nowrap hover:scale-105 transition-all">
            Open AI Planner
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItinerariesPage;
