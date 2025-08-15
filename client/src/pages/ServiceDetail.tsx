import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, GraduationCap, Users, Heart, Baby, Clock, MapPin, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function ServiceDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const serviceId = params.id;

  useEffect(() => {
    // Auto-scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = {
    "quran-classes": {
      icon: BookOpen,
      title: "Quran Classes",
      description: "Learn proper Quranic recitation, memorization, and understanding with certified instructors in a supportive community environment.",
      features: [
        "Beginner to Advanced levels available",
        "Tajweed and proper recitation training", 
        "Memorization (Hifz) programs",
        "Weekend and evening classes",
        "One-on-one tutoring available",
        "Female and male instructors"
      ],
      schedule: "Monday-Friday: 6:00 PM - 8:00 PM, Saturday-Sunday: 10:00 AM - 12:00 PM",
      instructor: "Sheikh Abdullah Rahman & Qari Fatima Al-Zahra",
      age: "All ages welcome (children 5+ to adults)",
      fee: "Free for community members, $50/month for non-members",
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    },
    "islamic-studies": {
      icon: GraduationCap,
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering theology, history, jurisprudence, and contemporary issues facing Muslims today.",
      features: [
        "Hadith and Seerah (Prophet's biography) studies",
        "Islamic history and civilization",
        "Fiqh (Islamic jurisprudence)",
        "Comparative religion studies",
        "Arabic language fundamentals",
        "Contemporary Islamic issues"
      ],
      schedule: "Tuesday & Thursday: 7:00 PM - 9:00 PM, Sunday: 2:00 PM - 4:00 PM",
      instructor: "Dr. Imam Mohammad Hassan & Dr. Aisha Mahmoud",
      age: "Adults and youth 14+",
      fee: "Free for community members",
      color: "from-primary-start/20 to-primary-start/40",
      iconColor: "text-primary-start",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    },
    "youth-programs": {
      icon: Baby,
      title: "Youth Programs",
      description: "Engaging activities and mentorship programs designed to help young Muslims grow in faith while building leadership skills and community connections.",
      features: [
        "Youth group activities and discussions",
        "Islamic leadership development",
        "Sports and recreational activities",
        "Community service projects",
        "Islamic art and creativity workshops",
        "Peer mentorship programs"
      ],
      schedule: "Friday: 6:00 PM - 8:00 PM, Saturday: 3:00 PM - 6:00 PM",
      instructor: "Brother Yusuf Ahmed & Sister Khadija Thompson",
      age: "Ages 12-18",
      fee: "Free for all participants",
      color: "from-primary-end/20 to-primary-end/40",
      iconColor: "text-primary-end",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    },
    "womens-programs": {
      icon: Users,
      title: "Women's Programs",
      description: "Empowering Muslim women through Islamic education, professional development, support groups, and skill-building workshops in a nurturing environment.",
      features: [
        "Sister circles and spiritual support",
        "Islamic parenting workshops",
        "Professional development seminars",
        "Health and wellness programs",
        "Cooking and homemaking classes",
        "Business and entrepreneurship support"
      ],
      schedule: "Wednesday: 10:00 AM - 12:00 PM, Saturday: 1:00 PM - 3:00 PM",
      instructor: "Dr. Maryam Al-Rashid & Sister Amina Johnson",
      age: "Adult women 18+",
      fee: "Free for community members",
      color: "from-pink-400/20 to-pink-400/40",
      iconColor: "text-pink-500",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    },
    "community-outreach": {
      icon: Heart,
      title: "Community Outreach",
      description: "Building bridges with the broader community through charitable work, interfaith dialogue, and service projects that embody Islamic values.",
      features: [
        "Food banks and charity distribution",
        "Interfaith dialogue and events",
        "Community service projects",
        "Disaster relief coordination",
        "Educational outreach programs",
        "Social justice advocacy"
      ],
      schedule: "Monthly events - See calendar for specific dates",
      instructor: "Community Outreach Committee",
      age: "All ages welcome",
      fee: "Free participation, donations welcome",
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    },
    "prayer-services": {
      icon: BookOpen,
      title: "Prayer Services",
      description: "Regular prayer services including daily prayers, Friday Jummah, special occasion prayers, and spiritual guidance for the community.",
      features: [
        "Five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha)",
        "Friday Jummah prayers with khutbah",
        "Eid prayers and celebrations",
        "Tarawih prayers during Ramadan",
        "Funeral prayers (Janazah)",
        "Special occasion prayers"
      ],
      schedule: "Daily prayers as per Islamic calendar, Jummah: Friday 1:00 PM",
      instructor: "Imam Mohammad Hassan & community volunteers",
      age: "All community members",
      fee: "Free for all",
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
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
            Back to Home
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{service.title}</h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="modern-card group mb-8">
                  <div className="modern-card-content p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What's Included</h2>
                    <div className="grid gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-start rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="modern-card group">
                  <div className="modern-card-content p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Registration Process</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary-start text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Contact Us</h4>
                          <p className="text-gray-600 dark:text-gray-300">Call or visit the center to express interest</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary-start text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Assessment</h4>
                          <p className="text-gray-600 dark:text-gray-300">Brief discussion to determine appropriate level</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary-start text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Begin Learning</h4>
                          <p className="text-gray-600 dark:text-gray-300">Start attending classes immediately</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
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
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Schedule</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.schedule}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Age Group</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.age}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <GraduationCap className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Instructor</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Heart className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Fee</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.fee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="modern-card group">
                  <div className="modern-card-content p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="text-primary-start h-5 w-5 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">(217) 555-0123</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-primary-start h-5 w-5 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">info@assaadah.org</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">123 Islamic Center Drive, Springfield, IL 62701</span>
                      </div>
                    </div>
                  </div>
                </Card>

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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}