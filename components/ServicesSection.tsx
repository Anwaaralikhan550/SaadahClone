import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Heart, 
  Baby, 
  ArrowRight,
  Stethoscope,
  DollarSign,
  Home,
  UserCheck,
  Trees,
  Shield,
  Lightbulb,
  Briefcase,
  BarChart3,
  Building2
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    // Education Services
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      description: "Establishment and development of schools, colleges, scholarships, and literacy programs.",
      features: ["Schools and colleges development", "Scholarships for deserving students", "Adult literacy and women's education"],
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
    },
    {
      id: "health",
      icon: Stethoscope,
      title: "Health Services",
      description: "Hospitals, clinics, free medical services, and health awareness campaigns.",
      features: ["Hospitals and medical centers", "Free medicines and vaccinations", "Health awareness workshops"],
      color: "from-red-400/20 to-red-400/40",
      iconColor: "text-red-500",
    },
    {
      id: "poverty-alleviation",
      icon: DollarSign,
      title: "Poverty Alleviation",
      description: "Financial assistance, skill training, and basic necessities distribution for low-income families.",
      features: ["Financial assistance programs", "Skill training and employment", "Food and clothing distribution"],
      color: "from-green-400/20 to-green-400/40",
      iconColor: "text-green-500",
    },
    {
      id: "refugees-homeless",
      icon: Home,
      title: "Refugees & Homeless Support",
      description: "Shelters, temporary housing, and support for displaced individuals and families.",
      features: ["Emergency shelters", "Employment opportunities", "Educational support programs"],
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
    },
    {
      id: "women-children",
      icon: Users,
      title: "Women & Children Welfare",
      description: "Empowerment programs, childcare centers, and protection services.",
      features: ["Women empowerment programs", "Childcare and protection centers", "Rights awareness campaigns"],
      color: "from-pink-400/20 to-pink-400/40",
      iconColor: "text-pink-500",
    },
    {
      id: "environmental",
      icon: Trees,
      title: "Environmental Protection",
      description: "Tree plantation drives and waste management initiatives for a cleaner environment.",
      features: ["Tree plantation campaigns", "Waste and pollution control", "Environmental awareness programs"],
      color: "from-emerald-400/20 to-emerald-400/40",
      iconColor: "text-emerald-500",
    },
    {
      id: "religious-programs",
      icon: BookOpen,
      title: "Religious & Social Programs",
      description: "Islamic education, mosque services, and special religious programs.",
      features: ["Ramadan and Eid relief programs", "Islamic schools and Quran courses", "Mosque construction and maintenance"],
      color: "from-primary-start/20 to-primary-start/40",
      iconColor: "text-primary-start",
    },
    {
      id: "emergency-relief",
      icon: Shield,
      title: "Emergency Relief",
      description: "Immediate aid during disasters and emergency preparedness programs.",
      features: ["Natural disaster response", "Emergency relief distribution", "Disaster preparedness training"],
      color: "from-orange-400/20 to-orange-400/40",
      iconColor: "text-orange-500",
    },
    {
      id: "youth-development",
      icon: Baby,
      title: "Youth Development",
      description: "Leadership training, sports activities, and professional development for young people.",
      features: ["Leadership training programs", "Sports and cultural activities", "Career guidance and mentoring"],
      color: "from-purple-400/20 to-purple-400/40",
      iconColor: "text-purple-500",
    },
    {
      id: "professional-development",
      icon: Briefcase,
      title: "Professional Development",
      description: "Vocational training, business skills, and IT education programs.",
      features: ["Vocational and business training", "IT and digital skills courses", "Entrepreneurship support"],
      color: "from-indigo-400/20 to-indigo-400/40",
      iconColor: "text-indigo-500",
    },
    {
      id: "research-data",
      icon: BarChart3,
      title: "Research & Data Analysis",
      description: "Community needs assessments and technological development projects.",
      features: ["Community needs research", "Scientific development projects", "Data-driven solutions"],
      color: "from-cyan-400/20 to-cyan-400/40",
      iconColor: "text-cyan-500",
    },
    {
      id: "social-business",
      icon: Building2,
      title: "Social Entrepreneurship",
      description: "Supporting local businesses and welfare-based business models.",
      features: ["Local business support", "Product marketing assistance", "Sustainable business models"],
      color: "from-yellow-400/20 to-yellow-400/40",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <section id="services" className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
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
                <div className="modern-card-content flex flex-col h-full">
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
                    className="modern-button w-full hover:glow-primary mt-auto"
                    data-testid={`button-learn-more-${service.title.toLowerCase().replace(" ", "-")}`}
                    onClick={() => {
                      setLocation(`/service/${service.id}`);
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
