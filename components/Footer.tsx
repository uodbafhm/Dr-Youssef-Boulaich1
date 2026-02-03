
import React from 'react';
import { DOCTOR_NAME, WHATSAPP_NUMBER, LANDLINE_NUMBER, INSTAGRAM_URL, CLINIC_ADDRESS, GOOGLE_MAPS_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Clinic Info */}
          <div>
            <h4 className="text-white text-xl font-bold mb-6">{DOCTOR_NAME}</h4>
            <p className="mb-6 text-slate-400">
              Cabinet dentaire moderne à Tétouan, spécialisé en esthétique, implants et soins dentaires de pointe. Notre priorité est votre confort et votre sourire.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="fab fa-whatsapp text-white"></i>
              </a>
              <a href={GOOGLE_MAPS_URL} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <i className="fas fa-map-marker-alt text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-phone text-teal-500 mt-1 mr-3"></i>
                <div>
                  <p className="font-semibold text-white">Tél / WhatsApp</p>
                  <p>06 61 84 10 32</p>
                  <p>05 39 99 38 27</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-teal-500 mt-1 mr-3"></i>
                <div>
                  <p className="font-semibold text-white">Adresse</p>
                  <p>{CLINIC_ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-teal-500 mt-1 mr-3"></i>
                <div>
                  <p className="font-semibold text-white">Horaires</p>
                  <p>Lun - Ven: 09:00 - 18:00</p>
                  <p>Samedi: 09:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Localisation</h4>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700 h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415387.87417270505!2d-5.3600131!3d35.5730165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b436a83b6d0bb%3A0xb567ea95cd055b7d!2sCabinet%20dantaire%20Youssef%20Boulaich!5e0!3m2!1sen!2sma!4v1769643985315!5m2!1sen!2sma" 
                className="w-full h-full grayscale opacity-80"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-teal-400 hover:text-teal-300">
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {DOCTOR_NAME}. Tous droits réservés.</p>
          <p className="mt-2 text-slate-500">Développé pour l'excellence en soins dentaires au Maroc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
