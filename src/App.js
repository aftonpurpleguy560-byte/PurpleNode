import React, { useState } from 'react';
import { Play, Square, RefreshCw, Terminal, Cpu, HardDrive, Globe, User, Lock, Mail, Sparkles, Folder, File, UploadCloud, Download, Trash2, LayoutGrid } from 'lucide-react';

// 25 Dil Desteği Sözlüğü (Örnek olarak ana diller, yapı hazır)
const languages = {
  tr: { welcome: "Karanlığa Hoşgeldin", login: "Giriş Yap", register: "Kayıt Ol", start: "BAŞLAT", stop: "DURDUR", status: "DURUM", cpu: "İŞLEMCİ", ram: "BELLEK", files: "DOSYALAR", user: "Kullanıcı Adı", pass: "Şifre", or: "VEYA", noAccount: "Hesabın yok mu? Kayıt Ol", haveAccount: "Zaten üye misin? Giriş Yap", create: "HESAP OLUŞTUR" },
  en: { welcome: "Welcome to Darkness", login: "Login", register: "Sign Up", start: "START", stop: "STOP", status: "STATUS", cpu: "CPU", ram: "RAM", files: "FILES", user: "Username", pass: "Password", or: "OR", noAccount: "No account? Sign Up", haveAccount: "Already a member? Login", create: "CREATE ACCOUNT" },
  // Diğer diller bu formatta eklenebilir...
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' veya 'register'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('tr');
  const [serverStatus, setServerStatus] = useState('OFFLINE');
  
  const t = languages[lang] || languages.en;

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert("Hatalı giriş! (admin / 1234 deneyebilirsin)");
    }
  };

  // --- GİRİŞ & KAYIT EKRANI ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-purple-400 flex items-center justify-center p-6 font-sans relative overflow-hidden">
        <div className="neon-bg"></div> {/* index.css'deki animasyonlu mor parlama */}
        
        <div className="relative w-full max-w-md bg-[#080808] border border-purple-900/60 p-10 rounded-[40px] shadow-2xl transition-all duration-500">
          
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-purple-900/10 px-3 py-1.5 rounded-full border border-purple-900/30 text-[10px]">
            <Globe size={12} />
            <select onChange={(e) => setLang(e.target.value)} className="bg-transparent text-purple-400 outline-none cursor-pointer">
              <option value="tr" className="bg-black">TR</option>
              <option value="en" className="bg-black">EN</option>
            </select>
          </div>

          <div className="text-center mb-8 mt-4">
            <Sparkles className="mx-auto text-purple-600 mb-3 animate-pulse" size={32} />
            <h1 className="text-4xl font-black tracking-tighter text-purple-500 drop-shadow-[0_0_10px_#a855f7]">
              {authMode === 'login' ? 'PURPLENODE' : 'KATIL BİZE'}
            </h1>
            <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] mt-2">{t.welcome}</p>
          </div>

          <div className="space-y-4">
            {authMode === 'register' && (
              <div className="relative animate-in slide-in-from-top-2 duration-300">
                <Mail className="absolute left-4 top-3.5 text-purple-950" size={18} />
                <input type="email" placeholder="E-posta" className="w-full bg-black/40 border border-purple-900/40 rounded-2xl py-3.5 pl-12 pr-6 text-sm outline-none focus:border-purple-500 transition-all placeholder:text-purple-950" />
              </div>
            )}

            <div className="relative">
              <User className="absolute left-4 top-3.5 text-purple-950" size={18} />
              <input 
                type="text" placeholder={t.user} value={username} onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black/40 border border-purple-900/40 rounded-2xl py-3.5 pl-12 pr-6 text-sm outline-none focus:border-purple-500 transition-all placeholder:text-purple-950" 
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-purple-950" size={18} />
              <input 
                type="password" placeholder={t.pass} value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-purple-900/40 rounded-2xl py-3.5 pl-12 pr-6 text-sm outline-none focus:border-purple-500 transition-all placeholder:text-purple-950" 
              />
            </div>

            <button onClick={authMode === 'login' ? handleLogin : () => alert('Kayıt yakında!')}
              className="w-full bg-purple-600 hover:bg-purple-500 text-black font-black py-4 rounded-2xl mt-2 shadow-[0_0_25px_#a855f744] active:scale-95 transition-all uppercase text-xs tracking-widest">
              {authMode === 'login' ? t.login : t.create}
            </button>

            {/* Ayırıcı */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-[1px] bg-purple-900/20"></div>
              <span className="px-3 text-[9px] text-gray-700 font-bold uppercase italic">{t.or}</span>
              <div className="flex-1 h-[1px] bg-purple-900/20"></div>
            </div>

            {/* Google & Microsoft Butonları */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#050505] border border-purple-900/30 hover:border-purple-500 py-3 rounded-2xl transition-all group">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4 h-4" alt="G" />
                <span className="text-[10px] font-bold text-gray-500 group-hover:text-purple-300 uppercase tracking-tighter">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#050505] border border-purple-900/30 hover:border-purple-500 py-3 rounded-2xl transition-all group">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="w-4 h-4" alt="M" />
                <span className="text-[10px] font-bold text-gray-500 group-hover:text-purple-300 uppercase tracking-tighter">Microsoft</span>
              </button>
            </div>

            <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
              className="w-full text-center text-[10px] text-gray-500 hover:text-purple-400 mt-4 uppercase tracking-widest font-bold transition-colors">
              {authMode === 'login' ? t.noAccount : t.haveAccount}
            </button>
          </div>

          <footer className="mt-10 text-center text-[8px] text-purple-950 font-black uppercase tracking-[0.5em]">
            Purpleguy © 2026 - tablet power
          </footer>
        </div>
      </div>
    );
  }

  // --- ANA DASHBOARD (EXAROTON STİLİ) ---
  return (
    <div className="min-h-screen bg-black text-purple-400 font-sans flex relative overflow-hidden">
      <div className="neon-bg"></div>

      {/* Sidebar */}
      <aside className="w-64 bg-[#050505] border-r border-purple-900/30 p-6 flex flex-col justify-between z-10 backdrop-blur-xl">
        <div>
          <h1 className="text-3xl font-black text-purple-500 tracking-tighter italic mb-10">PN <span className="text-xs">PRO</span></h1>
          <nav className="space-y-2 text-sm font-bold">
            <button className="w-full text-left p-3 rounded-xl bg-purple-900/20 text-purple-200 flex items-center gap-3"><LayoutGrid size={18} />Sunucu</button>
            <button className="w-full text-left p-3 rounded-xl text-gray-600 hover:text-purple-300 transition-colors flex items-center gap-3"><Terminal size={18} />Konsol</button>
            <button className="w-full text-left p-3 rounded-xl text-gray-600 hover:text-purple-300 transition-colors flex items-center gap-3"><Folder size={18} />Dosyalar</button>
          </nav>
        </div>
        <button onClick={() => setIsLoggedIn(false)} className="text-[10px] text-gray-800 hover:text-red-500 text-center uppercase tracking-[0.4em] font-black">ÇIKIŞ</button>
      </aside>

      {/* İçerik */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl font-black text-gray-100 tracking-tight italic">SkyCore-MCPE</h2>
              <p className="text-[10px] text-purple-900 uppercase tracking-widest mt-1 font-black">skycore3.purplenode.me:19132</p>
            </div>
            <div className={`px-4 py-2 rounded-full border border-purple-900/30 text-[10px] font-black tracking-[0.2em] ${serverStatus === 'ONLINE' ? 'text-green-500 border-green-500/20' : 'text-red-500 border-red-500/20'}`}>
              {t.status}: {serverStatus}
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#080808]/60 border border-purple-900/40 p-12 rounded-[40px] text-center relative group">
                <button onClick={() => setServerStatus(serverStatus === 'OFFLINE' ? 'ONLINE' : 'OFFLINE')} 
                  className={`p-10 rounded-full shadow-[0_0_50px_#a855f733] active:scale-95 transition-all duration-500 ${serverStatus === 'OFFLINE' ? 'bg-purple-600 text-black' : 'bg-red-600 text-white animate-pulse'}`}>
                  {serverStatus === 'OFFLINE' ? <Play size={48} fill="currentColor" /> : <Square size={48} fill="currentColor" />}
                </button>
                <p className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">TIKLA VE BAŞLAT</p>
              </div>

              <div className="bg-[#050505] border border-purple-900/40 rounded-3xl h-60 p-5 font-mono text-[10px] text-purple-300/60 overflow-hidden shadow-inner">
                <p>[01:51] PN-Engine: Sistem hazır.</p>
                <p>[01:51] Veritabanı bağlantısı kuruldu.</p>
                <p className={serverStatus === 'ONLINE' ? 'text-green-500' : ''}>[01:51] Sunucu: {serverStatus}</p>
              </div>
            </div>

            <div className="space-y-6 text-[10px] font-black">
              <div className="bg-[#080808]/60 border border-purple-900/40 p-6 rounded-3xl">
                <h3 className="mb-4 tracking-widest text-purple-900 uppercase">KAYNAKLAR</h3>
                <div className="space-y-4">
                  <div><p className="mb-1 text-gray-500">CPU</p><div className="h-1.5 bg-black rounded-full overflow-hidden"><div className="h-full bg-purple-600 w-[12%] shadow-[0_0_10px_#a855f7]"></div></div></div>
                  <div><p className="mb-1 text-gray-500">RAM (2GB)</p><div className="h-1.5 bg-black rounded-full overflow-hidden"><div className="h-full bg-purple-600 w-[65%] shadow-[0_0_10px_#a855f7]"></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
