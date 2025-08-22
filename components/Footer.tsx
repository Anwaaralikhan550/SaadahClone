import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import MosqueLogo from "@/components/MosqueLogo";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

export default function Footer() {
  const { data: prayerTimes, isLoading } = usePrayerTimes();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
    { href: "/donate", label: "Donate" },
  ];

  const services = [
    { 
      id: "quran-classes",
      href: "/services", 
      label: "Quran Classes",
      details: "Learn Quran recitation, memorization, and Tajweed with certified instructors. Classes available for all ages and skill levels."
    },
    { 
      id: "islamic-studies",
      href: "/services", 
      label: "Islamic Studies",
      details: "Comprehensive Islamic education covering Fiqh, Hadith, Islamic history, and contemporary issues from authentic sources."
    },
    { 
      id: "youth-programs",
      href: "/services", 
      label: "Youth Programs",
      details: "Engaging activities and educational programs designed to help young Muslims develop strong Islamic identity and values."
    },
    { 
      id: "women-programs",
      href: "/services", 
      label: "Women's Programs",
      details: "Special programs for sisters including Islamic education, community support, and empowerment initiatives."
    },
    { 
      id: "community-outreach",
      href: "/services", 
      label: "Community Outreach",
      details: "Reaching out to the broader community through dawah activities, interfaith dialogue, and social services."
    },
    { 
      id: "prayer-services",
      href: "/services", 
      label: "Prayer Services",
      details: "Daily congregational prayers, Friday Jummah services, and special occasion prayers throughout the year."
    },
  ];

  const socialMedia = [
    { platform: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", color: "bg-blue-600 hover:bg-blue-700", url: "https://facebook.com" },
    { platform: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", color: "bg-blue-400 hover:bg-blue-500", url: "https://twitter.com" },
    { platform: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", color: "bg-pink-600 hover:bg-pink-700", url: "https://instagram.com" },
    { platform: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", color: "bg-red-600 hover:bg-red-700", url: "https://youtube.com" },
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
            <div className="flex flex-col">
              <span className="text-lg font-bold">As-Saadah</span>
              <span className="text-xs text-gray-400">Islamic Organization</span>
            </div>
            <p className="text-gray-300 text-sm">
              Building faith, serving community, and spreading the beautiful message of Islam through education, outreach, and compassionate service.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 text-white rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center ${social.color}`}
                  data-testid={`footer-social-${social.platform.toLowerCase()}`}
                  title={`Follow us on ${social.platform}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
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
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors block"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
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
            <div className="space-y-2 text-sm">
              {services.map((service, index) => (
                <div key={service.id}>
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors group py-1"
                    data-testid={`footer-service-${service.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      • {service.label}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronDown className="h-3 w-3" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: "easeInOut"
                        }}
                        className="overflow-hidden pl-4 pr-2"
                      >
                        <div className="text-xs text-gray-400 pt-2 pb-3 border-l border-gray-700 pl-3 leading-relaxed">
                          {service.details}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
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
                  Lower Ground Floor, 17 Hills, Traders Colony, 17 Mile Islamabad
                </div>
              </div>
              <div className="flex items-center" data-testid="footer-website">
                <ExternalLink className="text-primary-start mr-3 h-4 w-4 flex-shrink-0" />
                <a href="https://as-saadah.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  as-saadah.com
                </a>
              </div>
              <div className="flex items-center" data-testid="footer-email">
                <Mail className="text-primary-start mr-3 h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@as-saadah.com" className="text-primary-start hover:underline">
                  info@as-saadah.com
                </a>
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
                    <span className={`font-medium ${prayer.key === 'maghrib' ? 'text-primary' : 'text-white'}`}>
                      {prayerTimes?.[prayer.key as keyof typeof prayerTimes] as string || "--:--"}
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
