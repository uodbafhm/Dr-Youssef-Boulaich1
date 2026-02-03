
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, LANDLINE_NUMBER, WHATSAPP_NUMBER } from '../constants';
import { useLang } from '../App';

const ServicesPage: React.FC = () => {
  const { lang, t } = useLang();
  const services = SERVICES_LIST[lang];
  const isRtl = t.dir === 'rtl';

  const handleQuickBook = (serviceTitle: string) => {
    const message = `${t.quickBookMsg}${serviceTitle}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">{t.services}</h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-xl">{t.heroSub}</p>
      </div>

      <div className="max-w-7xl auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s) => (
            <div key={s.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="h-64 overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                  {s.icon}
                </div>
              </div>
              <div className={`p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed">{s.description}</p>
                <button 
                  onClick={() => handleQuickBook(s.title)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-teal-600 transition-all transform active:scale-95 shadow-xl shadow-slate-100 flex items-center justify-center space-x-2"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>
                  <span>{t.bookNow}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-32">
        <div className="bg-teal-600 text-white p-12 rounded-[3rem] text-center shadow-2xl">
          <h3 className="text-3xl font-black mb-6">{t.urgencyTitle}</h3>
          <p className="text-teal-50 text-xl mb-10">{t.urgencySub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`tel:${LANDLINE_NUMBER}`} className="bg-white text-teal-600 font-black py-4 px-10 rounded-2xl text-lg hover:bg-slate-100 transition-all shadow-lg">{LANDLINE_NUMBER}</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="bg-teal-500 text-white font-black py-4 px-10 rounded-2xl text-lg hover:bg-teal-400 transition-all border border-teal-400 shadow-lg">{WHATSAPP_NUMBER}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
