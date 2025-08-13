import { motion } from "framer-motion";
import { BookOpen, Users, Heart } from "lucide-react";

export default function MissionSection() {
  const stats = [
    { value: "500+", label: "Active Members", icon: "👥" },
    { value: "25+", label: "Programs", icon: "📚" },
    { value: "15", label: "Years Serving", icon: "⭐" },
    { value: "100+", label: "Annual Events", icon: "🎉" },
  ];

  const missions = [
    {
      icon: BookOpen,
      title: "Faith",
      description: "Strengthening our connection with Allah through Quran, Sunnah, and continuous spiritual development.",
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong bonds among Muslims and fostering understanding with our broader community.",
      color: "from-primary-start/20 to-primary-start/40",
      iconColor: "text-primary-start",
    },
    {
      icon: Heart,
      title: "Service",
      description: "Serving humanity through charitable works, education, and social justice initiatives.",
      color: "from-primary-end/20 to-primary-end/40",
      iconColor: "text-primary-end",
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
            Our <span className="gradient-primary-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated to fostering spiritual growth, community unity, and positive social impact through Islamic teachings and values.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              className="text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`mission-${mission.title.toLowerCase()}`}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${mission.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300`}>
                <mission.icon className={`h-8 w-8 ${mission.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{mission.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {mission.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div 
          className="gradient-primary rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`stat-${stat.label.toLowerCase().replace(" ", "-")}`}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
