import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export type Language = "en" | "ar" | "ur";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}

const languages = [
  { code: "en" as Language, name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "ar" as Language, name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "ur" as Language, name: "Urdu", nativeName: "اردو", flag: "🇵🇰" },
];

export default function LanguageSelector({ 
  currentLanguage, 
  onLanguageChange, 
  className = "" 
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center space-x-2 min-w-[120px] justify-between ${className}`}
          data-testid="language-selector"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg" role="img" aria-label={`${currentLang.name} flag`}>
              {currentLang.flag}
            </span>
            <span className="hidden sm:inline text-sm font-medium">
              {currentLang.nativeName}
            </span>
            <span className="sm:hidden text-sm font-medium">
              {currentLang.code.toUpperCase()}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-3 w-3" />
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
      >
        {languages.map((language, index) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              onLanguageChange(language.code);
              setIsOpen(false);
            }}
            className={`flex items-center space-x-3 px-3 py-2 cursor-pointer transition-colors ${
              currentLanguage === language.code 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            data-testid={`language-option-${language.code}`}
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex items-center space-x-3 w-full"
            >
              <span className="text-lg" role="img" aria-label={`${language.name} flag`}>
                {language.flag}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {language.nativeName}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language.name}
                </span>
              </div>
              {currentLanguage === language.code && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-2 h-2 bg-primary rounded-full"
                />
              )}
            </motion.div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}