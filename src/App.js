import React, { useState } from 'react';
import { Play, Square, RefreshCw, Terminal, Cpu, HardDrive, Globe, User, Lock, Mail, Sparkles, Folder, File, UploadCloud, Download, Trash2 } from 'lucide-react';

// 25 Dil Desteği Temeli (Örnek diller, hepsini JSON olarak ayırabilirsin)
const languages = {
  tr: { welcome: "Karanlığa Hoşgeldin", login: "Giriş Yap", register: "Kayıt Ol", start: "BAŞLAT", stop: "DURDUR", status: "DURUM", cpu: "İŞLEMCİ", ram: "BELLEK", files: "DOSYALAR", user: "Kullanıcı Adı", pass: "Şifre" },
  en: { welcome: "Welcome to Darkness", login: "Login", register: "Register", start: "START", stop: "STOP", status: "STATUS", cpu: "CPU", ram: "RAM", files: "FILES", user: "Username", pass: "Password" },
  de: { welcome: "Willkommen", login: "Anmelden", register: "Registrieren", start: "START", stop: "STOPP", status: "STATUS", cpu: "CPU", ram: "RAM", files: "DATEIEN", user: "Nutzername", pass: "Passwort" },
  fr: { welcome: "Bienvenue", login: "Connexion", register: "S'inscrire", start: "DÉMARRER", stop: "ARRÊTER", status: "STATUT", cpu: "CPU", ram: "RAM", files: "FICHIERS", user: "Utilisateur", pass: "Code" },
  es: { welcome: "Bienvenido", login: "Acceder", register: "Registro", start: "INICIAR", stop: "PARAR", status: "ESTADO", cpu: "CPU", ram: "RAM", files: "ARCHIVOS", user: "Usuario", pass: "Clave" },
  // ... Diğer 20 dil buraya eklenecek
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lang, setLang] = useState('tr');
  const [serverStatus, setServerStatus] = useState('OFFLINE');
  const t = languages[lang] || languages.en;

  // --- GİRİŞ EKRANI BİLEŞENİ ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-purple-400 flex items-center justify-center p-6 font-sans relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"></div>
        
        <div className="relative w-full max-w-md bg-[#080808] border border-purple-900/60 p-10 rounded-[40px] shadow-2xl">
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-purple-900/10 px-3 py-1.5 rounded-full border border-purple-900/30 text-[10px]">
            <Globe size={12} />
            <select onChange={(e) => setLang(e.target.value)} className="bg-transparent text-purple-400 outline-none">
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
          </div>

          <div className="text-center mb-8">
            <Sparkles className="mx-auto text-purple-600 mb-3" size={32} />
            <h1 className="text-4xl font-black tracking-tighter text-purple-500 drop-shadow-[0_0_10px_#a855f7]">PURPLENODE</h1>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-2">{t.welcome}</p>
          </div>

          <div className="space-y-4">
            <div className="relative"><User className="absolute left-4 top-3.5 text-purple-900" size={18} /><input type="text" placeholder={t.user} className="w-full bg-black/40 border border-purple-900/60 rounded-full py-3 pl-12 pr-6 text-sm outline-none focus:border-purple-500" /></div>
            <div className="relative"><Lock className="absolute left-4 top-3.5 text-purple-900" size={18} /><input type="password" placeholder={t.pass} className="w-full bg-black/40 border border-purple-900/60 rounded-full py-3 pl-12 pr-6 text-sm outline-none focus:border-purple-500" /></div>
            <button onClick={() => setIsLoggedIn(true)} className="w-full bg-purple-600 hover:bg-purple-500 text-black font-black py-4 rounded-full mt-4 shadow-[0_0_20px_#a855f7] transition-all uppercase text-xs">{t.login}</button>
          </div>
        </div>
      </div>
    );
  }

  // --- ANA DASHBOARD BİLEŞENİ ---
  return (
    <div className="min-h-screen bg-black text-purple-400 p-6 font-sans">
      <header className="flex justify-between items-center border-b border-purple-900/40 pb-4 mb-8">
        <h1 className="text-2xl font-black text-purple-500 tracking-tighter italic">PURPLENODE <span className="text-xs">PRO</span></h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsLoggedIn(false)} className="text-[10px] text-gray-600 hover:text-red-500">ÇIKIŞ</button>
          <div className={`px-4 py-1.5 rounded-full border border-purple-900/30 text-[10px] font-bold ${serverStatus === 'ONLINE' ? 'text-green-500' : 'text-red-500'}`}>
            {t.status}: {serverStatus}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kontroller & Konsol */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => setServerStatus('ONLINE')} className="bg-purple-900/10 border border-purple-900/40 p-4 rounded-2xl flex flex-col items-center hover:bg-purple-900/20"><Play className="text-green-500 mb-2" />{t.start}</button>
            <button onClick={() => setServerStatus('OFFLINE')} className="bg-purple-900/10 border border-purple-900/40 p-4 rounded-2xl flex flex-col items-center hover:bg-purple-900/20"><Square className="text-red-500 mb-2" />{t.stop}</button>
            <button className="bg-purple-900/10 border border-purple-900/40 p-4 rounded-2xl flex flex-col items-center hover:bg-purple-900/20"><RefreshCw className="text-blue-500 mb-2" />RESTART</button>
          </div>
          
          <div className="bg-[#050505] border border-purple-900/40 rounded-2xl h-64 overflow-hidden font-mono p-4 text-[10px]">
            <p className="text-blue-400">[SYSTEM]: PurpleNode Engine v1.0.0 başlatıldı...</p>
            <p className="text-gray-500">[SERVER]: MCPE Bedrock Dedicated Server aranıyor...</p>
            <p className={`${serverStatus === 'ONLINE' ? 'text-green-400' : 'text-red-400'}`}>[STATUS]: Sunucu şu an {serverStatus}.</p>
          </div>
        </div>

        {/* Yan Menü (İstatistikler) */}
        <div className="space-y-6">
          <div className="bg-[#080808] border border-purple-900/40 p-6 rounded-2xl">
            <h3 className="text-xs font-black mb-4 tracking-widest uppercase">KAYNAK KULLANIMI</h3>
            <div className="space-y-4 text-[10px]">
              <div><p className="mb-1">{t.cpu}</p><div className="h-1 bg-gray-900 rounded-full"><div className="h-full bg-purple-500 w-[12%] shadow-[0_0_8px_#a855f7]"></div></div></div>
              <div><p className="mb-1">{t.ram}</p><div className="h-1 bg-gray-900 rounded-full"><div className="h-full bg-purple-500 w-[45%] shadow-[0_0_8px_#a855f7]"></div></div></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center text-[10px] text-purple-950 font-black uppercase tracking-[0.5em]">
        Purpleguy © 2026 - tablet power
      </footer>
    </div>
  );
}

export default App;
