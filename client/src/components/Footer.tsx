import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Church, Phone, Mail, MapPin } from "lucide-react";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

export default function Footer() {
  const { data: prayerTimes, isLoading } = usePrayerTimes();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
    { href: "#donate", label: "Donate" },
  ];

  const services = [
    { href: "#quran-classes", label: "Quran Classes" },
    { href: "#islamic-studies", label: "Islamic Studies" },
    { href: "#youth-programs", label: "Youth Programs" },
    { href: "#women-programs", label: "Women's Programs" },
    { href: "#community-outreach", label: "Community Outreach" },
    { href: "#prayer-services", label: "Prayer Services" },
  ];

  const socialMedia = [
    { platform: "Facebook", icon: "fab fa-facebook-f", color: "bg-blue-600 hover:bg-blue-700" },
    { platform: "Twitter", icon: "fab fa-twitter", color: "bg-blue-400 hover:bg-blue-500" },
    { platform: "Instagram", icon: "fab fa-instagram", color: "bg-pink-600 hover:bg-pink-700" },
    { platform: "YouTube", icon: "fab fa-youtube", color: "bg-red-600 hover:bg-red-700" },
  ];

  const prayerNames = [
    { key: "fajr", label: "Fajr" },
    { key: "dhuhr", label: "Dhuhr" },
    { key: "asr", label: "Asr" },
    { key: "maghrib", label: "Maghrib" },
    { key: "isha", label: "Isha" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <Church className="text-white h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">As-Saadah</span>
                <span className="text-xs text-gray-400 font-arabic">الجمعية الإسلامية</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Building faith, serving community, and spreading the beautiful message of Islam through education, outreach, and compassionate service.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social) => (
                <button
                  key={social.platform}
                  className={`w-8 h-8 text-white rounded text-sm transition-colors ${social.color}`}
                  data-testid={`footer-social-${social.platform.toLowerCase()}`}
                >
                  <i className={social.icon}></i>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                    data-testid={`footer-service-${service.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start" data-testid="footer-address">
                <MapPin className="text-primary-start mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                <div>
                  123 Islamic Center Drive<br />
                  Springfield, IL 62701
                </div>
              </div>
              <div className="flex items-center" data-testid="footer-phone">
                <Phone className="text-primary-start mr-3 h-4 w-4 flex-shrink-0" />
                <span>(217) 555-0123</span>
              </div>
              <div className="flex items-center" data-testid="footer-email">
                <Mail className="text-primary-start mr-3 h-4 w-4 flex-shrink-0" />
                <span>info@assaadah.org</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Prayer Times Footer */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center justify-center">
              <i className="fas fa-pray text-islamic-green mr-3"></i>
              Today's Prayer Times
            </h3>
            {isLoading ? (
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <div className="h-4 bg-gray-700 rounded w-12 mr-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-16"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {prayerNames.map((prayer) => (
                  <div key={prayer.key} className="flex items-center" data-testid={`footer-prayer-${prayer.key}`}>
                    <span className="text-gray-400 mr-2">{prayer.label}:</span>
                    <span className={`font-medium ${prayer.key === 'maghrib' ? 'text-primary-start' : 'text-white'}`}>
                      {prayerTimes?.[prayer.key as keyof typeof prayerTimes] || "--:--"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 As-Saadah Islamic Organization. All rights reserved.</p>
          <p className="mt-2">
            <a href="#privacy" className="hover:text-white transition-colors" data-testid="footer-privacy">
              Privacy Policy
            </a>
            {" • "}
            <a href="#terms" className="hover:text-white transition-colors" data-testid="footer-terms">
              Terms of Service
            </a>
            {" • "}
            <a href="#accessibility" className="hover:text-white transition-colors" data-testid="footer-accessibility">
              Accessibility
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
