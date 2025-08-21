import Navigation from "@/components/Navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Home() {
  useScrollToTop();
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ y: y1 }}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DonationSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
