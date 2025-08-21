import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Users, 
  Heart,
  Shield,
  Clock,
  MapPin,
  Phone,
  UserPlus
} from "lucide-react";
import { useLocation } from "wouter";

export default function SocialSafetyNetSection() {
  const [, setLocation] = useLocation();
  const facilities = [
    {
      icon: Home,
      title: "Orphan Hostels",
      description: "Safe, nurturing homes providing comprehensive care for orphaned children.",
      features: [
        "24/7 residential care",
        "Educational support and tutoring",
        "Health and medical care",
        "Psychological counseling",
        "Skill development programs"
      ],
      capacity: "50 children",
      location: "Main Campus",
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
    },
    {
      icon: Users,
      title: "Elderly Care Centers",
      description: "Dignified accommodation and care services for senior community members.",
      features: [
        "Assisted living facilities",
        "Medical supervision",
        "Social activities and companionship",
        "Religious guidance and support",
        "Nutritious meal programs"
      ],
      capacity: "30 residents",
      location: "Community Center",
      color: "from-green-400/20 to-green-400/40",
      iconColor: "text-green-500",
    },
    {
      icon: Heart,
      title: "Community Welfare Centers",
      description: "Multi-purpose centers serving as hubs for various social services and programs.",
      features: [
        "Food distribution programs",
        "Social service coordination",
        "Community meeting spaces",
        "Emergency assistance center",
        "Cultural and educational events"
      ],
      capacity: "500+ daily visitors",
      location: "Multiple Locations",
      color: "from-red-400/20 to-red-400/40",
      iconColor: "text-red-500",
    },
    {
      icon: Shield,
      title: "Crisis Support Services",
      description: "Emergency support and intervention for individuals and families in crisis.",
      features: [
        "Emergency shelter accommodation",
        "Crisis counseling services",
        "Financial emergency assistance",
        "Legal aid and advocacy",
        "Family reunification support"
      ],
      capacity: "24/7 availability",
      location: "City Center",
      color: "from-purple-400/20 to-purple-400/40",
      iconColor: "text-purple-500",
    },
  ];

  const programs = [
    {
      title: "Family Support Program",
      description: "Comprehensive support for families in need, including financial assistance and counseling.",
      beneficiaries: "150+ families",
      duration: "Ongoing"
    },
    {
      title: "Senior Companion Service",
      description: "Volunteer-based program providing companionship and support to isolated elderly residents.",
      beneficiaries: "80+ seniors",
      duration: "Year-round"
    },
    {
      title: "Youth Mentorship Network",
      description: "Connecting at-risk youth with positive role models and educational opportunities.",
      beneficiaries: "200+ youth",
      duration: "Ongoing"
    },
    {
      title: "Emergency Response Team",
      description: "Rapid response team for community emergencies and crisis situations.",
      beneficiaries: "Community-wide",
      duration: "24/7 availability"
    }
  ];

  const stats = [
    { number: "280+", label: "Individuals Housed", icon: Home },
    { number: "1,500+", label: "Families Supported", icon: Users },
    { number: "50+", label: "Staff Members", icon: UserPlus },
    { number: "15", label: "Years of Service", icon: Clock },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Social Safety <span className="gradient-primary-text">Net</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Providing comprehensive care and support systems for our most vulnerable community members, 
            ensuring no one faces their challenges alone.
          </p>
        </motion.div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card text-center">
                <div className="modern-card-content">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-start/20 to-primary-start/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary-start" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</h3>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Facilities and Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full">
                <div className="modern-card-content flex flex-col h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center mb-6`}>
                    <facility.icon className={`h-6 w-6 ${facility.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{facility.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{facility.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{facility.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{facility.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-start rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="modern-button w-full hover:glow-primary mt-auto"
                    onClick={() => setLocation("/service/social-safety-net")}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Programs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Community Support Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={program.title} className="modern-card">
                <div className="modern-card-content">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{program.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{program.beneficiaries}</Badge>
                    <Badge variant="outline">{program.duration}</Badge>
                  </div>
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
                Need Support or Want to Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                If you or someone you know needs assistance, or if you'd like to contribute to our safety net programs, 
                we're here to help connect you with the right resources and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="modern-button hover:glow-primary"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Request Assistance
                </Button>
                <Button 
                  variant="outline" 
                  className="modern-button-outline"
                  onClick={() => setLocation("/service/social-safety-net")}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Support Our Programs
                </Button>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Emergency Hotline:</strong> Available 24/7 for urgent situations<br />
                  <strong>General Inquiries:</strong> support@as-saadah.org<br />
                  <strong>Program Coordinator:</strong> +1 (555) 987-6543
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}