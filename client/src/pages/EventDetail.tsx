import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Mail, Bell, Share2, Star, Award, Quote, CheckCircle, Sparkles, Target, Heart, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function EventDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const eventId = params.id;

  useEffect(() => {
    // Auto-scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const events = {
    "knowledge-competition": {
      title: "Annual Islamic Knowledge Competition",
      description: "Test your knowledge of Islam in our annual competition featuring comprehensive categories covering Quran, Hadith, Islamic history, and contemporary issues.",
      fullDescription: "Join us for an inspiring evening of Islamic learning and friendly competition. This annual event brings together community members of all ages to demonstrate their knowledge of Islam through various categories including Quranic verses, Hadith studies, Islamic history, and contemporary Islamic issues. Participants will compete in age-appropriate groups with prizes and recognition for outstanding performance.",
      date: "December 15, 2024",
      time: "7:00 PM - 9:00 PM",
      day: "15",
      month: "DEC",
      location: "Main Prayer Hall, As-Saadah Islamic Center",
      organizer: "Education Committee",
      capacity: "100 participants",
      registrationDeadline: "December 10, 2024",
      fee: "Free for all participants",
      categories: [
        "Quranic Recitation and Memorization",
        "Hadith Knowledge",
        "Islamic History and Civilization",
        "Contemporary Islamic Issues",
        "Arabic Language Basics",
        "Islamic Jurisprudence (Fiqh)"
      ],
      ageGroups: [
        "Children (Ages 8-12)",
        "Youth (Ages 13-17)", 
        "Adults (Ages 18+)"
      ],
      prizes: [
        "1st Place: $200 gift certificate + Trophy",
        "2nd Place: $100 gift certificate + Medal",
        "3rd Place: $50 gift certificate + Certificate",
        "Participation certificates for all contestants"
      ],
      schedule: [
        { time: "7:00 PM", activity: "Registration and Welcome" },
        { time: "7:15 PM", activity: "Opening Remarks and Dua" },
        { time: "7:30 PM", activity: "Competition Rounds Begin" },
        { time: "8:30 PM", activity: "Final Round and Judging" },
        { time: "8:45 PM", activity: "Awards Ceremony" },
        { time: "9:00 PM", activity: "Closing and Light Refreshments" }
      ],
      isFeatured: true,
      benefits: [
        "Strengthen your Islamic knowledge and understanding",
        "Connect with fellow community members who share your faith", 
        "Gain confidence in discussing Islamic topics and history",
        "Earn recognition and valuable prizes for your dedication",
        "Create lasting memories with family and friends",
        "Inspire others through your commitment to learning"
      ],
      testimonials: [
        { name: "Aisha Mohammed", text: "This competition transformed my understanding of Islam. The preparation process brought our family closer together.", role: "Previous Winner" },
        { name: "Omar Hassan", text: "My children learned more about their faith in one month than they had all year. Highly recommend!", role: "Parent" },
        { name: "Fatima Al-Rashid", text: "The friendly competition atmosphere made learning fun and engaging for all ages.", role: "Participant" }
      ]
    },
    "family-game-night": {
      title: "Family Game Night",
      description: "Fun evening for the whole family with Islamic-themed games, activities, and community bonding.",
      fullDescription: "Bring your entire family for an evening filled with joy, laughter, and Islamic learning through interactive games and activities. This event is designed to strengthen family bonds while reinforcing Islamic values and teachings in a fun, relaxed environment.",
      date: "December 20, 2024", 
      time: "6:00 PM - 8:30 PM",
      day: "20",
      month: "DEC",
      location: "Community Hall, As-Saadah Islamic Center",
      organizer: "Family Programs Committee",
      capacity: "50 families",
      registrationDeadline: "December 18, 2024",
      fee: "$5 per family",
      categories: [
        "Islamic Trivia Games",
        "Board Games with Islamic Themes",
        "Arts and Crafts Activities",
        "Story Time for Young Children",
        "Group Activities and Team Building",
        "Light Snacks and Refreshments"
      ],
      ageGroups: [
        "All ages welcome",
        "Special activities for children under 5",
        "Family-friendly competitive games"
      ],
      schedule: [
        { time: "6:00 PM", activity: "Registration and Setup" },
        { time: "6:15 PM", activity: "Welcome and Opening Dua" },
        { time: "6:30 PM", activity: "Game Stations Open" },
        { time: "7:30 PM", activity: "Group Activities" },
        { time: "8:00 PM", activity: "Light Dinner and Fellowship" },
        { time: "8:30 PM", activity: "Closing Circle and Dua" }
      ],
      isFeatured: false,
      benefits: [
        "Strengthen family bonds through Islamic activities",
        "Create positive memories in a faith-centered environment",
        "Learn Islamic values through fun and games",
        "Meet other families in the community",
        "Enjoy healthy entertainment for all ages",
        "Build lasting friendships with fellow Muslims"
      ],
      testimonials: [
        { name: "Maryam Johnson", text: "Our kids had such a wonderful time! They're already asking when the next family night is.", role: "Mother of 3" },
        { name: "Ahmed Ali", text: "Perfect way to spend quality time with family while learning about our faith.", role: "Father" },
        { name: "Sarah Abdul", text: "The Islamic games were both educational and entertaining. Brilliant idea!", role: "Grandmother" }
      ]
    },
    "iftar-workshop": {
      title: "Community Iftar Preparation Workshop",
      description: "Learn to prepare traditional Ramadan dishes and organize community iftars that bring people together.",
      fullDescription: "Join experienced community cooks and nutritionists to learn the art of preparing traditional iftar meals. This hands-on workshop covers menu planning, large-scale cooking techniques, and the spiritual significance of sharing meals during Ramadan.",
      date: "December 25, 2024",
      time: "2:00 PM - 5:00 PM", 
      day: "25",
      month: "DEC",
      location: "Community Kitchen, As-Saadah Islamic Center",
      organizer: "Community Service Committee",
      capacity: "30 participants",
      registrationDeadline: "December 22, 2024",
      fee: "$15 per person (includes ingredients)",
      categories: [
        "Traditional Iftar Dishes",
        "Healthy Ramadan Nutrition",
        "Large-Scale Cooking Techniques",
        "Menu Planning for Events",
        "Food Safety and Storage",
        "Community Organizing Tips"
      ],
      ageGroups: [
        "Adults (18+)",
        "Teens welcome with parent supervision"
      ],
      schedule: [
        { time: "2:00 PM", activity: "Welcome and Introduction" },
        { time: "2:15 PM", activity: "Traditional Recipes Overview" },
        { time: "2:30 PM", activity: "Hands-on Cooking Session" },
        { time: "4:00 PM", activity: "Community Organizing Discussion" },
        { time: "4:30 PM", activity: "Meal Preparation and Tasting" },
        { time: "5:00 PM", activity: "Cleanup and Closing" }
      ],
      isFeatured: false,
      benefits: [
        "Master traditional Islamic cooking techniques",
        "Learn to organize community events effectively",
        "Gain practical skills for Ramadan preparation",
        "Connect with experienced community leaders",
        "Contribute meaningfully to community gatherings",
        "Preserve cultural traditions for future generations"
      ],
      testimonials: [
        { name: "Khadija Rahman", text: "I learned so much about organizing community meals. Now I feel confident helping with our mosque events.", role: "Workshop Graduate" },
        { name: "Amina Hassan", text: "The traditional recipes shared here have become family favorites. My children love learning our heritage.", role: "Participant" },
        { name: "Halima Ali", text: "This workshop gave me the confidence to start a food program in our neighborhood.", role: "Community Volunteer" }
      ]
    }
  };

  const event = events[eventId as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Event Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The event you're looking for doesn't exist.</p>
            <Button onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                setLocation("/events");
              }
            }}>Return to Events</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const backgroundClass = {
    "knowledge-competition": "bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 dark:from-blue-950 dark:via-indigo-950/50 dark:to-purple-950",
    "family-game-night": "bg-gradient-to-br from-green-50 via-emerald-50/50 to-teal-50 dark:from-green-950 dark:via-emerald-950/50 dark:to-teal-950",
    "iftar-workshop": "bg-gradient-to-br from-orange-50 via-amber-50/50 to-yellow-50 dark:from-orange-950 dark:via-amber-950/50 dark:to-yellow-950"
  };

  const currentBg = backgroundClass[eventId as keyof typeof backgroundClass] || "bg-gradient-to-br from-orange-50 via-purple-50/30 to-pink-50 dark:from-orange-950 dark:via-purple-950/30 dark:to-pink-950";

  return (
    <motion.div 
      className={`min-h-screen ${currentBg} transition-all duration-1000`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      
      {/* Animated Hero Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white/70 via-white/40 to-transparent dark:from-gray-900/70 dark:via-gray-900/40 dark:to-transparent relative overflow-hidden backdrop-blur-sm">
        {/* Enhanced Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-islamic-gold rotate-45 rounded-lg animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-primary-start rotate-12 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-islamic-green rotate-45 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border-2 border-primary-end rounded-full animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              onClick={() => {
                // Use browser's back navigation for proper history handling
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  // Fallback to events page if no history
                  setLocation("/events");
                }
              }}
              className="mb-8 hover:bg-primary-start/10 group transition-all duration-300"
              data-testid="button-back-to-previous"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
          </motion.div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-start/20 to-primary-end/20 rounded-3xl mb-6 shadow-lg">
                <Calendar className="h-10 w-10 text-primary-start animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary-start to-primary-end dark:from-white dark:via-primary-start dark:to-primary-end bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
                {event.title}
              </h1>
              <div className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-300 mb-8 space-x-4">
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                  <Clock className="mr-2 h-5 w-5 text-primary-start" />
                  {event.date}
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                  <Sparkles className="mr-2 h-5 w-5 text-primary-end" />
                  {event.time}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="modern-card group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-0 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                <div className="modern-card-content p-8 text-center">
                  <Quote className="h-8 w-8 text-primary-start mx-auto mb-4 animate-bounce-slow" />
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed italic">
                    "{event.fullDescription}"
                  </p>
                  <div className="mt-6 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-start to-primary-end rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-start to-primary-end rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-start to-primary-end rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Target className="h-12 w-12 text-primary-start mx-auto mb-4 animate-bounce-slow" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-primary-start dark:from-white dark:to-primary-start bg-clip-text text-transparent mb-6">
              Why Join This Event?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-start to-primary-end mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.benefits?.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card h-full group hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 ring-1 ring-black/5 dark:ring-white/10">
                  <div className="modern-card-content p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-start/20 to-primary-end/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-primary-start" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {event.categories && (
                  <Card className="modern-card group hover:scale-105 transition-all duration-500">
                    <div className="modern-card-content p-8">
                      <div className="flex items-center mb-6">
                        <Sparkles className="h-8 w-8 text-primary-start mr-3 animate-bounce-slow" />
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-start dark:from-white dark:to-primary-start bg-clip-text text-transparent">
                          Activities & Features
                        </h2>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {event.categories.map((category, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start bg-gradient-to-r from-primary-start/5 to-primary-end/5 rounded-lg p-3 hover:from-primary-start/10 hover:to-primary-end/10 transition-all duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-primary-start to-primary-end rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse"></div>
                            <p className="text-gray-700 dark:text-gray-200 font-medium">{category}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                )}

                <Card className="modern-card group hover:scale-105 transition-all duration-500">
                  <div className="modern-card-content p-8">
                    <div className="flex items-center mb-6">
                      <Clock className="h-8 w-8 text-primary-end mr-3 animate-bounce-slow" />
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-end dark:from-white dark:to-primary-end bg-clip-text text-transparent">
                        Event Schedule
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {event.schedule.map((item, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="w-24 flex-shrink-0 text-center">
                            <div className="bg-gradient-to-r from-primary-start to-primary-end text-white px-3 py-1 rounded-full text-sm font-bold">
                              {item.time}
                            </div>
                          </div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-900 dark:text-white font-semibold text-lg">{item.activity}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>

                {'prizes' in event && (
                  <Card className="modern-card group hover:scale-105 transition-all duration-500">
                    <div className="modern-card-content p-8">
                      <div className="flex items-center mb-6">
                        <Award className="h-8 w-8 text-islamic-gold mr-3 animate-bounce-slow" />
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-islamic-gold dark:from-white dark:to-islamic-gold bg-clip-text text-transparent">
                          Prizes & Recognition
                        </h2>
                      </div>
                      <div className="grid gap-4">
                        {event.prizes.map((prize: string, index: number) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start bg-gradient-to-r from-islamic-gold/5 to-islamic-green/5 rounded-lg p-4 hover:from-islamic-gold/10 hover:to-islamic-green/10 transition-all duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <Gift className="h-5 w-5 text-islamic-gold mt-1 mr-4 flex-shrink-0" />
                            <p className="text-gray-700 dark:text-gray-200 font-medium text-lg">{prize}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="modern-card group">
                  <div className="modern-card-content p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Event Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Calendar className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Date & Time</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{event.date}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Location</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Capacity</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{event.capacity}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Bell className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Registration Deadline</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{event.registrationDeadline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="modern-card group">
                  <div className="modern-card-content p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Registration</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Fee</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{event.fee}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Age Groups</p>
                        {event.ageGroups.map((age, index) => (
                          <p key={index} className="text-gray-600 dark:text-gray-300 text-sm">• {age}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="space-y-3">
                  <Button
                    className="modern-button w-full hover:glow-primary text-lg"
                    onClick={() => {
                      setLocation("/contact");
                    }}
                  >
                    Register Now
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full border-2 hover:border-primary-start hover:text-primary-start hover:glow-primary transition-all duration-300"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: event.title,
                          text: event.description,
                          url: window.location.href,
                        });
                      }
                    }}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Event
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {event.testimonials && (
        <section className="py-16 bg-gradient-to-br from-primary-start/5 via-white to-primary-end/5 dark:from-primary-start/10 dark:via-gray-800 dark:to-primary-end/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Heart className="h-12 w-12 text-islamic-gold mx-auto mb-4 animate-bounce-slow" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-islamic-gold dark:from-white dark:to-islamic-gold bg-clip-text text-transparent mb-4">
                What Our Community Says
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-islamic-gold to-islamic-green mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {event.testimonials.map((testimonial: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="modern-card group hover:scale-105 transition-all duration-500 h-full">
                    <div className="modern-card-content p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-islamic-gold fill-current" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-200 italic mb-4 text-sm leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                        <p className="text-primary-start text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call-to-Action Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-start to-primary-end relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't miss this incredible opportunity to grow in faith, knowledge, and community. Register today and be part of something amazing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-start hover:bg-gray-100 group relative overflow-hidden font-bold"
                data-testid="button-register-cta"
                onClick={() => {
                  setLocation("/contact");
                }}
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-start/0 via-primary-start/20 to-primary-start/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-start group transition-all duration-300"
                data-testid="button-learn-more-cta"
                onClick={() => setLocation("/")}
              >
                Learn More About Us
                <ArrowLeft className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-bounce-slow"></div>
      </section>

      <Footer />
    </motion.div>
  );
}