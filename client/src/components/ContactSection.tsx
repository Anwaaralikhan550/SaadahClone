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
import asSaadahLogo from "../assets/as-saadah-logo.png";

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
    { platform: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", color: "bg-[#1877f2] hover:bg-[#166fe5] hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25", url: "https://facebook.com" },
    { platform: "WhatsApp", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.425 3.488", color: "bg-[#25d366] hover:bg-[#20ba5a] hover:scale-110 hover:shadow-lg hover:shadow-green-500/25", url: "https://whatsapp.com" },
    { platform: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25", url: "https://instagram.com" },
    { platform: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", color: "bg-[#ff0000] hover:bg-[#e60000] hover:scale-110 hover:shadow-lg hover:shadow-red-500/25", url: "https://youtube.com" },
  ];

  const amenities = [
    { icon: Car, label: "Free Parking Available" },
    { icon: Accessibility, label: "Accessibility Accessible" },
    { icon: Bus, label: "Public Transit Nearby" },
    { icon: Utensils, label: "Halal Restaurants Nearby" },
  ];

  return (
    <section id="contact" className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Organization Logo */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={asSaadahLogo} 
              alt="As-Saadah Islamic Organization" 
              className="w-auto object-contain filter dark:brightness-110"
              style={{ height: '8rem' }}
              data-testid="contact-logo"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1.0, 
                ease: "easeOut",
                delay: 0.3 
              }}
              whileHover={{ 
                scale: 1.08, 
                rotate: [0, -1, 1, 0],
                transition: { 
                  duration: 0.3,
                  rotate: { repeat: 1, duration: 0.4 }
                } 
              }}
              viewport={{ once: true, margin: "-50px" }}
            />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Reach Out and <span className="gradient-primary-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            CONNECTING FOR EXCELLENCE
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
              <Card className="modern-card group">
                <div className="modern-card-content">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-start/20 to-primary-start/40 rounded-xl flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                    <MapPin className="text-primary-start h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Lower Ground Floor, 17 Hills, Traders Colony, 17 Mile Islamabad
                  </p>
                  <Button 
                    className="modern-button mt-2 hover:glow-primary"
                    data-testid="button-get-directions"
                    onClick={() => window.open('https://maps.google.com/maps?q=Lower+Ground+Floor,+17+Hills,+Traders+Colony,+17+mile+Islamabad,+Pakistan', '_blank')}
                  >
                    Get Directions <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Phone & Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card group">
                <div className="modern-card-content">
                  <div className="w-12 h-12 bg-gradient-to-br from-islamic-green/20 to-islamic-green/40 rounded-xl flex items-center justify-center mb-4 group-hover:glow-green transition-all duration-300">
                    <Phone className="text-islamic-green h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact Info</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center" data-testid="contact-phone">
                      <Phone className="mr-2 h-4 w-4" />
                      <a href="tel:+923181078871" className="text-primary-start hover:underline">
                        +92 318 10 78 871
                      </a>
                    </div>
                    <div className="flex items-center" data-testid="contact-email">
                      <Mail className="mr-2 h-4 w-4" />
                      <a href="mailto:info@as-saadah.com" className="text-primary-start hover:underline">
                        info@as-saadah.com
                      </a>
                    </div>
                    <div className="flex items-center" data-testid="contact-website">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <a href="https://as-saadah.com" target="_blank" rel="noopener noreferrer" className="text-primary-start hover:underline">
                        as-saadah.com
                      </a>
                    </div>
                    <div className="flex items-center" data-testid="contact-hours">
                      <Clock className="mr-2 h-4 w-4" />
                      Prayer Times Available Daily
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card group">
                <div className="modern-card-content">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/40 rounded-xl flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                    <Share className="text-purple-600 h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    {socialMedia.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 text-white rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center ${social.color}`}
                        data-testid={`social-${social.platform.toLowerCase()}`}
                        title={`Follow us on ${social.platform}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
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
              <Card className="modern-card group">
                <div className="modern-card-content p-8">
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
                      className="modern-button hover:glow-primary w-full sm:w-auto"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card group">
                <div className="modern-card-content">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h3>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450" 
                      alt="Interactive map showing mosque location with surrounding Islamic community landmarks" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button 
                        className="modern-button hover:glow-primary"
                        data-testid="button-open-map"
                        onClick={() => window.open('https://maps.google.com/maps?q=123+Islamic+Center+Drive,+Springfield,+IL+62701', '_blank')}
                      >
                        <MapPin className="mr-2 h-5 w-5" />
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
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
