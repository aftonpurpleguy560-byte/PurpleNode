import React, { useState } from 'react';
import { 
  Play, Square, RefreshCw, Terminal, Cpu, HardDrive, Globe, User, 
  Lock, Mail, Sparkles, Folder, File, Trash2, LayoutGrid, Settings, 
  Users, History, ShieldCheck, Database, ChevronRight
} from 'lucide-react';

const languages = {
  tr: { 
    welcome: "Karanlığa Hoşgeldin", login: "Giriş Yap", register: "Kayıt Ol", 
    server: "SUNUCU", console: "KONSOL", files: "DOSYALAR", 
    software: "YAZILIM", players: "OYUNCULAR", backups: "YEDEKLER",
    settings: "AYARLAR", logs: "GÜNLÜK", access: "ERİŞİM"
  },
  en: { 
    welcome: "Welcome to Darkness", login: "Login", register: "Sign Up", 
    server: "SERVER", console: "CONSOLE", files: "FILES", 
    software: "SOFTWARE", players: "PLAYERS", backups: "BACKUPS",
    settings: "SETTINGS", logs: "LOGS", access: "ACCESS"
  }
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('server');
  const [lang, setLang] = useState('tr');
  const [serverStatus, setServerStatus] = useState('OFFLINE');
  
  const t = languages[lang] || languages.en;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-purple-400 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-[#080808] border border-purple-900/60 p-10 rounded-[40px] shadow-2xl">
          <div className="text-center mb-8">
            <Sparkles className="mx-auto text-purple-600 mb-3 animate-pulse" size={32} />
            <h1 className="text-4xl font-black tracking-tighter text-purple-500 italic">PURPLENODE</h1>
          </div>
          <button onClick={() => setIsLoggedIn(true)} className="w-full bg-purple-600 text-black font-black py-4 rounded-2xl shadow-[0_0_20px_#a855f744] hover:scale-[1.02] transition-all">
            {t.login.toUpperCase()}
          </button>
          <footer className="mt-8 text-center text-[8px] text-purple-900 font-black tracking-[0.4em]">
            Purpleguy © 2026 - tablet power
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-purple-400 font-sans flex overflow-hidden">
      {/* SIDEBAR - Tüm Eksik Menüler Burada */}
      <aside className="w-64 bg-[#050505] border-r border-purple-900/30 p-6 flex flex-col z-10 h-screen sticky top-0">
        <h1 className="text-2xl font-black text-purple-500 tracking-tighter italic mb-8">PN <span className="text-xs">PRO</span></h1>
        <nav className="space-y-1 overflow-y-auto pr-2 custom-scrollbar flex-1 text-[10px] font-bold">
          {[
            { id: 'server', icon: <LayoutGrid size={16}/>, label: t.server },
            { id: 'console', icon: <Terminal size={16}/>, label: t.console },
            { id: 'files', icon: <Folder size={16}/>, label: t.files },
            { id: 'software', icon: <Cpu size={16}/>, label: t.software },
            { id: 'players', icon: <Users size={16}/>, label: t.players },
            { id: 'backups', icon: <History size={16}/>, label: t.backups },
            { id: 'settings', icon: <Settings size={16}/>, label: t.settings },
            { id: 'logs', icon: <File size={16}/>, label: t.logs },
            { id: 'access', icon: <ShieldCheck size={16}/>, label: t.access },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === item.id ? 'bg-purple-900/20 text-purple-300 border border-purple-500/20' : 'text-gray-600 hover:text-purple-400'}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setIsLoggedIn(false)} className="mt-4 text-[8px] text-gray-800 hover:text-red-500 font-black tracking-widest">ÇIKIŞ</button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 overflow-y-auto bg-[#020202]">
        <div className="max-w-5xl mx-auto">
          
          {/* 1. SUNUCU SEKEMESİ */}
          {activeTab === 'server' && (
            <div className="animate-in fade-in duration-500">
              <header className="mb-10 flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-black text-white italic tracking-tight">SkyCore3-DMKJ</h2>
                  <p className="text-[10px] text-purple-900 font-bold tracking-[0.2em] mt-2">SkyCore3-DMKJ.exaroton.me:60221</p>
                </div>
                <div className={`text-[10px] font-bold px-4 py-1 rounded-full border ${serverStatus === 'ONLINE' ? 'border-green-500/30 text-green-500' : 'border-red-500/30 text-red-500'}`}>
                   DURUM: {serverStatus}
                </div>
              </header>

              <div className="bg-[#080808] border border-purple-900/30 p-16 rounded-[40px] text-center mb-8 relative group">
                <button onClick={() => setServerStatus(serverStatus === 'OFFLINE' ? 'ONLINE' : 'OFFLINE')} 
                  className={`p-12 rounded-full transition-all duration-500 ${serverStatus === 'OFFLINE' ? 'bg-purple-600 text-black shadow-[0_0_40px_#a855f744]' : 'bg-red-600 text-white animate-pulse'}`}>
                  {serverStatus === 'OFFLINE' ? <Play size={48} fill="currentColor" /> : <Square size={48} fill="currentColor" />}
                </button>
                <p className="mt-6 text-[10px] text-gray-600 font-black tracking-[0.5em] uppercase">
                  {serverStatus === 'OFFLINE' ? 'Başlatmak için tıkla' : 'Durdurmak için tıkla'}
                </p>
              </div>
            </div>
          )}

          {/* 2. YAZILIM SEKEMESİ (Eksikti, Eklendi) */}
          {activeTab === 'software' && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black mb-8 italic">YAZILIM AYARLARI</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Bedrock', 'Pocketmine', 'Nukkit', 'Java Edition'].map((soft) => (
                  <div key={soft} className="p-6 bg-[#080808] border border-purple-900/20 rounded-3xl hover:border-purple-500 transition-all cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-300 group-hover:text-purple-400">{soft}</span>
                      <ChevronRight size={16} className="text-purple-900" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. KONSOL SEKEMESİ */}
          {activeTab === 'console' && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-2xl font-black mb-6 italic">KONSOL</h2>
              <div className="bg-black border border-purple-900/40 p-6 rounded-3xl font-mono text-[11px] h-[450px] overflow-y-auto shadow-inner text-purple-300/70">
                <p>[{new Date().toLocaleTimeString()}] PN-Engine v2.0.2 başlatıldı...</p>
                <p>[{new Date().toLocaleTimeString()}] Exaroton API bağlantısı kuruluyor...</p>
                <p className="text-green-500">[{new Date().toLocaleTimeString()}] Bağlantı başarılı.</p>
                <div className="mt-4 flex gap-2 border-t border-purple-900/20 pt-4">
                  <span className="text-purple-600 font-black">{'>'}</span>
                  <input type="text" className="bg-transparent outline-none w-full text-white" placeholder="Komut yazın..." />
                </div>
              </div>
            </div>
          )}

          {/* 4. DOSYALAR SEKEMESİ */}
          {activeTab === 'files' && (
            <div className="animate-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-black mb-6 italic">DOSYA YÖNETİCİSİ</h2>
              <div className="space-y-2">
                {['worlds', 'plugins', 'server.properties', 'whitelist.json'].map((f) => (
                  <div key={f} className="p-4 bg-[#080808] border border-purple-900/10 rounded-2xl flex justify-between items-center group hover:bg-purple-900/5 transition-all">
                    <div className="flex items-center gap-4">
                      {f.includes('.') ? <File size={18} className="text-purple-700" /> : <Folder size={18} className="text-purple-900" />}
                      <span className="text-[12px] font-bold text-gray-400 group-hover:text-purple-300">{f}</span>
                    </div>
                    <Trash2 size={16} className="text-gray-900 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;

