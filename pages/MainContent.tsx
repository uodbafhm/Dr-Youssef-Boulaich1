
import React from 'react';
import { SERVICES_LIST, WHATSAPP_NUMBER, LANDLINE_NUMBER } from '../constants';
import { useLang } from '../App';
import ContactForm from '../components/ContactForm';

const MainContent: React.FC = () => {
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
      <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-white overflow-hidden pb-12 lg:pb-0 pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-[500px] h-[500px] bg-teal-50 rounded-full blur-[100px] opacity-40`}></div>
          <div className={`absolute bottom-0 ${isRtl ? 'right-0' : 'left-0'} w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-30`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
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
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-black shadow-lg shadow-teal-100 hover:bg-teal-700 transition-all transform hover:-translate-y-1 active:scale-95 text-center text-lg"
                >
                  {t.takeAppointment}
                </a>
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black shadow-md hover:bg-slate-50 transition-all border border-slate-100 text-center text-lg"
                >
                  {t.ourServices}
                </a>
              </div>

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
            
            <div className="flex-1 w-full relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.15)] border-[8px] border-white transition-all duration-700 hover:shadow-[0_40px_80px_-5px_rgba(0,0,0,0.2)]">
                <img src="https://i.postimg.cc/c1fCH5jN/pexels-theplanetx-8224659.jpg" alt="Cabinet Dentaire" className="w-full h-full object-cover aspect-[4/5] md:aspect-video lg:aspect-[4/5] scale-100 hover:scale-105 transition-transform duration-1000" />
              </div>
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

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="text-4xl font-black text-slate-900 mb-4">{t.ourServices}</h2>
            <div className={`h-2 w-24 bg-teal-500 rounded-full ${isRtl ? 'mr-0 ml-auto' : ''}`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                    {s.icon}
                  </div>
                </div>
                <div className={`p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.description}
                  </p>
                  <button 
                    onClick={() => handleQuickBook(s.title)}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-teal-600 transition-all transform active:scale-95 shadow-xl shadow-slate-100"
                  >
                    <i className="fab fa-whatsapp mr-2 text-xl"></i>
                    <span>{t.bookNow}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment / Contact Section */}
      <section id="contact" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">{t.appointment}</h2>
              <p className="text-xl text-slate-600 mb-12 max-w-lg leading-relaxed">{t.heroSub}</p>
              
              {/* Map Card */}
              <div className="rounded-[3rem] overflow-hidden shadow-2xl h-80 border-[10px] border-slate-50 mb-12">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415387.87417270505!2d-5.3600131!3d35.5730165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b436a83b6d0bb%3A0xb567ea95cd055b7d!2sCabinet%20dantaire%20Youssef%20Boulaich!5e0!3m2!1sen!2sma!4v1769643985315!5m2!1sen!2sma" 
                  className="w-full h-full" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>

              {/* Urgency Alert */}
              <div className="bg-teal-600 text-white p-8 rounded-[2.5rem] shadow-xl">
                <h4 className="text-2xl font-black mb-2">{t.urgencyTitle}</h4>
                <p className="text-teal-50 mb-6 opacity-90">{t.urgencySub}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${LANDLINE_NUMBER}`} className="bg-white text-teal-600 font-black py-3 px-8 rounded-xl text-center shadow-lg hover:bg-slate-50 transition-all">{LANDLINE_NUMBER}</a>
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -z-10"></div>
               <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
