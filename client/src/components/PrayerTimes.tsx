import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Bell, Calendar, Sunrise } from "lucide-react";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";
import { getNextPrayer } from "@/lib/prayerTimesApi";
import { useEffect, useState } from "react";

interface PrayerTimesProps {
  compact?: boolean;
  showNextPrayer?: boolean;
  className?: string;
}

export default function PrayerTimes({ 
  compact = false, 
  showNextPrayer = true, 
  className = "" 
}: PrayerTimesProps) {
  const { data: prayerTimes, isLoading, error } = usePrayerTimes();
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (prayerTimes) {
      const next = getNextPrayer(prayerTimes);
      setNextPrayer(next);
    }
  }, [prayerTimes, currentTime]);

  const prayerList = [
    { 
      key: "fajr", 
      label: "Fajr", 
      labelAr: "الفجر", 
      icon: Sunrise,
      isHighlighted: false 
    },
    { 
      key: "dhuhr", 
      label: "Dhuhr", 
      labelAr: "الظهر", 
      icon: Clock,
      isHighlighted: false 
    },
    { 
      key: "asr", 
      label: "Asr", 
      labelAr: "العصر", 
      icon: Clock,
      isHighlighted: false 
    },
    { 
      key: "maghrib", 
      label: "Maghrib", 
      labelAr: "المغرب", 
      icon: Clock,
      isHighlighted: true 
    },
    { 
      key: "isha", 
      label: "Isha", 
      labelAr: "العشاء", 
      icon: Clock,
      isHighlighted: false 
    },
  ];

  if (error) {
    return (
      <Card className={`bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center text-red-600 dark:text-red-400">
            <Clock className="mr-2 h-4 w-4" />
            <span className="text-sm">Unable to load prayer times</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (compact) {
    return (
      <Card className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg ${className}`}>
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
            <Clock className="text-islamic-green mr-2 h-4 w-4" />
            Prayer Times
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
              {prayerList.map((prayer) => (
                <div 
                  key={prayer.key} 
                  className="flex justify-between items-center"
                  data-testid={`prayer-time-${prayer.key}`}
                >
                  <span className="text-gray-600 dark:text-gray-400">{prayer.label}</span>
                  <span className={`font-medium ${
                    prayer.isHighlighted 
                      ? 'text-primary-start' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {prayerTimes?.[prayer.key as keyof typeof prayerTimes] || "--:--"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      {/* Next Prayer Highlight */}
      {showNextPrayer && nextPrayer && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <Card className="gradient-primary text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Next Prayer</h3>
                  <p className="text-sm opacity-90">{nextPrayer.name} at {nextPrayer.time}</p>
                </div>
                <Bell className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Full Prayer Times */}
      <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Clock className="text-islamic-green mr-3 h-5 w-5" />
            Today's Prayer Times
          </h3>
          
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-6 mr-3"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                  </div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {prayerList.map((prayer, index) => (
                <motion.div
                  key={prayer.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex justify-between items-center p-3 rounded-lg transition-colors ${
                    prayer.isHighlighted 
                      ? 'bg-gradient-to-r from-primary-start/10 to-primary-end/10' 
                      : prayer.key === nextPrayer?.name.toLowerCase()
                      ? 'bg-islamic-green/10'
                      : ''
                  }`}
                  data-testid={`prayer-time-full-${prayer.key}`}
                >
                  <div className="flex items-center">
                    <prayer.icon className={`mr-3 h-4 w-4 ${
                      prayer.isHighlighted ? 'text-primary-start' : 'text-islamic-green'
                    }`} />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {prayer.label}
                      </span>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-arabic">
                        {prayer.labelAr}
                      </div>
                    </div>
                  </div>
                  <span className={`font-bold text-lg ${
                    prayer.isHighlighted 
                      ? 'text-primary-start' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {prayerTimes?.[prayer.key as keyof typeof prayerTimes] || "--:--"}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Today: {currentTime.toLocaleDateString()}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-start hover:text-primary-end transition-colors"
                data-testid="button-prayer-notifications"
              >
                <Bell className="mr-1 h-4 w-4" />
                Set Reminders
              </Button>
            </div>
            
            {prayerTimes?.sunrise && (
              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Sunrise className="mr-2 h-4 w-4" />
                <span>Sunrise: {prayerTimes.sunrise}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
