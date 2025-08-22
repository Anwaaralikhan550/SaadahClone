import * as React from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full relative"
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/10" />
                
                {/* Optional overlay content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center text-white px-4"
                  >
                    <div className="max-w-4xl mx-auto">
                      {/* You can add overlay text here if needed in the future */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom styled navigation buttons */}
        <CarouselPrevious className="left-4 md:left-6 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white border-0 shadow-lg backdrop-blur-sm transition-all duration-300" />
        <CarouselNext className="right-4 md:right-6 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white border-0 shadow-lg backdrop-blur-sm transition-all duration-300" />
      </Carousel>
      
      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
    </motion.div>
  );
}