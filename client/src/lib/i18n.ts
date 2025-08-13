export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      events: "Events",
      contact: "Contact",
      donate: "Donate",
    },
    hero: {
      title: "As-Saadah Islamic Organization",
      subtitle: "Building faith, serving community, and spreading the beautiful message of Islam through education, outreach, and compassionate service.",
      learnMore: "Learn About Us",
      joinCommunity: "Join Our Community",
    },
    mission: {
      title: "Our Mission",
      subtitle: "Dedicated to fostering spiritual growth, community unity, and positive social impact through Islamic teachings and values.",
      faith: {
        title: "Faith",
        description: "Strengthening our connection with Allah through Quran, Sunnah, and continuous spiritual development.",
      },
      community: {
        title: "Community",
        description: "Building strong bonds among Muslims and fostering understanding with our broader community.",
      },
      service: {
        title: "Service",
        description: "Serving humanity through charitable works, education, and social justice initiatives.",
      },
    },
    prayerTimes: {
      title: "Today's Prayer Times",
      fajr: "Fajr",
      dhuhr: "Dhuhr",
      asr: "Asr",
      maghrib: "Maghrib",
      isha: "Isha",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      events: "الفعاليات",
      contact: "اتصل بنا",
      donate: "تبرع",
    },
    hero: {
      title: "جمعية السعادة الإسلامية",
      subtitle: "بناء الإيمان وخدمة المجتمع ونشر الرسالة الجميلة للإسلام من خلال التعليم والدعوة والخدمة الرحيمة.",
      learnMore: "تعرف علينا أكثر",
      joinCommunity: "انضم إلى مجتمعنا",
    },
    mission: {
      title: "رسالتنا",
      subtitle: "مكرسون لتعزيز النمو الروحي ووحدة المجتمع والتأثير الاجتماعي الإيجابي من خلال التعاليم والقيم الإسلامية.",
      faith: {
        title: "الإيمان",
        description: "تقوية صلتنا بالله من خلال القرآن والسنة والتطوير الروحي المستمر.",
      },
      community: {
        title: "المجتمع",
        description: "بناء روابط قوية بين المسلمين وتعزيز التفاهم مع مجتمعنا الأوسع.",
      },
      service: {
        title: "الخدمة",
        description: "خدمة الإنسانية من خلال الأعمال الخيرية والتعليم ومبادرات العدالة الاجتماعية.",
      },
    },
    prayerTimes: {
      title: "مواقيت الصلاة اليوم",
      fajr: "الفجر",
      dhuhr: "الظهر",
      asr: "العصر",
      maghrib: "المغرب",
      isha: "العشاء",
    },
  },
};

export type TranslationKey = keyof typeof translations.en;
export type Language = keyof typeof translations;

export function getTranslation(key: string, language: Language): string {
  const keys = key.split(".");
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
