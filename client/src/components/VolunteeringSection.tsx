import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function VolunteeringSection() {
  const [showForm, setShowForm] = useState(false);

  const volunteerOpportunities = [
    {
      title: "Education Support",
      description: "Help with tutoring, teaching assistance, and educational programs",
      commitment: "4-6 hours/week",
      skills: ["Teaching", "Patience", "Communication"],
      color: "from-blue-400/20 to-blue-400/40",
    },
    {
      title: "Community Outreach",
      description: "Assist with food distribution, community events, and social programs",
      commitment: "Weekends",
      skills: ["Organization", "People Skills", "Physical Activity"],
      color: "from-green-400/20 to-green-400/40",
    },
    {
      title: "Healthcare Support",
      description: "Support medical camps, health awareness campaigns, and patient care",
      commitment: "Flexible",
      skills: ["Medical Background", "Compassion", "First Aid"],
      color: "from-red-400/20 to-red-400/40",
    },
    {
      title: "Administrative Support",
      description: "Help with office work, data entry, and organizational tasks",
      commitment: "2-3 hours/week",
      skills: ["Computer Skills", "Organization", "Attention to Detail"],
      color: "from-purple-400/20 to-purple-400/40",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Directly impact lives in your community through meaningful service",
    },
    {
      icon: Users,
      title: "Build Connections",
      description: "Connect with like-minded individuals and build lasting friendships",
    },
    {
      icon: Clock,
      title: "Flexible Commitment",
      description: "Choose volunteer opportunities that fit your schedule and availability",
    },
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
            Join Our <span className="gradient-primary-text">Volunteer</span> Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Make a meaningful impact in your community. Join our dedicated team of volunteers and help us serve those in need.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-start/20 to-primary-start/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-primary-start" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {volunteerOpportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full">
                <div className="modern-card-content flex flex-col h-full">
                  <div className={`w-full h-2 bg-gradient-to-r ${opportunity.color} rounded-t-lg mb-6`}></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span><strong>Commitment:</strong> {opportunity.commitment}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skills Needed:</p>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
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

        {/* Volunteer Registration */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {!showForm ? (
            <Button 
              className="modern-button text-lg px-8 py-3 hover:glow-primary"
              onClick={() => setShowForm(true)}
            >
              Get Started as a Volunteer <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Card className="modern-card max-w-2xl mx-auto">
              <div className="modern-card-content">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Volunteer Registration</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Full Name" />
                    <Input type="email" placeholder="Email Address" />
                  </div>
                  <Input placeholder="Phone Number" />
                  <Textarea placeholder="Tell us about your skills and experience" className="min-h-[100px]" />
                  <Textarea placeholder="Which programs are you interested in volunteering for?" className="min-h-[80px]" />
                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="modern-button flex-1">
                      Submit Application
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
}