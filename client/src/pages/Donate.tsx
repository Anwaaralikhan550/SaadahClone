import Navigation from "@/components/Navigation";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Donate() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DonationSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}