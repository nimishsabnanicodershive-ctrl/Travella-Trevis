
import React, { useState } from 'react';

interface CheckoutProps {
  destinationName: string;
  price: number;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutProps> = ({ destinationName, price, onClose }) => {
  const [step, setStep] = useState<'details' | 'confirming' | 'success'>('details');
  const [email, setEmail] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirming');
    // Simulate a brief processing time
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-300">
        
        {step === 'details' && (
          <div className="p-10 animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif font-black text-dark">Reserve Your Trip</h2>
              <button onClick={onClose} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl mb-8 border border-primary/10">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Destination</p>
              <h3 className="text-xl font-bold text-dark mb-3">{destinationName}</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Starting Price</p>
              <p className="text-2xl font-black text-primary">${price}</p>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="explorer@trail.com"
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-primary text-white font-black rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        )}

        {step === 'confirming' && (
          <div className="p-20 text-center space-y-8 animate-in fade-in">
             <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
             <div>
               <h3 className="text-xl font-black text-dark mb-2">Securing Your Spot</h3>
               <p className="text-slate-500 text-sm">Checking availability and preparing your tickets...</p>
             </div>
          </div>
        )}

        {step === 'success' && (
          <div className="animate-in zoom-in-95 duration-500">
            <div className="bg-primary p-12 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-3xl font-serif font-black mb-2">Booking Confirmed</h3>
              <p className="text-white/70 font-medium">Adventure awaits in {destinationName}!</p>
            </div>
            <div className="p-10 text-center">
               <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                 A confirmation email with your detailed itinerary has been sent to <strong>{email}</strong>.
               </p>
               <button onClick={onClose} className="w-full py-4 bg-dark text-white font-black rounded-xl shadow-xl hover:bg-slate-800 transition-all">Back to Destinations</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutModal;
