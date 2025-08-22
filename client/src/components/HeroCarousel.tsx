import * as React from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="geometric-pattern"></div>
      
      {/* Carousel Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          className="w-full h-full"
        >
          <CarouselContent className="ml-0 h-full">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 h-full">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom styled navigation buttons */}
          <CarouselPrevious className="left-4 md:left-6 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white border-0 shadow-lg backdrop-blur-sm transition-all duration-300 z-20" />
          <CarouselNext className="right-4 md:right-6 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white border-0 shadow-lg backdrop-blur-sm transition-all duration-300 z-20" />
        </Carousel>
      </motion.div>

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
            <span className="gradient-primary-text text-4xl sm:text-5xl lg:text-7xl">As-Saadah</span>
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
      
      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
              current === index + 1
                ? "bg-white shadow-lg scale-125"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}