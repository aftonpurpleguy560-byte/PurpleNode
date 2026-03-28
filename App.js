import React, { useState } from 'react';
import { Play, Square, RefreshCw, Terminal, Cpu, HardDrive } from 'lucide-react';

const PurpleNodeDashboard = () => {
  const [status, setStatus] = useState('OFFLINE');

  return (
    <div className="min-h-screen bg-black text-purple-400 font-sans p-6 selection:bg-purple-900 selection:text-white">
      {/* Header Kısmı */}
      <header className="flex justify-between items-center border-b border-purple-900/50 pb-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
            PURPLENODE <span className="text-[10px] align-top text-purple-700">v1.0</span>
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">Minecraft Server Manager</p>
        </div>
        <div className="flex items-center gap-2 bg-purple-900/10 px-4 py-2 rounded-full border border-purple-800/30">
          <div className={`w-3 h-3 rounded-full animate-pulse ${status === 'ONLINE' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-500 shadow-[0_0_10px_#ef4444]'}`}></div>
          <span className="text-sm font-bold tracking-widest">{status}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kontrol Kartı */}
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900/30 border border-purple-900/30 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Play size={18} /> HIZLI İŞLEMLER
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => setStatus('ONLINE')}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-purple-600/10 border border-purple-500/30 hover:bg-purple-600/20 transition-all group"
              >
                <Play className="text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase">Başlat</span>
              </button>
              <button 
                onClick={() => setStatus('OFFLINE')}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-red-600/10 border border-red-500/30 hover:bg-red-600/20 transition-all group"
              >
                <Square className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase">Durdur</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 transition-all group">
                <RefreshCw className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase">Yeniden</span>
              </button>
            </div>
          </div>

          {/* Konsol Alanı */}
          <div className="bg-[#0a0a0a] border border-purple-900/50 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-purple-900/20 px-4 py-2 border-b border-purple-900/50 flex items-center gap-2">
              <Terminal size={14} className="text-purple-400" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Server_Console_Output</span>
            </div>
            <div className="p-4 h-48 font-mono text-[11px] overflow-y-auto space-y-1">
              <p className="text-gray-500">[14:20:01] <span className="text-blue-400">INFO</span>: Sunucu başlatılıyor...</p>
              <p className="text-gray-500">[14:20:05] <span className="text-yellow-400">WARN</span>: Bedrock sürümü güncellendi!</p>
              <p className="text-gray-500">[14:20:10] <span className="text-green-400">SUCCESS</span>: Port 19132 aktif.</p>
              <p className="text-purple-400 animate-pulse underline italic">_</p>
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <aside className="space-y-6">
          <div className="bg-gray-900/30 border border-purple-900/30 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-tighter text-purple-300">İstatistikler</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Cpu size={12}/> CPU Kullanımı</span>
                  <span>12%</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-purple-500 w-[12%] shadow-[0_0_10px_#a855f7]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1"><HardDrive size={12}/> RAM (8GB)</span>
                  <span>2.4GB</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-purple-500 w-[30%] shadow-[0_0_10px_#a855f7]"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <footer className="mt-12 text-center border-t border-purple-900/30 pt-4">
        <p className="text-[10px] text-purple-900 font-bold uppercase tracking-[0.5em]">Purpleguy © 2026 - tablet power</p>
      </footer>
    </div>
  );
};

export default PurpleNodeDashboard;

