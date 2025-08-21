import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Contact() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}