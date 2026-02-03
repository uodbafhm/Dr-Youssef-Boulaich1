
import React, { useState, useEffect, useRef } from 'react';
import { Language, LANDLINE_NUMBER } from '../constants';
import { useLang } from '../App';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const isRtl = t.dir === 'rtl';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t.home, path: '#home' },
    { name: t.services, path: '#services' },
    { name: t.appointment, path: '#contact' },
  ];

  const languages: Language[] = ['FR', 'AR', 'EN', 'ES'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* Brand */}
          <a href="#home" className="flex items-center" onClick={() => setIsOpen(false)}>
            <span className={`text-lg md:text-xl font-black tracking-tight transition-all duration-300 ${scrolled ? 'text-teal-600' : 'text-slate-900'}`}>
              {t.doctorName}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center space-x-1 ${isRtl ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative mx-1" ref={langMenuRef}>
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
              >
                <i className="fas fa-globe text-teal-500 mr-1"></i>
                <span className="uppercase">{lang}</span>
                <i className={`fas fa-chevron-down text-[8px] transition-transform ${showLangMenu ? 'rotate-180' : ''}`}></i>
              </button>

              <div className={`absolute top-full ${isRtl ? 'left-0' : 'right-0'} mt-2 w-20 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${showLangMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setShowLangMenu(false); }}
                    className={`w-full text-center py-2 text-xs font-bold hover:bg-teal-50 transition-colors ${lang === l ? 'text-teal-600 bg-teal-50/30' : 'text-slate-600'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className={`pl-4 border-l border-slate-200 ${isRtl ? 'pr-4 pl-0 border-l-0 border-r' : ''}`}>
               <a
                href={`tel:${LANDLINE_NUMBER}`}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-slate-200 hover:bg-teal-600 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center"
              >
                <i className="fas fa-phone-alt mr-2 text-[10px]"></i>
                {t.callToday}
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-900'}`}>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'}`}>
        <div className="px-6 py-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-3 rounded-xl text-base font-bold transition-all text-slate-600 bg-slate-50 ${isRtl ? 'text-right' : 'text-left'}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`flex items-center justify-between px-5 py-3 border-t border-slate-100 mt-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
             <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Language</span>
             <div className="flex gap-1.5">
                {languages.map(l => (
                  <button 
                    key={l} 
                    onClick={() => { setLang(l); setIsOpen(false); }} 
                    className={`px-2 py-1 rounded-lg font-bold text-[10px] ${lang === l ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                  >
                    {l}
                  </button>
                ))}
             </div>
          </div>

          <div className="pt-4">
            <a 
              href={`tel:${LANDLINE_NUMBER}`} 
              className="block w-full text-center bg-slate-900 text-white px-5 py-4 rounded-xl text-base font-black flex items-center justify-center"
            >
              <i className="fas fa-phone-alt mr-2 text-sm"></i>
              {t.callToday}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
