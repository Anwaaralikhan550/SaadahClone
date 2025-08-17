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
