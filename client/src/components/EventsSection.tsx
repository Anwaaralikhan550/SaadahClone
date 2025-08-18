import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Bell, Plus, Eye, Mail } from "lucide-react";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";
import { useLocation } from "wouter";

export default function EventsSection() {
  const [, setLocation] = useLocation();
  const { data: events, isLoading: eventsLoading } = useQuery({
    queryKey: ["/api/events"],
  });

  const { data: prayerTimes, isLoading: prayerLoading } = usePrayerTimes();

  const upcomingEvents = [
    {
      id: "knowledge-competition",
      date: "December 15, 2024",
      title: "Annual Islamic Knowledge Competition",
      description: "Test your knowledge of Islam in our annual competition featuring Quran, Hadith, and Islamic history categories.",
      time: "7:00 PM - 9:00 PM",
      day: "15",
      month: "DEC",
      isFeatured: true,
    },
    {
      id: "family-game-night",
      date: "December 20, 2024",
      title: "Family Game Night",
      description: "Fun evening for the whole family with Islamic-themed games and activities.",
      time: "6:00 PM - 8:30 PM",
      day: "20",
      month: "DEC",
      isFeatured: false,
    },
    {
      id: "iftar-workshop",
      date: "December 25, 2024",
      title: "Community Iftar Preparation Workshop",
      description: "Learn to prepare traditional Ramadan dishes and plan community iftars.",
      time: "2:00 PM - 5:00 PM",
      day: "25",
      month: "DEC",
      isFeatured: false,
    },
  ];

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming <span className="gradient-primary-text">Events</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for inspiring events, educational programs, and community gatherings throughout the year.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2 space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {event.isFeatured ? (
                  <Card className="modern-card group cursor-pointer gradient-border">
                    <div className="modern-card-content bg-gradient-to-br from-primary-start to-primary-end text-white">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="text-sm opacity-90 mb-1">{event.date}</div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">{event.title}</h3>
                          <p className="opacity-90 leading-relaxed">{event.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-3xl font-bold bg-white/20 rounded-xl p-3 backdrop-blur-sm">{event.day}</div>
                          <div className="text-sm opacity-90 mt-1">{event.month}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center text-sm opacity-90">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <Button 
                          className="bg-white text-primary-start hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold"
                          data-testid={`button-register-${event.id}`}
                          onClick={() => {
                            setLocation(`/event/${event.id}`);
                          }}
                        >
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="modern-card group cursor-pointer h-full">
                    <div className="modern-card-content flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{event.date}</div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:gradient-primary-text transition-all duration-300">{event.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-bold text-islamic-green bg-islamic-green/10 rounded-xl p-2 text-center min-w-[60px]">{event.day}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{event.month}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <Button 
                          className="modern-button hover:glow-primary"
                          data-testid={`button-learn-more-${event.id}`}
                          onClick={() => {
                            setLocation(`/event/${event.id}`);
                          }}
                        >
                          Learn More <Eye className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Islamic Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Calendar className="text-islamic-green mr-3 h-5 w-5" />
                    Islamic Calendar
                  </h3>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-islamic-green">15</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Jumada al-Awwal</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">1446 AH</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Next Islamic Holiday:</span>
                      <span className="font-medium text-gray-900 dark:text-white">Mawlid al-Nabi</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Date:</span>
                      <span className="font-medium text-islamic-green">12 Rabi' al-Awwal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Prayer Times */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Clock className="text-islamic-green mr-3 h-5 w-5" />
                    Prayer Times
                  </h3>
                  {prayerLoading ? (
                    <div className="space-y-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex justify-between items-center p-2 rounded-lg">
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 rounded-lg bg-islamic-green/10">
                        <span className="font-medium text-gray-900 dark:text-white">Fajr</span>
                        <span className="font-bold text-islamic-green">{prayerTimes?.fajr}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg">
                        <span className="font-medium text-gray-900 dark:text-white">Dhuhr</span>
                        <span className="font-bold text-gray-900 dark:text-white">{prayerTimes?.dhuhr}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg">
                        <span className="font-medium text-gray-900 dark:text-white">Asr</span>
                        <span className="font-bold text-gray-900 dark:text-white">{prayerTimes?.asr}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg gradient-primary/10">
                        <span className="font-medium text-gray-900 dark:text-white">Maghrib</span>
                        <span className="font-bold text-primary-start">{prayerTimes?.maghrib}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg">
                        <span className="font-medium text-gray-900 dark:text-white">Isha</span>
                        <span className="font-bold text-gray-900 dark:text-white">{prayerTimes?.isha}</span>
                      </div>
                    </div>
                  )}
                  <div className="mt-4 text-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary-start hover:text-primary-end hover:glow-primary transition-all duration-300"
                      data-testid="button-prayer-notifications"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Bell className="mr-1 h-4 w-4" />
                      Set Prayer Reminders
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-primary-start/10 to-primary-end/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-2 hover:border-primary-start hover:text-primary-start hover:glow-primary transition-all duration-300"
                      data-testid="button-submit-event"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Plus className="text-primary-start mr-3 h-4 w-4" />
                      Submit Event
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-2 hover:border-primary-start hover:text-primary-start hover:glow-primary transition-all duration-300"
                      data-testid="button-view-calendar"
                      onClick={() => {
                        // Open a calendar view or external calendar
                        window.open('https://calendar.google.com/calendar/embed?src=c_mosque%40as-saadah.org', '_blank');
                      }}
                    >
                      <Calendar className="text-primary-start mr-3 h-4 w-4" />
                      View Full Calendar
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-2 hover:border-primary-start hover:text-primary-start hover:glow-primary transition-all duration-300"
                      data-testid="button-newsletter"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Mail className="text-primary-start mr-3 h-4 w-4" />
                      Newsletter Signup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
