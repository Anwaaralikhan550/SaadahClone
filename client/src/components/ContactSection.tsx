import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Share, 
  Send,
  ExternalLink,
  Car,
  Accessibility,
  Bus,
  Utensils
} from "lucide-react";
import { type InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (message: InsertContactMessage) => {
      await apiRequest("POST", "/api/contact", message);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const socialMedia = [
    { platform: "Facebook", icon: "fab fa-facebook-f", color: "bg-blue-600 hover:bg-blue-700" },
    { platform: "Twitter", icon: "fab fa-twitter", color: "bg-blue-400 hover:bg-blue-500" },
    { platform: "Instagram", icon: "fab fa-instagram", color: "bg-pink-600 hover:bg-pink-700" },
    { platform: "YouTube", icon: "fab fa-youtube", color: "bg-red-600 hover:bg-red-700" },
  ];

  const amenities = [
    { icon: Car, label: "Free Parking Available" },
    { icon: Accessibility, label: "Accessibility Accessible" },
    { icon: Bus, label: "Public Transit Nearby" },
    { icon: Utensils, label: "Halal Restaurants Nearby" },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="gradient-primary-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out for questions, visit our center, or join our community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-start/20 to-primary-start/40 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="text-primary-start h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    123 Islamic Center Drive<br />
                    Springfield, IL 62701<br />
                    United States
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary-start hover:text-primary-end transition-colors font-medium p-0"
                    data-testid="button-get-directions"
                  >
                    Get Directions <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone & Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-islamic-green/20 to-islamic-green/40 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="text-islamic-green h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact Info</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center" data-testid="contact-phone">
                      <Phone className="mr-2 h-4 w-4" />
                      (217) 555-0123
                    </div>
                    <div className="flex items-center" data-testid="contact-email">
                      <Mail className="mr-2 h-4 w-4" />
                      info@assaadah.org
                    </div>
                    <div className="flex items-center" data-testid="contact-hours">
                      <Clock className="mr-2 h-4 w-4" />
                      Open Daily 5:00 AM - 10:00 PM
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-end/20 to-primary-end/40 rounded-lg flex items-center justify-center mb-4">
                    <Share className="text-primary-end h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    {socialMedia.map((social) => (
                      <Button
                        key={social.platform}
                        size="sm"
                        className={`w-10 h-10 text-white rounded-lg transition-colors ${social.color}`}
                        data-testid={`social-${social.platform.toLowerCase()}`}
                      >
                        <i className={social.icon}></i>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange("name")}
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange("email")}
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange("subject")}
                        required
                        data-testid="input-subject"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange("message")}
                        required
                        data-testid="textarea-message"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="gradient-primary text-white px-8 py-4 font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h3>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450" 
                      alt="Interactive map showing mosque location with surrounding Islamic community landmarks" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button 
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl transition-all"
                        data-testid="button-open-map"
                      >
                        <MapPin className="text-primary-start mr-2 h-5 w-5" />
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                  
                  {/* Nearby Services */}
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    {amenities.map((amenity, index) => (
                      <div 
                        key={index} 
                        className="flex items-center text-gray-600 dark:text-gray-300"
                        data-testid={`amenity-${index}`}
                      >
                        <amenity.icon className="text-islamic-green mr-2 h-4 w-4" />
                        {amenity.label}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
