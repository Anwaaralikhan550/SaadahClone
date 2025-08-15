import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Mail, Bell, Share2 } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
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
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
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
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
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
            <Button onClick={() => setLocation("/")}>Return Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-24 pb-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6 hover:bg-primary-start/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-start/20 to-primary-start/40 rounded-2xl flex items-center justify-center mr-4">
                  <Calendar className="h-8 w-8 text-primary-start" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h1>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="mr-2 h-4 w-4" />
                    {event.date} • {event.time}
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {event.fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {event.categories && (
                  <Card className="modern-card group">
                    <div className="modern-card-content p-8">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Activities & Features</h2>
                      <div className="grid gap-4">
                        {event.categories.map((category, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-start rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <p className="text-gray-600 dark:text-gray-300">{category}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                )}

                <Card className="modern-card group">
                  <div className="modern-card-content p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Event Schedule</h2>
                    <div className="space-y-4">
                      {event.schedule.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-20 flex-shrink-0">
                            <span className="text-primary-start font-semibold">{item.time}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 dark:text-white font-medium">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {'prizes' in event && (
                  <Card className="modern-card group">
                    <div className="modern-card-content p-8">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Prizes & Recognition</h2>
                      <div className="grid gap-4">
                        {event.prizes.map((prize: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <p className="text-gray-600 dark:text-gray-300">{prize}</p>
                          </div>
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
                      const element = document.getElementById('contact');
                      if (element) {
                        setLocation("/");
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
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

      <Footer />
    </div>
  );
}