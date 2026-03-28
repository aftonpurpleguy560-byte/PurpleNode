import React, { useState } from 'react';
import { User, Lock, Mail, Globe, Sparkles } from 'lucide-react';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Bu kısım 25 dil desteği için temel oluşturur (Aşağıda açıklayacağım)
  const texts = {
    tr: { welcome: 'Karanlığa Hoşgeldin', login: 'Giriş Yap', register: 'Kayıt Ol', user: 'Kullanıcı Adı', pass: 'Şifre', email: 'E-posta', create: 'Hesap Oluştur', haveAcc: 'Zaten hesabın var mı?', noAcc: 'Henüz hesabın yok mu?', start: 'Başlayalım' },
    en: { welcome: 'Welcome to the Darkness', login: 'Sign In', register: 'Sign Up', user: 'Username', pass: 'Password', email: 'Email', create: 'Create Account', haveAcc: 'Already have an account?', noAcc: 'Don\'t have an account yet?', start: 'Get Started' },
    // Diğer 23 dil buraya eklenecek...
  };

  const t = texts.tr; // Şu an Türkçe dilini kullanıyoruz

  const FormInput = ({ icon: Icon, type, placeholder }) => (
    <div className="relative mb-4 group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-900 group-focus-within:text-purple-500 transition-colors" size={18} />
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-black/40 border border-purple-900/60 rounded-full py-3.5 pl-12 pr-6 text-sm text-purple-200 placeholder:text-purple-950 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)_inset]" 
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-purple-400 font-sans flex items-center justify-center p-6 selection:bg-purple-900 selection:text-white">
      {/* Arka Plan Neon Efekti */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative w-full max-w-md bg-[#080808] border border-purple-900/60 p-10 rounded-[40px] shadow-2xl overflow-hidden group">
        
        {/* Dil Seçici (Header) */}
        <div className="absolute top-6 right-6 flex items-center gap-2 bg-purple-900/10 px-3 py-1.5 rounded-full border border-purple-900/30 text-xs">
          <Globe size={14} className="text-purple-700"/>
          <select className="bg-transparent text-purple-400 outline-none cursor-pointer">
            <option value="tr">TR</option>
            <option value="en">EN</option>
            {/* 25 dilin kısaltmaları buraya */}
          </select>
        </div>

        {/* Başlık */}
        <div className="text-center mb-10 mt-6">
          <Sparkles className="mx-auto text-purple-600 animate-pulse mb-3" size={32} />
          <h1 className="text-4xl font-black tracking-tighter text-purple-500 drop-shadow-[0_0_10px_#a855f7] mb-1">
            PURPLENODE
          </h1>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">{t.welcome}</p>
        </div>

        {/* Form Alanı */}
        <div className="transition-all duration-500 ease-in-out">
          {!isLogin && <FormInput icon={Mail} type="email" placeholder={t.email} />}
          <FormInput icon={User} type="text" placeholder={t.user} />
          <FormInput icon={Lock} type="password" placeholder={t.pass} />
          
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-black font-black uppercase text-xs tracking-widest py-4 rounded-full mt-6 shadow-[0_0_20px_#a855f7] active:scale-95 transition-all">
            {isLogin ? t.login : t.create}
          </button>
        </div>

        {/* Alt Bilgi */}
        <div className="text-center mt-10 text-sm">
          <p className="text-purple-900">{isLogin ? t.noAcc : t.haveAcc}</p>
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-purple-500 font-bold underline hover:text-purple-300 transition-colors mt-1"
          );
            {isLogin ? t.create : t.login}
          </button>
        </div>

        {/* İmza */}
        <footer className="mt-10 text-center text-[10px] text-purple-950 font-black uppercase tracking-[0.4em]">
          Purpleguy © 2026 - tablet power
        </footer>
      </div>
    </div>
  );
};

export default LoginScreen;

