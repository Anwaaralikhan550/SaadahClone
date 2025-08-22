import Navigation from "@/components/Navigation";
import EventsSection from "@/components/EventsSection";
import FooterMinimal from "@/components/FooterMinimal";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Events() {
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
          <EventsSection />
        </motion.div>
      </main>
      <FooterMinimal />
    </div>
  );
}