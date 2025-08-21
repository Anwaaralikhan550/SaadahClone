import Navigation from "@/components/Navigation";
import MissionSection from "@/components/MissionSection";
import FooterMinimal from "@/components/FooterMinimal";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function About() {
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
          <MissionSection />
        </motion.div>
      </main>
      <FooterMinimal />
    </div>
  );
}