import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-start/20 to-primary-end/20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Beautiful mosque with golden dome at sunset, showcasing Islamic architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="gradient-primary-text">As-Saadah</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Islamic Organization</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-arabic arabic">
            جمعية السعادة الإسلامية
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building faith, serving community, and spreading the beautiful message of Islam through education, outreach, and compassionate service to all humanity.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-4 text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl backdrop-blur-sm"
              data-testid="button-learn-more"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn About Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-xl backdrop-blur-sm"
              data-testid="button-join-community"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Our Community
            </Button>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
