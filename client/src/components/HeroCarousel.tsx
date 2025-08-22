import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";

const carouselImages = [
  {
    src: carousel1,
    alt: "As-Saadah community gathering",
  },
  {
    src: carousel2,
    alt: "As-Saadah organization group photo",
  },
  {
    src: carousel3,
    alt: "As-Saadah educational activities",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 4000); // 4 second intervals

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="geometric-pattern"></div>
      
      {/* Fade Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0 
            }}
            transition={{ 
              duration: 2.0, 
              ease: "easeInOut" 
            }}
          >
            <motion.div 
              className="relative w-full h-full overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-start/20 to-primary-end/20"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Hero Text Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-text font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-primary-text text-4xl sm:text-5xl lg:text-7xl relative inline-block">
              As-Saadah
              <motion.div
                className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-white/80 via-white to-white/80 shadow-white/30 shadow-lg rounded-full"
                initial={{ width: 0, x: "-50%" }}
                animate={{ width: "100%", x: "-50%" }}
                transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
                }}
              />
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Islamic Organization</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building faith, serving community, and spreading the beautiful message of Islam through education, outreach, and compassionate service to all humanity.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/services">
              <Button
                size="lg"
                className="modern-button hover:glow-primary transform hover:scale-105 transition-all duration-300"
                data-testid="button-learn-more"
              >
                Learn About Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-xl backdrop-blur-sm hover:glow-primary transform hover:scale-105"
                data-testid="button-join-community"
              >
                Join Our Community
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
}