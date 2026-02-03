
import { Service } from './types';

export const DOCTOR_NAME = "Dr. Youssef Boulaich";
export const WHATSAPP_NUMBER = "212661841032";
export const LANDLINE_NUMBER = "0539993827";
export const INSTAGRAM_URL = "https://www.instagram.com/dr.boulaichyoussef/?hl=en";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/9kF6x2CPPv6SsGrRA";
export const CLINIC_ADDRESS = "Cabinet dantaire Youssef Boulaich, Tétouan, Maroc";

export type Language = 'FR' | 'AR' | 'EN' | 'ES';

export const TRANSLATIONS = {
  FR: {
    dir: "ltr",
    doctorName: "Dr. Youssef Boulaich",
    doctorTitle: "Chirurgien Dentiste",
    home: "Accueil",
    services: "Services",
    appointment: "Rendez-vous",
    callToday: "Appelez Aujourd'hui",
    heroTitle: "Votre Sourire est\nNotre Spécialité",
    heroSub: "Bienvenue chez Dr. Youssef Boulaich. Nous offrons les meilleurs soins dentaires à Tétouan avec une technologie de pointe.",
    takeAppointment: "Prendre Rendez-vous",
    ourServices: "Nos Services",
    bookNow: "Réserver",
    viewAll: "Découvrir tous les soins",
    premiumQuality: "Qualité Premium",
    locationCity: "Tétouan, Maroc",
    fullName: "Nom Complet",
    phone: "Téléphone",
    email: "Email",
    desiredService: "Service Souhaité",
    date: "Date du RDV",
    time: "Heure",
    confirmWhatsapp: "Confirmer sur WhatsApp",
    urgencyTitle: "Une urgence ?",
    urgencySub: "Contactez-nous immédiatement par téléphone pour une prise en charge rapide.",
    quickBookMsg: "Bonjour Dr. Youssef Boulaich, je souhaite prendre rendez-vous pour le service : "
  },
  AR: {
    dir: "rtl",
    doctorName: "Dr. Youssef Boulaich", 
    doctorTitle: "جراح أسنان",
    home: "الرئيسية",
    services: "الخدمات",
    appointment: "موعد",
    callToday: "اتصل اليوم",
    heroTitle: "ابتسامتك هي\nتخصصنا",
    heroSub: "مرحباً بكم عند الدكتور يوسف بولعيش. نحن نقدم أفضل رعاية للأسنان في تطوان بأحدث التقنيات العالمية.",
    takeAppointment: "حجز موعد",
    ourServices: "خدماتنا المتميزة",
    bookNow: "حجز موعد",
    viewAll: "عرض المزيد",
    premiumQuality: "جودة ممتازة",
    locationCity: "تطوان، المغرب",
    fullName: "الاسم الكامل",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    desiredService: "الخدمة المطلوبة",
    date: "تاريخ الموعد",
    time: "الوقت",
    confirmWhatsapp: "تأكيد عبر واتساب",
    urgencyTitle: "حالة مستعجلة؟",
    urgencySub: "اتصل بنا مباشرة عبر الهاتف للحصول على رعاية سريعة.",
    quickBookMsg: "السلام عليكم د. يوسف بولعيش، أود حجز موعد لخدمة: "
  },
  EN: {
    dir: "ltr",
    doctorName: "Dr. Youssef Boulaich",
    doctorTitle: "Dental Surgeon",
    home: "Home",
    services: "Services",
    appointment: "Appointment",
    callToday: "Call Today",
    heroTitle: "Your Smile is\nOur Specialty",
    heroSub: "Welcome to Dr. Youssef Boulaich's clinic. We provide top-tier dental care in Tetouan with cutting-edge technology.",
    takeAppointment: "Book Appointment",
    ourServices: "Our Services",
    bookNow: "Book Now",
    viewAll: "View All Services",
    premiumQuality: "Premium Quality",
    locationCity: "Tetouan, Morocco",
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    desiredService: "Desired Service",
    date: "Appointment Date",
    time: "Preferred Time",
    confirmWhatsapp: "Confirm on WhatsApp",
    urgencyTitle: "Emergency?",
    urgencySub: "Contact us immediately by phone for rapid care.",
    quickBookMsg: "Hello Dr. Youssef Boulaich, I would like to book an appointment for: "
  },
  ES: {
    dir: "ltr",
    doctorName: "Dr. Youssef Boulaich",
    doctorTitle: "Cirujano Dentista",
    home: "Inicio",
    services: "Servicios",
    appointment: "Cita",
    callToday: "Llamar Hoy",
    heroTitle: "Tu Sonrisa es\nNuestra Especialidad",
    heroSub: "Bienvenido a la clínica del Dr. Youssef Boulaich. Brindamos la mejor atención dental en Tetuán.",
    takeAppointment: "Pedir Cita",
    ourServices: "Nuestros Servicios",
    bookNow: "Reservar Cita",
    viewAll: "Ver Todos",
    premiumQuality: "Calidad Premium",
    locationCity: "Tetuán, Marruecos",
    fullName: "Nombre Completo",
    phone: "Teléfono",
    email: "Correo Electrónico",
    desiredService: "Servicio Deseado",
    date: "Fecha de la Cita",
    time: "Hora",
    confirmWhatsapp: "Confirmar por WhatsApp",
    urgencyTitle: "¿Urgencia?",
    urgencySub: "Contáctenos inmediatamente por teléfono para una atención rápida.",
    quickBookMsg: "Hola Dr. Youssef Boulaich, me gustaría reservar una cita para el servicio: "
  }
};

export const SERVICES_LIST: Record<Language, Service[]> = {
  FR: [
    { id: "blanchiment", title: "Blanchiment Dentaire", description: "Blanchiment professionnel pour un sourire éclatant et naturel avec les dernières technologies.", image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "✨" },
    { id: "implants", title: "Implants Dentaires", description: "Restauration permanente des dents manquantes pour votre confort et votre confiance.", image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp", icon: "🦷" },
    { id: "orthodontie", title: "Orthodontie", description: "Alignement des dents pour enfants et adultes pour un sourire harmonieux.", image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "📏" },
    { id: "soins", title: "Soins des caries", description: "Soin rapide et sans douleur avec préservation de la structure dentaire.", image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg", icon: "🛡️" },
    { id: "detartrage", title: "Détartrage & Polissage", description: "Élimination du tartre pour des gencives saines et une haleine fraîche.", image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp", icon: "🧼" },
    { id: "extraction", title: "Extraction Dentaire", description: "Extraction sûre avec une attention particulière à la cicatrisation.", image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg", icon: "🗜️" }
  ],
  AR: [
    { id: "blanchiment", title: "تبييض الأسنان", description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.", image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "✨" },
    { id: "implants", title: "زراعة الأسنان", description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.", image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp", icon: "🦷" },
    { id: "orthodontie", title: "تقويم الأسنان", description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.", image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "📏" },
    { id: "soins", title: "علاج التسوس", description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.", image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg", icon: "🛡️" },
    { id: "detartrage", title: "تنظيف الأسنان وإزالة الجير", description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.", image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp", icon: "🧼" },
    { id: "extraction", title: "خلع الأسنان", description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.", image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg", icon: "🗜️" }
  ],
  EN: [
    { id: "blanchiment", title: "Teeth Whitening", description: "Professional whitening for a bright, natural smile using the latest techniques.", image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "✨" },
    { id: "implants", title: "Dental Implants", description: "Permanent restoration of missing teeth to ensure your comfort and confidence.", image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp", icon: "🦷" },
    { id: "orthodontie", title: "Orthodontics", description: "Tooth alignment for children and adults for a harmonious smile.", image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "📏" },
    { id: "soins", title: "Caries Treatment", description: "Quick and painless treatment for tooth sensitivity and decay.", image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg", icon: "🛡️" },
    { id: "detartrage", title: "Scaling & Polishing", description: "Removal of tartar and plaque to maintain gum health and fresh breath.", image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp", icon: "🧼" },
    { id: "extraction", title: "Tooth Extraction", description: "Safe extraction of damaged teeth with special post-care attention.", image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg", icon: "🗜️" }
  ],
  ES: [
    { id: "blanchiment", title: "Blanqueamiento Dental", description: "Blanqueamiento profesional para una sonrisa radiante y natural con tecnología avanzada.", image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "✨" },
    { id: "implants", title: "Implantes Dentales", description: "Restauración permanente de dientes perdidos para su comodidad y confianza.", image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp", icon: "🦷" },
    { id: "orthodontie", title: "Ortodoncia", description: "Alineación dental para niños y adultos para una sonrisa armoniosa.", image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "📏" },
    { id: "soins", title: "Tratamiento de Caries", description: "Cuidado rápido y sin dolor preservando la estructura dental.", image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg", icon: "🛡️" },
    { id: "detartrage", title: "Limpieza & Pulido", description: "Eliminación de sarro para encías sanas y aliento fresco.", image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp", icon: "🧼" },
    { id: "extraction", title: "Extracción Dental", description: "Extracción segura con atención especial a la cicatrización.", image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg", icon: "🗜️" }
  ]
};
