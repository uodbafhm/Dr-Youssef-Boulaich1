
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, WHATSAPP_NUMBER } from '../constants';
import { useLang } from '../App';

const Home: React.FC = () => {
  const { t, lang } = useLang();
  const services = SERVICES_LIST[lang];
  const isRtl = t.dir === 'rtl';

  const handleQuickBook = (serviceTitle: string) => {
    const message = `${t.quickBookMsg}${serviceTitle}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-white overflow-hidden pb-12 lg:pb-0">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-[500px] h-[500px] bg-teal-50 rounded-full blur-[100px] opacity-40`}></div>
          <div className={`absolute bottom-0 ${isRtl ? 'right-0' : 'left-0'} w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-30`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full pt-20 lg:pt-0">
          <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Text Area */}
            <div className={`flex-1 w-full ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black mb-6 shadow-lg ${isRtl ? 'flex-row-reverse' : ''}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <span className="tracking-widest uppercase">Innovation & Expertise</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight whitespace-pre-line">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-xl leading-relaxed font-medium">
                {t.heroSub}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 ${isRtl ? 'lg:justify-start flex-row-reverse' : 'lg:justify-start'}`}>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-black shadow-lg shadow-teal-100 hover:bg-teal-700 transition-all transform hover:-translate-y-1 active:scale-95 text-center text-lg"
                >
                  {t.takeAppointment}
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black shadow-md hover:bg-slate-50 transition-all border border-slate-100 text-center text-lg"
                >
                  {t.ourServices}
                </Link>
              </div>

              {/* Branding Identity */}
              <div className={`mt-10 pt-8 border-t border-slate-100 flex items-center gap-5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 text-xl">
                  <i className="fas fa-user-md"></i>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">{t.doctorName}</h3>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-0.5">{t.doctorTitle}</p>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="flex-1 w-full relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.15)] border-[8px] border-white transition-all duration-700 hover:shadow-[0_40px_80px_-5px_rgba(0,0,0,0.2)]">
                <img 
                  src="https://i.postimg.cc/c1fCH5jN/pexels-theplanetx-8224659.jpg" 
                  alt="Cabinet Dentaire" 
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-video lg:aspect-[4/5] scale-100 hover:scale-105 transition-transform duration-1000" 
                />
              </div>
              
              {/* Quality Label */}
              <div className={`absolute -bottom-6 ${isRtl ? '-right-6' : '-left-6'} bg-white p-6 rounded-[2rem] shadow-xl z-20 hidden md:block border border-slate-50 transform hover:-translate-y-1 transition-transform`}>
                <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-100">
                    <i className="fas fa-heart text-xl"></i>
                  </div>
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <p className="font-black text-slate-900 text-lg leading-none mb-1 uppercase">{t.premiumQuality}</p>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{t.locationCity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Area */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl font-black text-slate-900 mb-3">{t.ourServices}</h2>
              <div className={`h-1.5 w-20 bg-teal-500 rounded-full ${isRtl ? 'mr-0 ml-auto' : ''}`}></div>
            </div>
            <Link to="/services" className={`flex items-center text-teal-600 font-black text-base group ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="mx-2">{t.viewAll}</span>
              <i className={`fas ${isRtl ? 'fa-arrow-left group-hover:-translate-x-2' : 'fa-arrow-right group-hover:translate-x-2'} transition-transform`}></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm">
                    {s.icon}
                  </div>
                </div>
                <div className={`p-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.description}
                  </p>
                  <button 
                    onClick={() => handleQuickBook(s.title)}
                    className="inline-flex items-center px-6 py-2.5 bg-slate-900 text-white rounded-xl font-black text-sm hover:bg-teal-600 transition-all transform active:scale-95 shadow-lg shadow-slate-200"
                  >
                    <span>{t.bookNow}</span>
                    <i className={`fas ${isRtl ? 'fa-chevron-left mr-2' : 'fa-chevron-right ml-2'} text-[10px]`}></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
