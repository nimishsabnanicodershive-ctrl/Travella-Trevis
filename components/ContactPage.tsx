import React, { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Fake delay to show feedback
    setTimeout(() => {
      setStatus('success');
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 800);
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 min-h-screen pt-32 pb-20 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-12 hover:-translate-x-1 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Intro / Info */}
          <div>
            <span className="text-primary font-extrabold uppercase tracking-widest text-sm mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-dark mb-6 leading-tight">
              We'd Love to <span className="text-primary">Hear From You</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              Whether you have a question about an itinerary, need help planning a custom trip,
              or just want to say hello, our travel architects are here for you.
            </p>
            <div className="space-y-4 text-sm md:text-base text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <polyline points="4,4 12,12 20,4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <p>support@travellatrails.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.86.37 1.7.72 2.49a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.59-1.18a2 2 0 0 1 2.11-.45c.79.35 1.63.6 2.49.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-dark">WhatsApp</p>
                  <p>+1 (555) 012-3456</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-dark">Head Office</p>
                  <p>19 Explorer Lane, Suite 202, Singapore</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Typically replies in under 24 hours
              </span>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-600">Follow us</span>
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs hover:bg-slate-700 transition"
                  aria-label="Visit our Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs hover:bg-slate-700 transition"
                  aria-label="Visit our Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.2 9 4-.5-2.1.9-4.2 3-4.6 1.3-.3 2.6.2 3.4 1.2.8-.1 2-1.1 2-1.1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100/80 p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
            <h2 className="text-2xl font-serif font-black text-dark mb-2 relative z-10">Send us a message</h2>
            <p className="text-sm text-slate-500 mb-6 relative z-10">
              Share a few details about your trip and we&apos;ll pair you with the perfect travel architect.
            </p>
            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    placeholder="Alex Explorer"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                  placeholder="I want to plan a trip to..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none"
                  placeholder="Tell us about your dream itinerary, dates, and preferences."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-primary text-white font-black text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-60"
                >
                  {status === 'submitting' && 'Sending...'}
                  {status === 'idle' && 'Submit Message'}
                  {status === 'success' && 'Message Sent!'}
                </button>
                <p className="text-xs text-slate-500 max-w-xs">
                  We typically respond within <span className="font-semibold text-dark">24 hours</span>. For urgent changes to existing trips, please use your travel concierge link.
                </p>
              </div>

              {status === 'success' && (
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p>Your message has been sent. Our travel architects will reach out soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
