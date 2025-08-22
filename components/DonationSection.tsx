import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Heart, HandHelping, Share, ShoppingBag } from "lucide-react";
import { type InsertDonation } from "@shared/schema";

export default function DonationSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [donationType, setDonationType] = useState<string>("general");
  const [amount, setAmount] = useState<number>(0);
  const [frequency, setFrequency] = useState<string>("one-time");
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");

  const donationMutation = useMutation({
    mutationFn: async (donation: InsertDonation) => {
      await apiRequest("POST", "/api/donations", donation);
    },
    onSuccess: () => {
      toast({
        title: "Donation Successful",
        description: "Thank you for your generous donation. Receipt sent to your email.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/donations"] });
      // Reset form
      setAmount(0);
      setDonorName("");
      setDonorEmail("");
    },
    onError: (error) => {
      toast({
        title: "Donation Failed",
        description: error.message || "Failed to process donation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail || amount <= 0) {
      toast({
        title: "Invalid Form",
        description: "Please fill in all required fields and enter a valid amount.",
        variant: "destructive",
      });
      return;
    }

    donationMutation.mutate({
      amount: amount * 100, // Convert to cents
      donationType,
      frequency,
      donorName,
      donorEmail,
    });
  };

  const presetAmounts = [25, 50, 100, 250];
  const donationTypes = [
    { id: "general", label: "General Fund" },
    { id: "zakat", label: "Zakat" },
    { id: "sadaqah", label: "Sadaqah" },
    { id: "mosque", label: "Mosque Fund" },
  ];
  
  const frequencies = [
    { id: "one-time", label: "One-time" },
    { id: "monthly", label: "Monthly" },
    { id: "yearly", label: "Yearly" },
  ];

  return (
    <section id="donate" className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Support Our <span className="gradient-primary-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your generous donations help us continue serving the community and spreading the beautiful message of Islam.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="modern-card group">
              <div className="modern-card-content p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Make a Donation</h3>
                
                <form onSubmit={handleDonation} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <Label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Donation Type
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {donationTypes.map((type) => (
                        <Button
                          key={type.id}
                          type="button"
                          variant={donationType === type.id ? "default" : "outline"}
                          className={donationType === type.id ? "modern-button" : "border-2 hover:border-primary-start hover:text-primary-start transition-all duration-300"}
                          onClick={() => setDonationType(type.id)}
                          data-testid={`donation-type-${type.id}`}
                        >
                          {type.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <Label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Amount
                    </Label>
                    <div className="grid grid-cols-4 gap-3 mb-3">
                      {presetAmounts.map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={amount === preset ? "default" : "outline"}
                          className={amount === preset ? "modern-button" : "border-2 hover:border-primary-start hover:text-primary-start transition-all duration-300"}
                          onClick={() => setAmount(preset)}
                          data-testid={`amount-${preset}`}
                        >
                          ${preset}
                        </Button>
                      ))}
                    </div>
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={amount || ""}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      min="1"
                      data-testid="input-custom-amount"
                    />
                  </div>

                  {/* Frequency */}
                  <div>
                    <Label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Frequency
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      {frequencies.map((freq) => (
                        <Button
                          key={freq.id}
                          type="button"
                          variant={frequency === freq.id ? "default" : "outline"}
                          className={frequency === freq.id ? "modern-button" : "border-2 hover:border-primary-start hover:text-primary-start transition-all duration-300"}
                          onClick={() => setFrequency(freq.id)}
                          data-testid={`frequency-${freq.id}`}
                        >
                          {freq.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={donorName.split(" ")[0] || ""}
                        onChange={(e) => {
                          const lastName = donorName.split(" ").slice(1).join(" ");
                          setDonorName(`${e.target.value} ${lastName}`.trim());
                        }}
                        required
                        data-testid="input-first-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={donorName.split(" ").slice(1).join(" ") || ""}
                        onChange={(e) => {
                          const firstName = donorName.split(" ")[0] || "";
                          setDonorName(`${firstName} ${e.target.value}`.trim());
                        }}
                        required
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full modern-button hover:glow-primary text-lg"
                    disabled={donationMutation.isPending}
                    data-testid="button-donate"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    {donationMutation.isPending ? "Processing..." : "Donate Now"}
                  </Button>
                </form>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Your donation is secure and tax-deductible. Receipt will be sent via email.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Impact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Current Campaign */}
            <Card className="modern-card group">
              <div className="modern-card-content">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Campaign</h3>
                <h4 className="text-lg font-semibold text-primary-start mb-2">Mosque Renovation Project</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Help us renovate our prayer hall and add new facilities for the growing community.
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="font-medium text-gray-900 dark:text-white">$42,500 / $75,000</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="gradient-primary h-3 rounded-full" style={{ width: "57%" }}></div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">123 supporters</div>
                </div>
                
                <Button 
                  className="modern-button w-full hover:glow-primary mt-auto"
                  data-testid="button-learn-more-campaign"
                  onClick={() => {
                    toast({
                      title: "Campaign Details",
                      description: "Visit our mosque to learn more about the renovation project, see architectural plans, and speak with project coordinators. Tours available after Friday prayers.",
                    });
                  }}
                >
                  Learn More About This Campaign
                </Button>
              </div>
            </Card>

            {/* Impact Stats */}
            <Card className="modern-card group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <div className="modern-card-content">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Your Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "250+", label: "Students Taught" },
                    { value: "100+", label: "Families Helped" },
                    { value: "50+", label: "Events Hosted" },
                    { value: "1,000+", label: "Meals Provided" },
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center" data-testid={`impact-stat-${index}`}>
                      <div className="text-2xl font-bold text-islamic-green mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Other Ways to Help */}
            <Card className="modern-card group">
              <div className="modern-card-content">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Other Ways to Help</h3>
                <div className="space-y-3">
                  {[
                    { icon: HandHelping, label: "Volunteer Your Time", testId: "volunteer" },
                    { icon: ShoppingBag, label: "Shop with AmazonSmile", testId: "amazon-smile" },
                    { icon: Share, label: "Spread the Word", testId: "spread-word" },
                  ].map((item) => (
                    <Button
                      key={item.testId}
                      variant="outline"
                      className="w-full justify-start border-2 hover:border-primary-start hover:text-primary-start hover:glow-primary transition-all duration-300"
                      data-testid={`button-${item.testId}`}
                      onClick={() => {
                        if (item.testId === 'volunteer') {
                          document.getElementById('volunteering')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (item.testId === 'amazon-smile') {
                          window.open('https://smile.amazon.com/ch/45-0123456', '_blank');
                        } else if (item.testId === 'spread-word') {
                          navigator.share ? navigator.share({
                            title: 'As-Saadah Islamic Organization',
                            text: 'Supporting our community through faith, education, and service.',
                            url: window.location.href
                          }) : toast({
                            title: "Share Our Mission",
                            description: "Copy this URL to share with friends and family: " + window.location.href,
                          });
                        }
                      }}
                    >
                      <item.icon className="text-primary-start mr-3 h-5 w-5" />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
