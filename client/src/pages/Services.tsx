import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import VolunteeringSection from "@/components/VolunteeringSection";
import TransparencySection from "@/components/TransparencySection";
import NewMuslimSupportSection from "@/components/NewMuslimSupportSection";
import SocialSafetyNetSection from "@/components/SocialSafetyNetSection";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Services() {
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
          <ServicesSection />
          <VolunteeringSection />
          <TransparencySection />
          <NewMuslimSupportSection />
          <SocialSafetyNetSection />
          <TechnologySection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}