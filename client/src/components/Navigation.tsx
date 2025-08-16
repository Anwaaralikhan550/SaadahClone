import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MosqueLogo from "@/components/MosqueLogo";
import AnimatedALogo from "@/components/AnimatedALogo";
import LanguageSelector, { type Language } from "@/components/LanguageSelector";
import { getTranslation } from "@/lib/i18n";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState<Language>("en");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    document.documentElement.setAttribute("dir", newLang === "ar" || newLang === "ur" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", newLang);
  };

  const navItems = [
    { href: "#home", label: getTranslation("nav.home", language) },
    { href: "#about", label: getTranslation("nav.about", language) },
    { href: "#services", label: getTranslation("nav.services", language) },
    { href: "#events", label: getTranslation("nav.events", language) },
    { href: "#contact", label: getTranslation("nav.contact", language) },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 rtl:space-x-reverse"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedALogo size={50} className="hover:glow-primary transition-all duration-300" />
            <span className="text-xl font-bold gradient-primary-text hover:scale-105 transition-transform duration-300">
              s-Saadah
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-start dark:hover:text-primary-start transition-colors font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#donate"
              className="modern-button hover:glow-primary"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-testid="nav-donate-button"
            >
              {getTranslation("nav.donate", language)}
            </motion.a>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Language Selector */}
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={handleLanguageChange}
            />
            
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              data-testid="theme-toggle"
              className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="md:hidden border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors" 
                  data-testid="mobile-menu-toggle"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary-start dark:hover:text-primary-start transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#donate"
                    className="text-lg text-primary-start font-medium hover:text-primary-end transition-colors"
                    onClick={() => setIsOpen(false)}
                    data-testid="mobile-nav-donate"
                  >
                    {getTranslation("nav.donate", language)}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
