
import React, { createContext, useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './pages/MainContent';
import { Language, TRANSLATIONS, INSTAGRAM_URL } from './constants';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('FR');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang.toLowerCase();
  }, [lang, t.dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className={`flex flex-col min-h-screen ${t.dir === 'rtl' ? 'font-[sans-serif]' : ''}`}>
        <Navbar />
        <main className="flex-grow pt-16">
          <MainContent />
        </main>
        <Footer />
        
        {/* Floating Instagram Button - Fixed bottom right */}
        <a 
          href={INSTAGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-2xl"></i>
          <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
