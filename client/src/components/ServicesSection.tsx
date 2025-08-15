import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Heart, Baby, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Quran Classes",
      description: "Learn proper Quranic recitation, memorization, and understanding with certified instructors.",
      features: ["Beginner to Advanced levels", "Tajweed and memorization", "Weekend and evening classes"],
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
    },
    {
      icon: GraduationCap,
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering theology, history, and jurisprudence.",
      features: ["Hadith and Seerah studies", "Islamic history and culture", "Fiqh and Islamic law"],
      color: "from-primary-start/20 to-primary-start/40",
      iconColor: "text-primary-start",
    },
    {
      icon: Baby,
      title: "Youth Programs",
      description: "Engaging activities and mentorship programs for young Muslims to grow in faith.",
      features: ["Youth group activities", "Mentorship programs", "Sports and recreation"],
      color: "from-primary-end/20 to-primary-end/40",
      iconColor: "text-primary-end",
    },
    {
      icon: Users,
      title: "Women's Programs",
      description: "Empowering Muslim women through education, support groups, and skill development.",
      features: ["Sister circles and support", "Islamic parenting workshops", "Professional development"],
      color: "from-pink-400/20 to-pink-400/40",
      iconColor: "text-pink-500",
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Building bridges with the broader community through service and interfaith dialogue.",
      features: ["Food banks and charity", "Interfaith dialogue", "Community service projects"],
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
    },
    {
      icon: BookOpen,
      title: "Prayer Services",
      description: "Daily prayers, Jummah services, and special occasion prayers for the community.",
      features: ["Five daily prayers", "Friday Jummah prayers", "Eid and special prayers"],
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-primary-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive Islamic education, spiritual guidance, and community programs for all ages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full group cursor-pointer">
                <div className="modern-card-content">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:glow-primary transition-all duration-300`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:gradient-primary-text transition-all duration-300">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center" data-testid={`feature-${service.title.toLowerCase().replace(" ", "-")}-${featureIndex}`}>
                        <div className="w-1.5 h-1.5 bg-primary-start rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="modern-button w-full hover:glow-primary"
                    data-testid={`button-learn-more-${service.title.toLowerCase().replace(" ", "-")}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
