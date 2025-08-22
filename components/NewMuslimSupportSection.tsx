import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  DollarSign, 
  Heart,
  Home,
  GraduationCap,
  Calendar,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function NewMuslimSupportSection() {
  const supportServices = [
    {
      icon: BookOpen,
      title: "Islamic Education & Training",
      description: "Comprehensive introduction to Islamic beliefs, practices, and lifestyle guidance.",
      features: [
        "Basic Islamic principles and beliefs",
        "Quran reading and understanding",
        "Prayer (Salah) instruction",
        "Islamic history and culture"
      ],
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
    },
    {
      icon: DollarSign,
      title: "Initial Financial Assistance",
      description: "Temporary financial support to help new Muslims during their transition period.",
      features: [
        "Emergency financial aid",
        "Help with basic necessities",
        "Job search assistance",
        "Housing support guidance"
      ],
      color: "from-green-400/20 to-green-400/40",
      iconColor: "text-green-500",
    },
    {
      icon: Users,
      title: "Social Inclusion Programs",
      description: "Connect with the Muslim community and build lasting friendships and support networks.",
      features: [
        "Welcome events and gatherings",
        "Mentorship programs",
        "Community integration activities",
        "Cultural orientation sessions"
      ],
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
    },
    {
      icon: Home,
      title: "Family Support Services",
      description: "Specialized support for new Muslim families navigating their faith journey together.",
      features: [
        "Family counseling services",
        "Children's Islamic education",
        "Parenting guidance",
        "Marriage and relationship support"
      ],
      color: "from-pink-400/20 to-pink-400/40",
      iconColor: "text-pink-500",
    },
  ];

  const mentorshipProgram = {
    title: "One-on-One Mentorship",
    description: "Get paired with an experienced Muslim mentor who will guide you through your Islamic journey.",
    benefits: [
      "Personal guidance and support",
      "Regular check-ins and meetings",
      "Help with daily Islamic practices",
      "Cultural and social integration",
      "Long-term friendship and support"
    ]
  };

  const resources = [
    {
      type: "Educational Materials",
      items: [
        "Beginner's Guide to Islam",
        "Prayer instruction booklet",
        "Quran with translation",
        "Islamic calendar and important dates"
      ]
    },
    {
      type: "Community Resources",
      items: [
        "Local mosque directory",
        "Halal food guide",
        "Islamic clothing stores",
        "Muslim professional networks"
      ]
    },
    {
      type: "Online Support",
      items: [
        "Virtual learning sessions",
        "Online discussion groups",
        "Digital resource library",
        "24/7 support hotline"
      ]
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            New Muslim <span className="gradient-primary-text">Support</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to Islam! We're here to support you on your beautiful journey with comprehensive guidance, 
            community connection, and ongoing assistance.
          </p>
        </motion.div>

        {/* Support Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full">
                <div className="modern-card-content flex flex-col h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-start rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button 
                      className="modern-button w-full hover:glow-primary mt-auto"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Program */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="modern-card">
            <div className="modern-card-content">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-end/20 to-primary-end/40 rounded-xl flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-primary-end" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{mentorshipProgram.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{mentorshipProgram.description}</p>
                  <Link href="/contact">
                    <Button 
                      className="modern-button hover:glow-primary"
                    >
                      Request a Mentor
                    </Button>
                  </Link>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Program Benefits:</h4>
                  <ul className="space-y-3">
                    {mentorshipProgram.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-end rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Available Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={resource.type} className="modern-card">
                <div className="modern-card-content">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{resource.type}</h4>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-islamic-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Contact and Support */}
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
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our team is here to support you every step of the way. Reach out to us for personalized assistance 
                and to connect with our New Muslim Support program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    className="modern-button hover:glow-primary"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Meeting
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="modern-button-outline"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support Line
                  </Button>
                </Link>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Support Hotline:</strong> Available 24/7 for urgent questions and guidance<br />
                  <strong>Email:</strong> newmuslim@as-saadah.org<br />
                  <strong>WhatsApp:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}