import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MosqueLogo from "@/components/MosqueLogo";
import AnimatedALogo from "@/components/AnimatedALogo";
import { getTranslation } from "@/lib/i18n";
import asSaadahLogo from "../assets/as-saadah-logo.png";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();
  const language = "en"; // Fixed to English only

  const navItems = [
    { href: "home", label: getTranslation("nav.home", language) },
    { href: "about", label: getTranslation("nav.about", language) },
    { href: "services", label: getTranslation("nav.services", language) },
    { href: "events", label: getTranslation("nav.events", language) },
    { href: "contact", label: getTranslation("nav.contact", language) },
  ];

  // Handle navigation clicks
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location !== "/") {
      // If not on home page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      // If on home page, just scroll to section
      scrollToSection(href);
    }
    setIsOpen(false);
  };

  // Handle donate button click
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location !== "/") {
      // If not on home page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        scrollToSection("donate");
      }, 100);
    } else {
      // If on home page, just scroll to section
      scrollToSection("donate");
    }
    setIsOpen(false);
  };

  // Smooth scroll to section with offset for fixed navbar
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the fixed navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={asSaadahLogo} 
                alt="As-Saadah Islamic Organization" 
                className="w-auto object-contain filter dark:brightness-110"
                style={{ height: '5rem' }}
                data-testid="nav-logo"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.2 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-start dark:hover:text-primary-start transition-colors font-medium cursor-pointer"
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
              onClick={handleDonateClick}
              className="modern-button hover:glow-primary cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-testid="nav-donate-button"
            >
              {getTranslation("nav.donate", language)}
            </motion.a>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
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
                      href={`#${item.href}`}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary-start dark:hover:text-primary-start transition-colors font-medium cursor-pointer"
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#donate"
                    className="text-lg text-primary-start font-medium hover:text-primary-end transition-colors cursor-pointer"
                    onClick={handleDonateClick}
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
