
import React from 'react';

const BlueprintPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white min-h-screen pt-12 pb-20 text-slate-900 font-sans print:pt-0 selection:bg-primary/10">
      <style>{`
        @media print {
          nav, .no-print { display: none !important; }
          body { font-size: 10pt; line-height: 1.4; color: #000; }
          .page-break { page-break-before: always; }
          @page { margin: 1.5cm; }
          .eod-tag { border: 1px solid #000 !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Navigation / Actions */}
        <div className="flex justify-between items-center mb-10 no-print border-b border-slate-100 pb-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 font-bold hover:text-primary transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Dashboard
          </button>
          
          <button 
            onClick={handlePrint}
            className="px-5 py-2 bg-primary text-white font-bold rounded-md hover:opacity-90 transition-all flex items-center gap-2 text-sm shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download EOD Report
          </button>
        </div>

        {/* EOD Report Header */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-serif font-black text-primary uppercase tracking-tight">Travella Trails</h1>
              <p className="text-sm font-bold text-slate-700">TECHNICAL ARCHITECTURE & PROGRESS REPORT</p>
            </div>
            <div className="eod-tag border-2 border-primary px-4 py-2 text-center rounded">
              <span className="block text-[10px] font-black text-primary uppercase">Report Status</span>
              <span className="text-xs font-bold">COMPLETED / EOD</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-slate-200 text-[11px] font-mono text-slate-600">
            <div><span className="font-bold text-slate-900 block">REPORT DATE:</span> {today}</div>
            <div><span className="font-bold text-slate-900 block">PROJECT ID:</span> TRV-TRL-2025</div>
            <div><span className="font-bold text-slate-900 block">LEAD ENG:</span> S. JENKINS</div>
            <div><span className="font-bold text-slate-900 block">ENV:</span> PRODUCTION-A</div>
          </div>
        </div>

        {/* Executive Summary Section */}
        <section className="mb-10">
          <h2 className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 mb-4 inline-block uppercase">01. Executive Summary</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            The platform architecture for Travella Trails has reached stable release status as of this reporting cycle. Key focuses today included the final integration of the Google Gemini AI planning service, optimization of the responsive rendering engine, and the deployment of a persistent state-based navigation system. The site currently supports 35 high-fidelity destinations and real-time itinerary generation.
          </p>
        </section>

        {/* Technical Breakdown Section */}
        <section className="mb-10">
          <h2 className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 mb-4 inline-block uppercase">02. Technical Infrastructure Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 p-4 rounded">
                <h3 className="text-xs font-bold text-primary uppercase mb-2">Core Stack (MERN Equivalent)</h3>
                <ul className="text-xs space-y-1.5 text-slate-600">
                  <li className="flex justify-between"><span>Runtime:</span> <span className="text-slate-900">ESM Browser Environment</span></li>
                  <li className="flex justify-between"><span>Framework:</span> <span className="text-slate-900">React 19 (Hooks)</span></li>
                  <li className="flex justify-between"><span>Type Logic:</span> <span className="text-slate-900">TypeScript 5.x</span></li>
                  <li className="flex justify-between"><span>Styling:</span> <span className="text-slate-900">Tailwind CSS (JIT)</span></li>
                </ul>
              </div>
              <div className="border border-slate-200 p-4 rounded">
                <h3 className="text-xs font-bold text-primary uppercase mb-2">AI Implementation</h3>
                <ul className="text-xs space-y-1.5 text-slate-600">
                  <li className="flex justify-between"><span>LLM Model:</span> <span className="text-slate-900">Gemini-3-Flash-Preview</span></li>
                  <li className="flex justify-between"><span>MimeType:</span> <span className="text-slate-900">application/json</span></li>
                  <li className="flex justify-between"><span>Integration:</span> <span className="text-slate-900">@google/generative-ai SDK</span></li>
                  <li className="flex justify-between"><span>Context:</span> <span className="text-slate-900">3-Day Structured Schema</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Deliverables Section */}
        <section className="mb-10 page-break">
          <h2 className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 mb-4 inline-block uppercase">03. End-of-Day Deliverables</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-y border-slate-200">
                  <th className="p-3 font-bold uppercase text-slate-500">Feature Module</th>
                  <th className="p-3 font-bold uppercase text-slate-500">Status</th>
                  <th className="p-3 font-bold uppercase text-slate-500">Implementation Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-bold">AI Itinerary Planner</td>
                  <td className="p-3"><span className="text-green-600 font-bold uppercase">Ready</span></td>
                  <td className="p-3 text-slate-600">Resolved JSON parsing edge cases and added error handling.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Destination Engine</td>
                  <td className="p-3"><span className="text-green-600 font-bold uppercase">Ready</span></td>
                  <td className="p-3 text-slate-600">O(1) lookup logic with real-time category filtering.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">State Routing</td>
                  <td className="p-3"><span className="text-green-600 font-bold uppercase">Ready</span></td>
                  <td className="p-3 text-slate-600">Virtual DOM routing enabled for Home/About/Experience.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Blueprint System</td>
                  <td className="p-3"><span className="text-blue-600 font-bold uppercase">Updated</span></td>
                  <td className="p-3 text-slate-600">Comprehensive EOD reporting view added for audit purposes.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Design System Details */}
        <section className="mb-10">
          <h2 className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 mb-4 inline-block uppercase">04. UI/UX Asset Specifications</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 border border-slate-100">
              <div className="w-full h-2 bg-primary mb-2"></div>
              <p className="text-[10px] font-bold">PRIMARY: #0F766E</p>
            </div>
            <div className="text-center p-3 border border-slate-100">
              <div className="w-full h-2 bg-accent mb-2"></div>
              <p className="text-[10px] font-bold">ACCENT: #BEF264</p>
            </div>
            <div className="text-center p-3 border border-slate-100">
              <div className="w-full h-2 bg-dark mb-2"></div>
              <p className="text-[10px] font-bold">DARK: #0F172A</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-slate-50 rounded text-[11px] text-slate-600">
            <strong>Accessibility Report:</strong> Color contrast ratio meets WCAG AA standards (4.5:1) for all core UI elements. Image alt-tags synced with destination name metadata for screen reader optimization.
          </div>
        </section>

        {/* Security & Audit Section */}
        <section className="mb-10">
          <h2 className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 mb-4 inline-block uppercase">05. Security & Risk Audit</h2>
          <div className="space-y-3">
            <div className="flex gap-4 items-start">
              <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">✓</span>
              <p className="text-xs text-slate-600"><strong>API Secret Sanitization:</strong> Environment variables used for all LLM gateway calls. No secrets stored in client-side constant buffers.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">✓</span>
              <p className="text-xs text-slate-600"><strong>CORS Policy:</strong> Restricted to trusted esm.sh and unsplash origins for asset security.</p>
            </div>
          </div>
        </section>

        {/* Final Sign-off */}
        <div className="mt-20 pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <p className="text-[10px] font-mono text-slate-400 mb-6 uppercase tracking-widest">Digital Authentication Signature</p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src="https://i.pravatar.cc/100?u=sarah" alt="Lead" className="w-14 h-14 rounded-full" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-lg font-serif font-black italic text-dark">Sarah Jenkins</p>
                  <p className="text-[10px] font-bold text-primary uppercase">Chief Architecture Officer</p>
                </div>
              </div>
            </div>
            <div className="text-right text-[10px] font-mono text-slate-400 uppercase leading-relaxed">
              Travella Trails EOD Internal Report<br/>
              © 2025 All System Rights Reserved<br/>
              Confidential // For Internal Stakeholders Only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPage;
