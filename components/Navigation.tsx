import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MosqueLogo from "./MosqueLogo";
import AnimatedALogo from "./AnimatedALogo";
import { getTranslation } from "../lib/i18n";
import { useHijriDate } from "../hooks/useDateTime";
import asSaadahLogo from "../public/as-saadah-logo.png";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const language = "en"; // Fixed to English only
  const { hijriDate, error } = useHijriDate();

  const navItems = [
    { href: "/", label: getTranslation("nav.home", language) },
    { href: "/about", label: getTranslation("nav.about", language) },
    { href: "/services", label: getTranslation("nav.services", language) },
    { href: "/events", label: getTranslation("nav.events", language) },
    { href: "/contact", label: getTranslation("nav.contact", language) },
  ];

  // Handle mobile menu close only
  const closeMobileMenu = () => {
    setIsOpen(false);
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
                className="w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
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
              <Link key={item.href} href={item.href}>
                <motion.span
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-start dark:hover:text-primary-start transition-colors font-medium cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <Link href="/donate">
              <motion.span
                className="modern-button hover:glow-primary cursor-pointer inline-block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                data-testid="nav-donate-button"
              >
                {getTranslation("nav.donate", language)}
              </motion.span>
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Islamic Date Display */}
            <div 
              id="datetime"
              className="hidden lg:block text-sm text-gray-600 dark:text-gray-300 font-mono bg-islamic-beige dark:bg-gray-800 px-3 py-1 rounded-md border border-islamic-green/20 dark:border-gray-600"
              title={error ? "Error loading Islamic date" : "Current Hijri Date"}
            >
              {hijriDate}
            </div>
            
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
                  {/* Mobile Islamic Date Display */}
                  <div 
                    className="text-sm text-gray-600 dark:text-gray-300 font-mono bg-islamic-beige dark:bg-gray-800 px-3 py-2 rounded-md border border-islamic-green/20 dark:border-gray-600 text-center"
                    title={error ? "Error loading Islamic date" : "Current Hijri Date"}
                  >
                    {hijriDate}
                  </div>
                  
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary-start dark:hover:text-primary-start transition-colors font-medium cursor-pointer"
                        data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/donate">
                    <span
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-primary-start font-medium hover:text-primary-end transition-colors cursor-pointer"
                      data-testid="mobile-nav-donate"
                    >
                      {getTranslation("nav.donate", language)}
                    </span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
