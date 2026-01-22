
import React, { useState } from 'react';
import { Destination } from '../types';
import CheckoutModal from './CheckoutModal';

interface Props {
  destination: Destination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer" onClick={() => setShowCheckout(true)}>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full text-primary">
          {destination.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-dark">{destination.name}</h3>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {destination.country}
            </p>
          </div>
          <div className="flex items-center gap-1 text-secondary font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            {destination.rating}
          </div>
        </div>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-xs text-primary font-bold uppercase tracking-widest flex items-center gap-2">
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
          <span className="text-sm font-black text-dark">${destination.price}</span>
        </div>
      </div>
      </div>
      
      {showCheckout && (
        <CheckoutModal 
          destinationName={destination.name}
          price={destination.price}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
};

export default DestinationCard;
