import Navigation from "@/components/Navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import DonationSection from "@/components/DonationSection";
import VolunteeringSection from "@/components/VolunteeringSection";
import TransparencySection from "@/components/TransparencySection";
import NewMuslimSupportSection from "@/components/NewMuslimSupportSection";
import SocialSafetyNetSection from "@/components/SocialSafetyNetSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -30]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <motion.div id="about" style={{ y: y1 }}>
          <MissionSection />
        </motion.div>
        <motion.div id="services" style={{ y: y2 }}>
          <ServicesSection />
        </motion.div>
        <section id="events">
          <EventsSection />
        </section>
        <section id="donate">
          <DonationSection />
        </section>
        <section id="volunteer">
          <VolunteeringSection />
        </section>
        <section id="transparency">
          <TransparencySection />
        </section>
        <section id="new-muslim-support">
          <NewMuslimSupportSection />
        </section>
        <section id="social-safety-net">
          <SocialSafetyNetSection />
        </section>
        <section id="technology">
          <TechnologySection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
