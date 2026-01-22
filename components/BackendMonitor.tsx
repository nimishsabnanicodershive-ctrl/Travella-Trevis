
import React, { useState, useEffect } from 'react';
import { backendEngine } from '../services/backendEngine';

const BackendMonitor: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [status, setStatus] = useState<any>(null);
  const [pendingTx, setPendingTx] = useState<any[]>([]);
  const [logs, setLogs] = useState<string[]>(["[SYSTEM] Kernel active...", "[GATEWAY] Awaiting traffic..."]);

  const refreshData = async () => {
    const s = await backendEngine.getSystemStatus();
    const t = await backendEngine.getPendingTransactions();
    setStatus(s);
    setPendingTx(t);
  };

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleManualVerification = async (txId: string) => {
    setLogs(prev => [...prev, `[USER_ACTION] Triggering manual credit for ${txId}...`]);
    const res = await backendEngine.system_receiveExternalFunds(txId);
    if (res.success) {
      setLogs(prev => [...prev, `[SUCCESS] ${txId} settled manually. Notifying webhooks...`]);
      refreshData();
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen pt-32 pb-20 font-mono text-green-400 selection:bg-green-500/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <button 
            onClick={onBack}
            className="text-white hover:text-green-400 flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg transition-all"
          >
            &larr; Exit System Shell
          </button>
          <div className="text-[10px] font-black uppercase text-white/40 tracking-widest">
            Production Environment // Secured Access
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Controls */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border border-green-500/30 bg-black/80 p-8 rounded-3xl shadow-2xl">
              <h2 className="text-white text-sm font-black uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Active Payment Gateway
              </h2>

              <div className="space-y-4">
                {pendingTx.length === 0 ? (
                  <div className="p-10 text-center border border-dashed border-white/10 rounded-2xl opacity-40">
                    <p className="text-xs italic">No pending transactions detected in the vault.</p>
                  </div>
                ) : (
                  pendingTx.map(tx => (
                    <div key={tx.txId} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:border-green-500/50 transition-all">
                      <div>
                        <p className="text-xs font-black text-white">{tx.txId}</p>
                        <p className="text-[10px] text-green-500/70 font-bold">Amount: ₹{tx.amount}.00</p>
                      </div>
                      <button 
                        onClick={() => handleManualVerification(tx.txId)}
                        className="bg-green-600 text-black px-4 py-2 rounded-lg text-[10px] font-black hover:bg-green-400 transition-colors uppercase"
                      >
                        Approve Funds
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="border border-white/10 bg-black/80 p-8 rounded-3xl h-64 overflow-hidden relative">
              <h3 className="text-white/40 text-[10px] font-black uppercase mb-4">Live System Logs</h3>
              <div className="text-[10px] space-y-1 overflow-y-auto h-40 scrollbar-hide">
                {logs.map((log, i) => (
                  <p key={i} className={log.includes('SUCCESS') ? 'text-white' : 'text-green-500/60'}>{log}</p>
                ))}
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div className="space-y-8">
            <div className="border border-white/10 bg-black/80 p-6 rounded-3xl">
              <h3 className="text-white/40 text-[10px] font-black uppercase mb-6">Metrics</h3>
              {status && (
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-white/20 uppercase font-black">Load Node</p>
                    <p className="text-sm font-bold text-white">{status.server}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase font-black">Vault Status</p>
                    <p className="text-sm font-bold text-green-400">ENCRYPTED // ACTIVE</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase font-black">Active Connections</p>
                    <p className="text-3xl font-black text-white">{status.active_connections}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-3xl">
               <h3 className="text-green-500 text-[10px] font-black uppercase mb-2">Developer Note</h3>
               <p className="text-[10px] text-green-500/60 leading-relaxed">
                 To demonstrate the 'Hotstar-style' verification, keep the booking modal open in another tab, then use this shell to 'Approve Funds'. The website will auto-detect the settlement via Polling.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendMonitor;
