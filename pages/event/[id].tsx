import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import FooterMinimal from "../../components/FooterMinimal";
import { motion } from "framer-motion";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
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
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Event Detail {id}</h1>
            <p>Event details for event ID: {id}</p>
          </div>
        </motion.div>
      </main>
      <FooterMinimal />
    </div>
  );
}