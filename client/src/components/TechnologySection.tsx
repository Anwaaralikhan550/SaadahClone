import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Users, 
  BookOpen,
  Video,
  MessageCircle,
  Calendar,
  Globe,
  Smartphone,
  Headphones,
  Play
} from "lucide-react";
import { Link } from "wouter";

export default function TechnologySection() {
  const digitalPlatforms = [
    {
      icon: BookOpen,
      title: "Online Courses & Webinars",
      description: "Comprehensive digital learning platform offering Islamic education and professional development courses.",
      features: [
        "Interactive Islamic studies courses",
        "Professional skill development",
        "Live webinar sessions",
        "Recorded lecture library",
        "Progress tracking and certificates"
      ],
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
      stats: { courses: "50+", students: "1,200+" }
    },
    {
      icon: Users,
      title: "Digital Community Groups",
      description: "Online discussion forums and support groups connecting Muslims worldwide.",
      features: [
        "Topic-based discussion forums",
        "Mentorship matching system",
        "Prayer group coordination",
        "Study circle organization",
        "Community event planning"
      ],
      color: "from-green-400/20 to-green-400/40",
      iconColor: "text-green-500",
      stats: { groups: "25+", members: "3,000+" }
    },
    {
      icon: Globe,
      title: "Digital Resource Library",
      description: "Extensive collection of Islamic resources, books, audio lectures, and multimedia content.",
      features: [
        "Digital Quran with translations",
        "Hadith collections and commentary",
        "Islamic books and publications",
        "Audio lectures and recitations",
        "Video documentary series"
      ],
      color: "from-purple-400/20 to-purple-400/40",
      iconColor: "text-purple-500",
      stats: { resources: "2,000+", downloads: "50K+" }
    },
    {
      icon: Headphones,
      title: "24/7 Support Services",
      description: "Round-the-clock digital support including counseling, guidance, and emergency assistance.",
      features: [
        "Live chat counseling services",
        "Emergency support hotline",
        "Online consultation booking",
        "Crisis intervention support",
        "Multi-language assistance"
      ],
      color: "from-red-400/20 to-red-400/40",
      iconColor: "text-red-500",
      stats: { availability: "24/7", languages: "5+" }
    },
  ];

  const digitalPrograms = [
    {
      title: "Digital Literacy Training",
      description: "Basic to advanced computer and internet skills for community members of all ages.",
      target: "All age groups",
      format: "In-person & Online",
      duration: "4-week programs"
    },
    {
      title: "Online Islamic Education",
      description: "Structured Islamic studies program delivered through our digital platform.",
      target: "Youth & Adults",
      format: "Online",
      duration: "6-month courses"
    },
    {
      title: "Tech Skills Bootcamp",
      description: "Intensive training in programming, web development, and digital marketing.",
      target: "Youth & Young Adults",
      format: "Hybrid",
      duration: "12-week bootcamp"
    },
    {
      title: "Senior Tech Support",
      description: "Specialized technology assistance and training for elderly community members.",
      target: "Seniors 60+",
      format: "In-person",
      duration: "Ongoing support"
    }
  ];

  const onlineServices = [
    {
      service: "Virtual Prayer Groups",
      description: "Join prayer sessions and Islamic study circles from anywhere",
      icon: Users,
      availability: "Daily"
    },
    {
      service: "Online Consultation",
      description: "Book appointments with Islamic scholars and counselors",
      icon: Calendar,
      availability: "By appointment"
    },
    {
      service: "Live Streaming Events",
      description: "Participate in community events and lectures remotely",
      icon: Video,
      availability: "Weekly"
    },
    {
      service: "Mobile App Services",
      description: "Access all our services through our mobile application",
      icon: Smartphone,
      availability: "24/7"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology & <span className="gradient-primary-text">Digital Platforms</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging technology to expand our reach, enhance accessibility, and connect our global Muslim community 
            through innovative digital solutions and online services.
          </p>
        </motion.div>

        {/* Digital Platforms */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {digitalPlatforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full">
                <div className="modern-card-content flex flex-col h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mb-6`}>
                    <platform.icon className={`h-6 w-6 ${platform.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{platform.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{platform.description}</p>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    {Object.entries(platform.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary-start">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-start rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button 
                      className="modern-button w-full hover:glow-primary mt-auto"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Explore Platform
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Digital Programs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Digital Awareness Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {digitalPrograms.map((program, index) => (
              <Card key={program.title} className="modern-card">
                <div className="modern-card-content">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{program.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Target:</span>
                      <Badge variant="secondary">{program.target}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Format:</span>
                      <Badge variant="outline">{program.format}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                      <span className="text-gray-700 dark:text-gray-300">{program.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Online Services */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Online Services & Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineServices.map((service, index) => (
              <Card key={service.service} className="modern-card text-center">
                <div className="modern-card-content">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-end/20 to-primary-end/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary-end" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{service.service}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                  <Badge variant="secondary" className="text-xs">{service.availability}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="modern-card max-w-3xl mx-auto">
            <div className="modern-card-content">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Go Digital?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Join our digital community and access all our online services. Whether you're looking to learn, 
                connect, or seek support, our technology platforms are designed to serve you wherever you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    className="modern-button hover:glow-primary"
                  >
                    <Monitor className="h-4 w-4 mr-2" />
                    Access Online Platform
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="modern-button-outline"
                  onClick={() => {
                    window.open('https://discord.gg/as-saadah-community', '_blank');
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Community Chat
                </Button>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Platform Access:</strong> Available 24/7 on all devices<br />
                  <strong>Technical Support:</strong> tech-support@as-saadah.org<br />
                  <strong>Mobile App:</strong> Download from App Store & Google Play
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}