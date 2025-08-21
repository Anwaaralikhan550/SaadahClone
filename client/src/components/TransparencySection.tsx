import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  PieChart, 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users,
  Heart,
  Download,
  Eye
} from "lucide-react";
import { useLocation } from "wouter";

export default function TransparencySection() {
  const [, setLocation] = useLocation();
  const financialData = [
    {
      category: "Education Programs",
      amount: 125000,
      percentage: 35,
      color: "bg-blue-500",
      projects: 12,
    },
    {
      category: "Healthcare Services",
      amount: 89000,
      percentage: 25,
      color: "bg-red-500",
      projects: 8,
    },
    {
      category: "Emergency Relief",
      amount: 71000,
      percentage: 20,
      color: "bg-orange-500",
      projects: 15,
    },
    {
      category: "Community Development",
      amount: 54000,
      percentage: 15,
      color: "bg-green-500",
      projects: 6,
    },
    {
      category: "Administrative Costs",
      amount: 18000,
      percentage: 5,
      color: "bg-gray-500",
      projects: 0,
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "25,000+",
      label: "People Served",
      description: "Direct beneficiaries across all programs",
    },
    {
      icon: DollarSign,
      number: "$357K",
      label: "Funds Distributed",
      description: "Total charitable spending in 2024",
    },
    {
      icon: Heart,
      number: "41",
      label: "Active Projects",
      description: "Ongoing welfare initiatives",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Program Efficiency",
      description: "Funds directly reaching beneficiaries",
    },
  ];

  const reports = [
    {
      title: "Annual Financial Report 2024",
      type: "Financial Report",
      date: "December 2024",
      size: "2.3 MB",
    },
    {
      title: "Program Impact Assessment",
      type: "Impact Report",
      date: "November 2024",
      size: "1.8 MB",
    },
    {
      title: "Quarterly Audit Report Q3",
      type: "Audit Report",
      date: "October 2024",
      size: "1.2 MB",
    },
    {
      title: "Zakat Distribution Summary",
      type: "Zakat Report",
      date: "September 2024",
      size: "0.9 MB",
    },
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
            Financial <span className="gradient-primary-text">Transparency</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trust is our foundation. See exactly how your donations are making a difference in our community.
          </p>
        </motion.div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card text-center h-full">
                <div className="modern-card-content">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-start/20 to-primary-start/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary-start" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fund Distribution */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="modern-card">
            <div className="modern-card-content">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                2024 Fund Distribution
              </h3>
              <div className="space-y-6">
                {financialData.map((item, index) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${item.color}`}></div>
                        <span className="font-medium text-gray-900 dark:text-white">{item.category}</span>
                        {item.projects > 0 && (
                          <Badge variant="outline" className="text-xs">
                            {item.projects} projects
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900 dark:text-white">
                          ${item.amount.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.percentage}%
                        </div>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Reports and Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Public Reports & Documents
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <Card key={report.title} className="modern-card h-full">
                <div className="modern-card-content flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{report.title}</h4>
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <div><Badge variant="secondary">{report.type}</Badge></div>
                        <div>Published: {report.date}</div>
                        <div>Size: {report.size}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setLocation("/service/transparency")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setLocation("/service/transparency")}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Audit Information */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="modern-card max-w-3xl mx-auto">
            <div className="modern-card-content">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Independent Audit</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our finances are independently audited annually by certified public accountants to ensure 
                complete transparency and accountability to our donors and the community we serve.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Auditing Firm:</p>
                  <p className="text-gray-600 dark:text-gray-400">Community Financial Auditors LLP</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Last Audit:</p>
                  <p className="text-gray-600 dark:text-gray-400">December 2024</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}