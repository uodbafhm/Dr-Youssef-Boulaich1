
import React from 'react';
import ContactForm from '../components/ContactForm';
import { useLang } from '../App';

const ContactPage: React.FC = () => {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.appointment}</h1>
            <p className="text-lg text-slate-600 mb-8">{t.heroSub}</p>
            <div className="rounded-3xl overflow-hidden shadow-lg h-64 border-4 border-white">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415387.87417270505!2d-5.3600131!3d35.5730165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b436a83b6d0bb%3A0xb567ea95cd055b7d!2sCabinet%20dantaire%20Youssef%20Boulaich!5e0!3m2!1sen!2sma!4v1769643985315!5m2!1sen!2sma" className="w-full h-full" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
