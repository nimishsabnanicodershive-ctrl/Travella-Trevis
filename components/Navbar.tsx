
import React, { useState } from 'react';
import { MenuIcon } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">T</div>
            <span className="text-xl font-bold tracking-tight text-dark">Travella <span className="text-primary">Trails</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" onClick={handleNavClick('home')} className={`hover:text-primary transition-colors ${currentPage === 'home' ? 'text-primary' : ''}`}>Destinations</a>
            <a href="#" onClick={handleNavClick('itineraries')} className={`hover:text-primary transition-colors ${currentPage === 'itineraries' ? 'text-primary' : ''}`}>Itineraries</a>
            <a href="#" onClick={handleNavClick('experience')} className={`hover:text-primary transition-colors ${currentPage === 'experience' ? 'text-primary' : ''}`}>Experience</a>
            <a href="#" onClick={handleNavClick('about')} className={`hover:text-primary transition-colors ${currentPage === 'about' ? 'text-primary' : ''}`}>About</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-primary">Login</button>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <a href="#" onClick={handleNavClick('home')} className={`text-lg font-semibold border-b border-slate-100 pb-2 ${currentPage === 'home' ? 'text-primary' : ''}`}>Destinations</a>
          <a href="#" onClick={handleNavClick('itineraries')} className={`text-lg font-semibold border-b border-slate-100 pb-2 ${currentPage === 'itineraries' ? 'text-primary' : ''}`}>Itineraries</a>
          <a href="#" onClick={handleNavClick('experience')} className={`text-lg font-semibold border-b border-slate-100 pb-2 ${currentPage === 'experience' ? 'text-primary' : ''}`}>Experience</a>
          <a href="#" onClick={handleNavClick('about')} className={`text-lg font-semibold ${currentPage === 'about' ? 'text-primary' : ''}`}>About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
