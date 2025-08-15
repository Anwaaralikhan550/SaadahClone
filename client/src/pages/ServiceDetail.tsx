import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, GraduationCap, Users, Heart, Baby, Clock, MapPin, Phone, Mail, Star, Award, Quote, CheckCircle, Sparkles, Target, Gift } from "lucide-react";
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
      benefits: [
        "Master proper Quranic pronunciation and recitation",
        "Develop a deeper connection with Allah's words",
        "Join a supportive learning community",
        "Learn at your own pace with flexible scheduling",
        "Receive guidance from experienced instructors",
        "Build confidence in leading prayers and recitation"
      ],
      testimonials: [
        { name: "Abdullah Rahman", text: "Learning Quran here has transformed my spiritual journey. The instructors are patient and knowledgeable.", role: "Student" },
        { name: "Fatima Al-Zahra", text: "My children love the Quran classes. They've memorized several surahs and improved their Arabic pronunciation significantly.", role: "Parent" },
        { name: "Ahmed Hassan", text: "The one-on-one tutoring helped me perfect my tajweed. I now lead prayers at my local mosque with confidence.", role: "Graduate" }
      ]
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
      benefits: [
        "Gain comprehensive understanding of Islamic principles",
        "Learn from qualified Islamic scholars",
        "Develop critical thinking about contemporary issues",
        "Connect Islamic teachings to modern life",
        "Build strong foundation in Islamic jurisprudence",
        "Engage in meaningful discussions with peers"
      ],
      testimonials: [
        { name: "Dr. Aisha Mahmoud", text: "The Islamic studies program deepened my understanding of our faith and helped me address modern challenges through Islamic lens.", role: "Graduate Student" },
        { name: "Mohammad Hassan", text: "Studying Hadith and Seerah here gave me the knowledge I needed to guide my family in Islamic principles.", role: "Community Member" },
        { name: "Sarah Abdullah", text: "The comparative religion studies helped me articulate my faith with confidence and respect for other traditions.", role: "Student" }
      ]
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
      benefits: [
        "Develop leadership skills in Islamic context",
        "Build lasting friendships with fellow young Muslims",
        "Engage in community service and social impact",
        "Learn to balance faith with modern challenges",
        "Participate in sports and recreational activities",
        "Receive mentorship from community leaders"
      ],
      testimonials: [
        { name: "Yusuf Ahmed", text: "The youth program helped me find my identity as a young Muslim and gave me the confidence to lead in my community.", role: "Youth Leader" },
        { name: "Khadija Thompson", text: "Through the mentorship program, I learned to balance my studies with Islamic values and community involvement.", role: "Participant" },
        { name: "Omar Ali", text: "The sports activities and discussions created an environment where I could grow spiritually while having fun.", role: "Youth Member" }
      ]
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
      benefits: [
        "Connect with supportive Muslim sisters",
        "Develop professional and personal skills",
        "Learn Islamic parenting principles",
        "Access health and wellness resources",
        "Build entrepreneurial and business skills",
        "Strengthen your role as a Muslim woman"
      ],
      testimonials: [
        { name: "Dr. Maryam Al-Rashid", text: "The women's program empowered me to start my own business while maintaining my Islamic values and family priorities.", role: "Entrepreneur" },
        { name: "Amina Johnson", text: "The parenting workshops taught me how to raise my children with strong Islamic principles in a modern world.", role: "Mother" },
        { name: "Zainab Hassan", text: "The sister circles provided the spiritual and emotional support I needed during challenging times.", role: "Community Member" }
      ]
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
      benefits: [
        "Make meaningful impact in the broader community",
        "Build bridges with people of different faiths",
        "Develop volunteer and leadership skills",
        "Address social justice issues through Islamic lens",
        "Coordinate disaster relief and charitable efforts",
        "Represent Islam positively in public service"
      ],
      testimonials: [
        { name: "Community Outreach Team", text: "Our interfaith dialogue events have created lasting friendships and mutual understanding in our city.", role: "Volunteer Coordinator" },
        { name: "Imam Mohammad", text: "The food bank program demonstrates Islam's commitment to caring for all people, regardless of their faith.", role: "Religious Leader" },
        { name: "Sarah Williams", text: "Joining the disaster relief efforts showed me how Muslims actively contribute to society's wellbeing.", role: "Non-Muslim Partner" }
      ]
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
      benefits: [
        "Fulfill your daily spiritual obligations",
        "Experience community worship and connection",
        "Learn proper prayer etiquette and procedures",
        "Participate in special Islamic celebrations",
        "Access spiritual guidance and counseling",
        "Join in collective worship and remembrance"
      ],
      testimonials: [
        { name: "Imam Mohammad Hassan", text: "Seeing our community come together for prayers, especially Jummah, strengthens our bonds and faith.", role: "Imam" },
        { name: "Abdullah Rahman", text: "The Tarawih prayers during Ramadan create such a peaceful and spiritual atmosphere for the entire family.", role: "Community Member" },
        { name: "Fatima Al-Zahra", text: "Having a place for proper prayer services has been essential for maintaining our spiritual practices.", role: "Worshipper" }
      ]
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
      
      {/* Animated Hero Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white via-orange-50/30 to-purple-50/30 dark:from-gray-800 dark:via-orange-900/10 dark:to-purple-900/10 relative overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
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
              onClick={() => setLocation("/")}
              className="mb-8 hover:bg-primary-start/10 group transition-all duration-300"
              data-testid="button-back-to-home"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </motion.div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl mb-6 shadow-lg animate-pulse`}>
                <service.icon className={`h-10 w-10 ${service.iconColor}`} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary-start to-primary-end dark:from-white dark:via-primary-start dark:to-primary-end bg-clip-text text-transparent mb-6 leading-tight">
                {service.title}
              </h1>
              <div className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-300 mb-8">
                <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                  <Sparkles className="mr-2 h-5 w-5 text-primary-start" />
                  <span className="font-medium">Transform Your Spiritual Journey</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="modern-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className="modern-card-content p-8 text-center">
                  <Quote className="h-8 w-8 text-primary-start mx-auto mb-4 animate-bounce-slow" />
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed italic">
                    "{service.description}"
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
      <section className="py-16 bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/10 dark:to-purple-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Target className="h-12 w-12 text-primary-start mx-auto mb-4 animate-bounce-slow" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary-start dark:from-white dark:to-primary-start bg-clip-text text-transparent mb-4">
              Transform Your Life Through This Service
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-start to-primary-end mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits?.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card h-full group hover:scale-105 transition-all duration-500">
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

      {/* Service Details */}
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
                <Card className="modern-card group hover:scale-105 transition-all duration-500">
                  <div className="modern-card-content p-8">
                    <div className="flex items-center mb-6">
                      <Sparkles className="h-8 w-8 text-primary-start mr-3 animate-bounce-slow" />
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-start dark:from-white dark:to-primary-start bg-clip-text text-transparent">
                        What's Included
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start bg-gradient-to-r from-primary-start/5 to-primary-end/5 rounded-lg p-3 hover:from-primary-start/10 hover:to-primary-end/10 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-primary-start to-primary-end rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse"></div>
                          <p className="text-gray-700 dark:text-gray-200 font-medium">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="modern-card group hover:scale-105 transition-all duration-500">
                  <div className="modern-card-content p-8">
                    <div className="flex items-center mb-6">
                      <Award className="h-8 w-8 text-primary-end mr-3 animate-bounce-slow" />
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-end dark:from-white dark:to-primary-end bg-clip-text text-transparent">
                        Registration Process
                      </h2>
                    </div>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-start bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-lg">1</div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">Contact Us</h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">Call or visit the center to express your interest and learn more about our programs</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-lg">2</div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">Assessment & Placement</h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">Brief discussion to determine your current level and find the most suitable program</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-lg">3</div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">Begin Your Journey</h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">Start attending classes immediately and begin your transformative learning experience</p>
                        </div>
                      </motion.div>
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

      {/* Testimonials Section */}
      {service.testimonials && (
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
                Success Stories from Our Community
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-islamic-gold to-islamic-green mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.testimonials.map((testimonial: any, index: number) => (
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
              Start Your Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of community members who have transformed their lives through our {service.title.toLowerCase()}. Your spiritual growth begins with a single step!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-start hover:bg-gray-100 group relative overflow-hidden font-bold"
                data-testid="button-register-service-cta"
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
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-start/0 via-primary-start/20 to-primary-start/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-start group transition-all duration-300"
                data-testid="button-explore-services-cta"
                onClick={() => setLocation("/")}
              >
                Explore More Services
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
    </div>
  );
}