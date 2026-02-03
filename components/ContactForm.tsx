
import React, { useState } from 'react';
// Changed SERVICES_DATA to SERVICES_LIST
import { SERVICES_LIST, WHATSAPP_NUMBER, DOCTOR_NAME } from '../constants';
import { AppointmentFormData } from '../types';
import { useLang } from '../App';

const ContactForm: React.FC = () => {
  const { lang, t } = useLang();
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour ${DOCTOR_NAME},\n\n` +
      `Je souhaite prendre un rendez-vous :\n` +
      `• *${t.fullName}* : ${formData.fullName}\n` +
      `• *${t.phone}* : ${formData.phone}\n` +
      `• *${t.email}* : ${formData.email}\n` +
      `• *${t.desiredService}* : ${formData.service || 'Non spécifié'}\n` +
      `• *${t.date}* : ${formData.date}\n` +
      `• *${t.time}* : ${formData.time}\n\n` +
      `Merci.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Changed SERVICES_DATA to SERVICES_LIST
  const services = SERVICES_LIST[lang];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
        <i className="fas fa-calendar-check text-teal-500 mr-3"></i>
        {t.appointment}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">{t.fullName}</label>
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">{t.phone}</label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">{t.email}</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">{t.desiredService}</label>
          <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all bg-white">
            <option value="">---</option>
            {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">{t.date}</label>
            <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">{t.time}</label>
            <input type="time" name="time" required value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all" />
          </div>
        </div>

        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2">
          <i className="fab fa-whatsapp text-xl"></i>
          <span>{t.confirmWhatsapp}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
