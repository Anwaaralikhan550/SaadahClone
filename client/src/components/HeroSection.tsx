import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

export default function HeroSection() {
  const { data: prayerTimes, isLoading } = usePrayerTimes();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-start/20 to-primary-end/20">
        <img 
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Beautiful mosque at sunset with Islamic architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="gradient-primary-text">As-Saadah</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Islamic Organization</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-arabic arabic">
            جمعية السعادة الإسلامية
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building faith, serving community, and spreading the beautiful message of Islam through education, outreach, and compassionate service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-4 text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-testid="button-learn-more"
            >
              Learn About Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              data-testid="button-join-community"
            >
              Join Our Community
            </Button>
          </div>
        </motion.div>

        {/* Floating Prayer Times Widget */}
        <motion.div 
          className="absolute bottom-8 right-8 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-2xl border border-gray-200 dark:border-gray-700">
            <CardContent className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <Clock className="text-islamic-green mr-2 h-4 w-4" />
                Today's Prayer Times
              </h3>
              {isLoading ? (
                <div className="space-y-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between items-center" data-testid="prayer-time-fajr">
                    <span className="text-gray-600 dark:text-gray-400">Fajr</span>
                    <span className="font-medium text-gray-900 dark:text-white">{prayerTimes?.fajr}</span>
                  </div>
                  <div className="flex justify-between items-center" data-testid="prayer-time-dhuhr">
                    <span className="text-gray-600 dark:text-gray-400">Dhuhr</span>
                    <span className="font-medium text-gray-900 dark:text-white">{prayerTimes?.dhuhr}</span>
                  </div>
                  <div className="flex justify-between items-center" data-testid="prayer-time-asr">
                    <span className="text-gray-600 dark:text-gray-400">Asr</span>
                    <span className="font-medium text-gray-900 dark:text-white">{prayerTimes?.asr}</span>
                  </div>
                  <div className="flex justify-between items-center" data-testid="prayer-time-maghrib">
                    <span className="text-gray-600 dark:text-gray-400">Maghrib</span>
                    <span className="font-medium text-primary-start">{prayerTimes?.maghrib}</span>
                  </div>
                  <div className="flex justify-between items-center" data-testid="prayer-time-isha">
                    <span className="text-gray-600 dark:text-gray-400">Isha</span>
                    <span className="font-medium text-gray-900 dark:text-white">{prayerTimes?.isha}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
