import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, GraduationCap, Users, Heart, Baby, Clock, MapPin, Phone, Mail, Star, Award, Quote, CheckCircle, Sparkles, Target, Gift, Home, Shield, Trees, Briefcase, BarChart3, Building2, Monitor } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function ServiceDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const serviceId = params.id;

  useEffect(() => {
    // Auto-scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = {
    "quran-classes": {
      icon: BookOpen,
      title: "Quran Classes",
      description: "Learn proper Quranic recitation, memorization, and understanding with certified instructors in a supportive community environment.",
      features: [
        "Beginner to Advanced levels available",
        "Tajweed and proper recitation training", 
        "Memorization (Hifz) programs",
        "Weekend and evening classes",
        "One-on-one tutoring available",
        "Female and male instructors"
      ],
      schedule: "Monday-Friday: 6:00 PM - 8:00 PM, Saturday-Sunday: 10:00 AM - 12:00 PM",
      instructor: "Sheikh Abdullah Rahman & Qari Fatima Al-Zahra",
      age: "All ages welcome (children 5+ to adults)",
      fee: "Free for community members, $50/month for non-members",
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
      benefits: [
        "Master proper Quranic pronunciation and recitation",
        "Develop a deeper connection with Allah's words",
        "Join a supportive learning community",
        "Learn at your own pace with flexible scheduling",
        "Receive guidance from experienced instructors",
        "Build confidence in leading prayers and recitation"
      ],
      testimonials: [
        { name: "Abdullah Rahman", text: "Learning Quran here has transformed my spiritual journey. The instructors are patient and knowledgeable.", role: "Student" },
        { name: "Fatima Al-Zahra", text: "My children love the Quran classes. They've memorized several surahs and improved their Arabic pronunciation significantly.", role: "Parent" },
        { name: "Ahmed Hassan", text: "The one-on-one tutoring helped me perfect my tajweed. I now lead prayers at my local mosque with confidence.", role: "Graduate" }
      ]
    },
    "islamic-studies": {
      icon: GraduationCap,
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering theology, history, jurisprudence, and contemporary issues facing Muslims today.",
      features: [
        "Hadith and Seerah (Prophet's biography) studies",
        "Islamic history and civilization",
        "Fiqh (Islamic jurisprudence)",
        "Comparative religion studies",
        "Arabic language fundamentals",
        "Contemporary Islamic issues"
      ],
      schedule: "Tuesday & Thursday: 7:00 PM - 9:00 PM, Sunday: 2:00 PM - 4:00 PM",
      instructor: "Dr. Imam Mohammad Hassan & Dr. Aisha Mahmoud",
      age: "Adults and youth 14+",
      fee: "Free for community members",
      color: "from-primary-start/20 to-primary-start/40",
      iconColor: "text-primary-start",
      benefits: [
        "Gain comprehensive understanding of Islamic principles",
        "Learn from qualified Islamic scholars",
        "Develop critical thinking about contemporary issues",
        "Connect Islamic teachings to modern life",
        "Build strong foundation in Islamic jurisprudence",
        "Engage in meaningful discussions with peers"
      ],
      testimonials: [
        { name: "Dr. Aisha Mahmoud", text: "The Islamic studies program deepened my understanding of our faith and helped me address modern challenges through Islamic lens.", role: "Graduate Student" },
        { name: "Mohammad Hassan", text: "Studying Hadith and Seerah here gave me the knowledge I needed to guide my family in Islamic principles.", role: "Community Member" },
        { name: "Sarah Abdullah", text: "The comparative religion studies helped me articulate my faith with confidence and respect for other traditions.", role: "Student" }
      ]
    },
    "youth-programs": {
      icon: Baby,
      title: "Youth Programs",
      description: "Engaging activities and mentorship programs designed to help young Muslims grow in faith while building leadership skills and community connections.",
      features: [
        "Youth group activities and discussions",
        "Islamic leadership development",
        "Sports and recreational activities",
        "Community service projects",
        "Islamic art and creativity workshops",
        "Peer mentorship programs"
      ],
      schedule: "Friday: 6:00 PM - 8:00 PM, Saturday: 3:00 PM - 6:00 PM",
      instructor: "Brother Yusuf Ahmed & Sister Khadija Thompson",
      age: "Ages 12-18",
      fee: "Free for all participants",
      color: "from-primary-end/20 to-primary-end/40",
      iconColor: "text-primary-end",
      benefits: [
        "Develop leadership skills in Islamic context",
        "Build lasting friendships with fellow young Muslims",
        "Engage in community service and social impact",
        "Learn to balance faith with modern challenges",
        "Participate in sports and recreational activities",
        "Receive mentorship from community leaders"
      ],
      testimonials: [
        { name: "Yusuf Ahmed", text: "The youth program helped me find my identity as a young Muslim and gave me the confidence to lead in my community.", role: "Youth Leader" },
        { name: "Khadija Thompson", text: "Through the mentorship program, I learned to balance my studies with Islamic values and community involvement.", role: "Participant" },
        { name: "Omar Ali", text: "The sports activities and discussions created an environment where I could grow spiritually while having fun.", role: "Youth Member" }
      ]
    },
    "womens-programs": {
      icon: Users,
      title: "Women's Programs",
      description: "Empowering Muslim women through Islamic education, professional development, support groups, and skill-building workshops in a nurturing environment.",
      features: [
        "Sister circles and spiritual support",
        "Islamic parenting workshops",
        "Professional development seminars",
        "Health and wellness programs",
        "Cooking and homemaking classes",
        "Business and entrepreneurship support"
      ],
      schedule: "Wednesday: 10:00 AM - 12:00 PM, Saturday: 1:00 PM - 3:00 PM",
      instructor: "Dr. Maryam Al-Rashid & Sister Amina Johnson",
      age: "Adult women 18+",
      fee: "Free for community members",
      color: "from-pink-400/20 to-pink-400/40",
      iconColor: "text-pink-500",
      benefits: [
        "Connect with supportive Muslim sisters",
        "Develop professional and personal skills",
        "Learn Islamic parenting principles",
        "Access health and wellness resources",
        "Build entrepreneurial and business skills",
        "Strengthen your role as a Muslim woman"
      ],
      testimonials: [
        { name: "Dr. Maryam Al-Rashid", text: "The women's program empowered me to start my own business while maintaining my Islamic values and family priorities.", role: "Entrepreneur" },
        { name: "Amina Johnson", text: "The parenting workshops taught me how to raise my children with strong Islamic principles in a modern world.", role: "Mother" },
        { name: "Zainab Hassan", text: "The sister circles provided the spiritual and emotional support I needed during challenging times.", role: "Community Member" }
      ]
    },
    "community-outreach": {
      icon: Heart,
      title: "Community Outreach",
      description: "Building bridges with the broader community through charitable work, interfaith dialogue, and service projects that embody Islamic values.",
      features: [
        "Food banks and charity distribution",
        "Interfaith dialogue and events",
        "Community service projects",
        "Disaster relief coordination",
        "Educational outreach programs",
        "Social justice advocacy"
      ],
      schedule: "Monthly events - See calendar for specific dates",
      instructor: "Community Outreach Committee",
      age: "All ages welcome",
      fee: "Free participation, donations welcome",
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
      benefits: [
        "Make meaningful impact in the broader community",
        "Build bridges with people of different faiths",
        "Develop volunteer and leadership skills",
        "Address social justice issues through Islamic lens",
        "Coordinate disaster relief and charitable efforts",
        "Represent Islam positively in public service"
      ],
      testimonials: [
        { name: "Community Outreach Team", text: "Our interfaith dialogue events have created lasting friendships and mutual understanding in our city.", role: "Volunteer Coordinator" },
        { name: "Imam Mohammad", text: "The food bank program demonstrates Islam's commitment to caring for all people, regardless of their faith.", role: "Religious Leader" },
        { name: "Sarah Williams", text: "Joining the disaster relief efforts showed me how Muslims actively contribute to society's wellbeing.", role: "Non-Muslim Partner" }
      ]
    },
    "prayer-services": {
      icon: BookOpen,
      title: "Prayer Services",
      description: "Regular prayer services including daily prayers, Friday Jummah, special occasion prayers, and spiritual guidance for the community.",
      features: [
        "Five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha)",
        "Friday Jummah prayers with khutbah",
        "Eid prayers and celebrations",
        "Tarawih prayers during Ramadan",
        "Funeral prayers (Janazah)",
        "Special occasion prayers"
      ],
      schedule: "Daily prayers as per Islamic calendar, Jummah: Friday 1:00 PM",
      instructor: "Imam Mohammad Hassan & community volunteers",
      age: "All community members",
      fee: "Free for all",
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
      benefits: [
        "Fulfill your daily spiritual obligations",
        "Experience community worship and connection",
        "Learn proper prayer etiquette and procedures",
        "Participate in special Islamic celebrations",
        "Access spiritual guidance and counseling",
        "Join in collective worship and remembrance"
      ],
      testimonials: [
        { name: "Imam Mohammad Hassan", text: "Seeing our community come together for prayers, especially Jummah, strengthens our bonds and faith.", role: "Imam" },
        { name: "Abdullah Rahman", text: "The Tarawih prayers during Ramadan create such a peaceful and spiritual atmosphere for the entire family.", role: "Community Member" },
        { name: "Fatima Al-Zahra", text: "Having a place for proper prayer services has been essential for maintaining our spiritual practices.", role: "Worshipper" }
      ]
    },
    // New comprehensive foundation services
    "education": {
      icon: GraduationCap,
      title: "Education Services",
      description: "Comprehensive educational support from establishing schools and colleges to providing scholarships and literacy programs that transform lives and communities.",
      features: [
        "Schools and colleges establishment",
        "Merit-based scholarships for deserving students",
        "Adult literacy programs for all ages",
        "Women's education and empowerment",
        "Vocational training and skill development",
        "Educational resource centers"
      ],
      schedule: "Year-round programs with flexible scheduling",
      instructor: "Certified educators and volunteers",
      age: "All ages from children to adults",
      fee: "Scholarships available, sliding scale fees",
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
      benefits: [
        "Access quality education regardless of financial status",
        "Develop skills for better employment opportunities",
        "Build confidence through literacy and knowledge",
        "Connect education with Islamic values",
        "Receive mentorship and academic support",
        "Join a supportive learning community"
      ],
      testimonials: [
        { name: "Amina Abdullah", text: "The scholarship program enabled me to pursue my engineering degree and now I'm giving back to the community.", role: "Scholarship Recipient" },
        { name: "Hassan Mohamed", text: "The adult literacy program changed my life. I can now read to my children and help them with homework.", role: "Graduate" },
        { name: "Dr. Sarah Khan", text: "Teaching at the foundation's schools allows me to combine quality education with Islamic principles.", role: "Educator" }
      ]
    },
    "health": {
      icon: Heart,
      title: "Health Services",
      description: "Comprehensive healthcare support including hospitals, clinics, free medical services, and health awareness programs serving our community's physical well-being.",
      features: [
        "Community hospitals and medical centers",
        "Free medicines and vaccination programs",
        "Health awareness workshops and campaigns",
        "Mobile medical units for remote areas",
        "Mental health and counseling services",
        "Preventive healthcare programs"
      ],
      schedule: "24/7 emergency services, daily clinics 8 AM - 6 PM",
      instructor: "Licensed medical professionals and volunteers",
      age: "All ages, prenatal to elderly care",
      fee: "Free for low-income families, subsidized rates",
      color: "from-red-400/20 to-red-400/40",
      iconColor: "text-red-500",
      benefits: [
        "Access quality healthcare regardless of ability to pay",
        "Receive preventive care and health education",
        "Get support for mental health and wellness",
        "Access specialized medical services",
        "Participate in community health programs",
        "Receive care aligned with Islamic principles"
      ],
      testimonials: [
        { name: "Dr. Fatima Al-Zahra", text: "Providing healthcare through Islamic principles of compassion has been deeply fulfilling for our medical team.", role: "Chief Medical Officer" },
        { name: "Ahmad Hassan", text: "The free medication program helped manage my diabetes when I couldn't afford treatment elsewhere.", role: "Patient" },
        { name: "Nurse Khadija", text: "The mobile clinics reach families who otherwise wouldn't have access to basic healthcare services.", role: "Healthcare Provider" }
      ]
    },
    "poverty-alleviation": {
      icon: Gift,
      title: "Poverty Alleviation",
      description: "Comprehensive support for low-income families through financial assistance, skill training, and distribution of basic necessities to break the cycle of poverty.",
      features: [
        "Emergency financial assistance programs",
        "Skill training and employment placement",
        "Food pantry and clothing distribution",
        "Housing assistance and support",
        "Microfinance and small business loans",
        "Financial literacy education"
      ],
      schedule: "Monday-Friday 9 AM - 5 PM, emergency assistance 24/7",
      instructor: "Social workers and community volunteers",
      age: "Families and individuals in need",
      fee: "Free services and assistance",
      color: "from-green-400/20 to-green-400/40",
      iconColor: "text-green-500",
      benefits: [
        "Receive immediate relief during financial crises",
        "Develop skills for sustainable employment",
        "Access resources for basic necessities",
        "Get support for housing and stability",
        "Learn financial management and planning",
        "Build pathways out of poverty"
      ],
      testimonials: [
        { name: "Zainab Ahmed", text: "The skills training program helped me start my catering business and become financially independent.", role: "Program Graduate" },
        { name: "Omar Al-Rashid", text: "During unemployment, the foundation's support kept my family fed and housed until I found work.", role: "Beneficiary" },
        { name: "Social Worker Maria", text: "Seeing families transition from crisis to stability through our programs is incredibly rewarding.", role: "Staff Member" }
      ]
    },
    "refugees-homeless": {
      icon: Home,
      title: "Refugees & Homeless Support",
      description: "Comprehensive support for displaced individuals and families including emergency shelter, employment assistance, and integration programs.",
      features: [
        "Emergency shelter and temporary housing",
        "Job placement and employment support",
        "Legal aid and documentation assistance",
        "Language learning and cultural orientation",
        "Integration support and mentorship",
        "Family reunification services"
      ],
      schedule: "24/7 emergency services, daily support 8 AM - 8 PM",
      instructor: "Social workers, legal advocates, and volunteers",
      age: "All ages, individuals and families",
      fee: "Free services and support",
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
      benefits: [
        "Find safe, dignified housing solutions",
        "Access employment and income opportunities",
        "Receive legal support and advocacy",
        "Learn language and cultural integration skills",
        "Connect with supportive community networks",
        "Rebuild stability and independence"
      ],
      testimonials: [
        { name: "Refugee Family", text: "The foundation helped us rebuild our lives with dignity and hope for our children's future.", role: "Beneficiary Family" },
        { name: "Legal Advocate Aisha", text: "Helping families navigate complex legal systems and reunite with loved ones is deeply meaningful work.", role: "Staff" },
        { name: "Community Volunteer", text: "Welcoming refugees and homeless individuals has enriched our community immeasurably.", role: "Volunteer" }
      ]
    },
    "women-children": {
      icon: Users,
      title: "Women & Children Welfare",
      description: "Specialized programs focusing on women's empowerment, children's protection, and comprehensive support for mothers and families.",
      features: [
        "Women's empowerment and leadership programs",
        "Childcare centers and after-school programs",
        "Child protection and safety services",
        "Parenting education and family support",
        "Women's health and wellness programs",
        "Rights awareness and advocacy"
      ],
      schedule: "Monday-Saturday 8 AM - 6 PM, emergency services 24/7",
      instructor: "Licensed social workers and certified educators",
      age: "Women and children of all ages",
      fee: "Free for those in need, sliding scale available",
      color: "from-pink-400/20 to-pink-400/40",
      iconColor: "text-pink-500",
      benefits: [
        "Access safe, supportive environment for growth",
        "Develop leadership and professional skills",
        "Receive comprehensive childcare services",
        "Learn parenting and family management skills",
        "Access health and wellness resources",
        "Connect with empowering community network"
      ],
      testimonials: [
        { name: "Maryam Hassan", text: "The leadership program gave me confidence to start my own nonprofit and advocate for other women.", role: "Program Graduate" },
        { name: "Single Mother Fatima", text: "The childcare center allowed me to complete my education while knowing my children were safe and learning.", role: "Beneficiary" },
        { name: "Child Advocate Sarah", text: "Protecting children and empowering mothers creates stronger, healthier communities for everyone.", role: "Staff" }
      ]
    },
    "environmental": {
      icon: Trees,
      title: "Environmental Protection",
      description: "Community-driven environmental initiatives including tree plantation, waste management, and sustainability programs that care for Allah's creation.",
      features: [
        "Tree plantation and urban greening campaigns",
        "Waste reduction and recycling programs",
        "Environmental education and awareness",
        "Community garden projects",
        "Clean energy and sustainability initiatives",
        "Water conservation programs"
      ],
      schedule: "Seasonal campaigns, monthly community events",
      instructor: "Environmental scientists and community volunteers",
      age: "All ages, family-friendly activities",
      fee: "Free participation, donations welcome",
      color: "from-emerald-400/20 to-emerald-400/40",
      iconColor: "text-emerald-500",
      benefits: [
        "Contribute to environmental stewardship as Islamic duty",
        "Learn sustainable living practices",
        "Engage in community beautification projects",
        "Develop environmental awareness and responsibility",
        "Participate in family-friendly outdoor activities",
        "Create lasting positive impact on local environment"
      ],
      testimonials: [
        { name: "Environmental Coordinator Ahmad", text: "Our tree planting campaigns have transformed neighborhoods while teaching Islamic environmental ethics.", role: "Program Coordinator" },
        { name: "Community Member Layla", text: "The community garden brings families together while teaching children to care for Allah's creation.", role: "Volunteer" },
        { name: "Youth Leader Omar", text: "Leading environmental projects gives young people purpose and connection to their community.", role: "Youth Volunteer" }
      ]
    },
    "religious-programs": {
      icon: BookOpen,
      title: "Religious & Social Programs",
      description: "Comprehensive Islamic education and community programs including Ramadan relief, mosque services, and spiritual development activities.",
      features: [
        "Ramadan and Eid relief programs",
        "Islamic schools and Quran courses",
        "Mosque construction and maintenance",
        "Dawah and outreach programs",
        "Religious counseling and guidance",
        "Community prayer and study circles"
      ],
      schedule: "Daily programs, special events during Islamic calendar",
      instructor: "Islamic scholars, imams, and community teachers",
      age: "All ages, family programs available",
      fee: "Free for community members",
      color: "from-primary-start/20 to-primary-start/40",
      iconColor: "text-primary-start",
      benefits: [
        "Deepen understanding of Islamic principles",
        "Connect with supportive faith community",
        "Access religious guidance and counseling",
        "Participate in charitable giving programs",
        "Learn Islamic history and culture",
        "Strengthen spiritual practice and devotion"
      ],
      testimonials: [
        { name: "Imam Abdullah", text: "Our Islamic education programs help community members grow spiritually while staying connected to their cultural roots.", role: "Religious Leader" },
        { name: "Family Program Coordinator", text: "Ramadan programs bring families together and teach children the importance of charity and compassion.", role: "Staff" },
        { name: "Community Member Hassan", text: "The mosque maintenance program allows us to care for our spiritual home as a community effort.", role: "Volunteer" }
      ]
    },
    "emergency-relief": {
      icon: Shield,
      title: "Emergency Relief",
      description: "Rapid response and comprehensive support during natural disasters, crises, and emergency situations affecting our community and beyond.",
      features: [
        "Natural disaster response and recovery",
        "Emergency food and shelter distribution",
        "Medical emergency assistance",
        "Crisis counseling and mental health support",
        "Disaster preparedness training",
        "Community resilience building"
      ],
      schedule: "24/7 emergency response, regular preparedness training",
      instructor: "Emergency response professionals and trained volunteers",
      age: "Community-wide support, all ages",
      fee: "Free emergency assistance and training",
      color: "from-orange-400/20 to-orange-400/40",
      iconColor: "text-orange-500",
      benefits: [
        "Receive immediate aid during emergencies",
        "Access professional crisis support services",
        "Learn disaster preparedness and safety skills",
        "Connect with community support networks",
        "Participate in building community resilience",
        "Help others during times of crisis"
      ],
      testimonials: [
        { name: "Emergency Coordinator Ahmad", text: "Our swift response during the recent flooding helped dozens of families recover and rebuild their lives.", role: "Emergency Manager" },
        { name: "Disaster Survivor Layla", text: "The foundation's emergency shelter and support helped us through the most difficult time in our lives.", role: "Beneficiary" },
        { name: "Volunteer Firefighter Omar", text: "Training community members in emergency preparedness creates a stronger, more resilient neighborhood.", role: "Trainer" }
      ]
    },
    "youth-development": {
      icon: Target,
      title: "Youth Development",
      description: "Comprehensive programs designed to develop leadership skills, provide mentorship, and create positive opportunities for young people in our community.",
      features: [
        "Leadership training and development programs",
        "Sports leagues and recreational activities",
        "Cultural arts and creativity workshops",
        "Career guidance and job placement",
        "Mentorship and counseling services",
        "Community service project coordination"
      ],
      schedule: "After-school programs Monday-Friday, weekend activities",
      instructor: "Youth development specialists and community mentors",
      age: "Ages 13-25, programs for different age groups",
      fee: "Free participation, materials provided",
      color: "from-purple-400/20 to-purple-400/40",
      iconColor: "text-purple-500",
      benefits: [
        "Develop leadership and communication skills",
        "Engage in positive recreational activities",
        "Receive career guidance and job training",
        "Connect with positive role models and mentors",
        "Participate in meaningful community service",
        "Build confidence and life skills"
      ],
      testimonials: [
        { name: "Youth Leader Aisha", text: "The leadership program gave me skills to organize community events and mentor younger students.", role: "Program Graduate" },
        { name: "Sports Coach Mohamed", text: "Sports programs teach teamwork, discipline, and provide positive alternatives to risky behaviors.", role: "Instructor" },
        { name: "Career Counselor Sarah", text: "Helping young people discover their talents and career paths is incredibly fulfilling work.", role: "Staff" }
      ]
    },
    "professional-development": {
      icon: Briefcase,
      title: "Professional Development",
      description: "Comprehensive training programs in vocational skills, business development, and technology to prepare community members for career success.",
      features: [
        "Vocational training in high-demand fields",
        "Business development and entrepreneurship",
        "IT and digital skills certification",
        "Professional resume and interview training",
        "Job placement and career services",
        "Small business loans and support"
      ],
      schedule: "Evening and weekend classes, flexible scheduling",
      instructor: "Industry professionals and certified trainers",
      age: "Adults and young adults 16+",
      fee: "Sliding scale fees, scholarships available",
      color: "from-indigo-400/20 to-indigo-400/40",
      iconColor: "text-indigo-500",
      benefits: [
        "Gain marketable skills for better employment",
        "Receive support for starting your own business",
        "Access modern technology training",
        "Develop professional networking connections",
        "Get help with job search and placement",
        "Build financial independence and stability"
      ],
      testimonials: [
        { name: "IT Graduate Fatima", text: "The web development course helped me transition from retail to a tech career with triple the salary.", role: "Program Graduate" },
        { name: "Small Business Owner Ahmed", text: "The entrepreneurship program provided both training and a microloan to start my restaurant.", role: "Business Owner" },
        { name: "Job Counselor Maria", text: "Seeing students land their dream jobs after completing our training programs never gets old.", role: "Staff" }
      ]
    },
    "research-data": {
      icon: BarChart3,
      title: "Research & Data Analysis",
      description: "Community-focused research initiatives that assess needs, measure impact, and develop data-driven solutions for social challenges.",
      features: [
        "Community needs assessment studies",
        "Program impact evaluation and reporting",
        "Scientific and technological research projects",
        "Data collection and analysis training",
        "Research publication and dissemination",
        "Policy advocacy based on research findings"
      ],
      schedule: "Ongoing projects, quarterly community reports",
      instructor: "Research scientists, data analysts, and academics",
      age: "Research opportunities for high school and college students",
      fee: "Free participation, research stipends available",
      color: "from-cyan-400/20 to-cyan-400/40",
      iconColor: "text-cyan-500",
      benefits: [
        "Contribute to evidence-based community improvement",
        "Gain valuable research and analytical skills",
        "Participate in meaningful scientific studies",
        "Learn data collection and analysis techniques",
        "Support policy changes through research",
        "Build academic and professional credentials"
      ],
      testimonials: [
        { name: "Research Director Dr. Hassan", text: "Our community needs assessments have guided the foundation's programs and attracted significant funding.", role: "Research Leader" },
        { name: "Student Researcher Amina", text: "Participating in research projects prepared me for graduate school and a career in public policy.", role: "Student" },
        { name: "Data Analyst Omar", text: "Using data to show the real impact of our programs helps secure resources for expanding services.", role: "Staff" }
      ]
    },
    "social-business": {
      icon: Building2,
      title: "Social Entrepreneurship & Business Support",
      description: "Supporting local businesses and developing sustainable social enterprises that create jobs while addressing community needs.",
      features: [
        "Local business development and support",
        "Social enterprise incubation programs",
        "Marketing and product development assistance",
        "Cooperative business model training",
        "Fair trade and ethical business practices",
        "Community investment and crowdfunding"
      ],
      schedule: "Business hours Monday-Friday, weekend workshops",
      instructor: "Business development specialists and successful entrepreneurs",
      age: "Adult entrepreneurs and business owners",
      fee: "Consultation fees, low-interest loans available",
      color: "from-yellow-400/20 to-yellow-400/40",
      iconColor: "text-yellow-600",
      benefits: [
        "Access business development resources and mentoring",
        "Learn sustainable and ethical business practices",
        "Connect with local market opportunities",
        "Receive marketing and branding support",
        "Access to microfinance and investment opportunities",
        "Build businesses that serve community needs"
      ],
      testimonials: [
        { name: "Social Enterprise Owner Zainab", text: "The incubation program helped me launch a catering business that employs local women and serves healthy meals.", role: "Entrepreneur" },
        { name: "Business Mentor Ahmad", text: "Supporting local businesses creates jobs and keeps money circulating within our community.", role: "Advisor" },
        { name: "Cooperative Leader Fatima", text: "Learning cooperative business models allowed our group to pool resources and share profits fairly.", role: "Business Owner" }
      ]
    },
    "volunteering": {
      icon: Users,
      title: "Volunteer Opportunities",
      description: "Join our dedicated team of volunteers and make a meaningful impact in your community through various service opportunities.",
      features: [
        "Education support and tutoring programs",
        "Community outreach and event assistance",
        "Healthcare support and awareness campaigns",
        "Administrative and organizational support",
        "Youth mentorship and guidance programs",
        "Emergency response and disaster relief"
      ],
      schedule: "Flexible scheduling, weekend programs available",
      instructor: "Community coordinators and volunteer managers",
      age: "All ages welcome, youth programs 13+",
      fee: "Free participation, training provided",
      color: "from-primary-start/20 to-primary-start/40",
      iconColor: "text-primary-start",
      benefits: [
        "Make direct positive impact in your community",
        "Build valuable skills and experience",
        "Connect with like-minded community members",
        "Receive volunteer recognition and certificates",
        "Participate in meaningful service projects",
        "Access flexible scheduling to fit your lifestyle"
      ],
      testimonials: [
        { name: "Volunteer Coordinator Sarah", text: "Our volunteers are the heart of everything we do. They bring passion and dedication to serving our community.", role: "Staff" },
        { name: "Community Volunteer Ahmad", text: "Volunteering here has been incredibly rewarding. I've made lasting friendships while helping those in need.", role: "Volunteer" },
        { name: "Youth Volunteer Amina", text: "The mentorship program taught me leadership skills while helping younger students succeed in school.", role: "Youth Volunteer" }
      ]
    },
    "transparency": {
      icon: BarChart3,
      title: "Financial Transparency",
      description: "Complete transparency in our financial operations with detailed reporting on fund allocation, program expenses, and community impact.",
      features: [
        "Detailed annual financial reports",
        "Monthly program expense breakdowns",
        "Independent third-party audits",
        "Public access to all financial documents",
        "Impact measurement and reporting",
        "Donor fund tracking systems"
      ],
      schedule: "Reports published quarterly, annual audit available",
      instructor: "Certified public accountants and financial analysts",
      age: "Community members and donors",
      fee: "Free public access to all reports",
      color: "from-blue-400/20 to-blue-400/40",
      iconColor: "text-blue-500",
      benefits: [
        "Complete visibility into fund utilization",
        "Confidence in responsible money management",
        "Understanding of program effectiveness",
        "Access to impact measurement data",
        "Participation in financial oversight",
        "Trust through verified independent audits"
      ],
      testimonials: [
        { name: "Finance Director Dr. Hassan", text: "Our commitment to transparency builds trust and ensures every dollar serves our community effectively.", role: "Finance Staff" },
        { name: "Donor Community Member", text: "Seeing exactly how my donations are used gives me confidence to continue supporting the foundation.", role: "Donor" },
        { name: "Independent Auditor", text: "The foundation's financial practices exceed industry standards for transparency and accountability.", role: "External Auditor" }
      ]
    },
    "new-muslim-support": {
      icon: Heart,
      title: "New Muslim Support",
      description: "Comprehensive support system for new Muslims including education, community integration, and ongoing guidance on their Islamic journey.",
      features: [
        "Islamic education and basic principles training",
        "One-on-one mentorship programs",
        "Community integration activities",
        "Family support and counseling services",
        "Practical Islamic living guidance",
        "Support group meetings and discussions"
      ],
      schedule: "Weekly classes, monthly community events, 24/7 support available",
      instructor: "Islamic scholars, experienced mentors, and community leaders",
      age: "New Muslims of all ages, family programs available",
      fee: "Free comprehensive support services",
      color: "from-islamic-green/20 to-islamic-green/40",
      iconColor: "text-islamic-green",
      benefits: [
        "Receive comprehensive Islamic education",
        "Connect with supportive community network",
        "Access experienced mentorship and guidance",
        "Learn practical Islamic living skills",
        "Participate in welcoming community events",
        "Get ongoing support for your Islamic journey"
      ],
      testimonials: [
        { name: "New Muslim Support Coordinator", text: "Welcoming new Muslims and supporting their journey is one of our most important and rewarding programs.", role: "Program Director" },
        { name: "Recent Convert Maryam", text: "The support program helped me learn Islam step by step while connecting with an amazing community.", role: "Program Participant" },
        { name: "Mentor Brother Ahmad", text: "Being a mentor to new Muslims allows me to share the beauty of Islam and build lasting friendships.", role: "Community Mentor" }
      ]
    },
    "social-safety-net": {
      icon: Shield,
      title: "Social Safety Net",
      description: "Comprehensive support systems including hostels, elderly care, community welfare centers, and crisis intervention services.",
      features: [
        "Orphan hostels with comprehensive care",
        "Elderly care centers and assisted living",
        "Community welfare service coordination",
        "Crisis support and emergency assistance",
        "Family support and counseling programs",
        "Community resource centers"
      ],
      schedule: "24/7 residential care, daily services 8 AM - 8 PM",
      instructor: "Licensed social workers, care professionals, and support staff",
      age: "All ages from children to elderly",
      fee: "Services based on need, sliding scale available",
      color: "from-purple-400/20 to-purple-400/40",
      iconColor: "text-purple-500",
      benefits: [
        "Access safe, dignified housing and care",
        "Receive comprehensive support services",
        "Connect with professional care staff",
        "Access emergency assistance when needed",
        "Participate in community support networks",
        "Receive individualized care planning"
      ],
      testimonials: [
        { name: "Care Center Director", text: "Our safety net programs ensure that no one in our community faces crisis alone.", role: "Program Director" },
        { name: "Elderly Resident Ahmad", text: "The care center feels like home, with staff who genuinely care about our wellbeing and dignity.", role: "Resident" },
        { name: "Social Worker Fatima", text: "Providing comprehensive support to vulnerable community members is deeply fulfilling work.", role: "Staff Member" }
      ]
    },
    "technology-platforms": {
      icon: Monitor,
      title: "Technology & Digital Platforms",
      description: "Innovative digital solutions including online learning, virtual community groups, and 24/7 support services to connect our global community.",
      features: [
        "Online courses and digital learning platforms",
        "Virtual community groups and discussions",
        "Digital resource libraries and databases",
        "24/7 online support and counseling services",
        "Mobile applications for service access",
        "Digital literacy training programs"
      ],
      schedule: "24/7 online access, live sessions scheduled regularly",
      instructor: "Technology specialists, digital educators, and online moderators",
      age: "All ages, specialized programs for seniors",
      fee: "Free access, premium features available",
      color: "from-cyan-400/20 to-cyan-400/40",
      iconColor: "text-cyan-500",
      benefits: [
        "Access services from anywhere in the world",
        "Connect with global Muslim community",
        "Learn at your own pace with flexible scheduling",
        "Access comprehensive digital resource library",
        "Receive 24/7 support and assistance",
        "Participate in virtual community events"
      ],
      testimonials: [
        { name: "Technology Director", text: "Our digital platforms break down geographical barriers and connect Muslims worldwide.", role: "Tech Lead" },
        { name: "Online Student Amina", text: "The digital courses allowed me to continue my Islamic education while caring for my family.", role: "Student" },
        { name: "Virtual Community Member", text: "The online discussion groups provide spiritual support and friendship across continents.", role: "Community Member" }
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation("/")}>Return Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Dynamic backgrounds for each service type
  const backgroundClass = {
    "education": "bg-gradient-to-br from-emerald-50 via-green-50/50 to-teal-50 dark:from-emerald-950 dark:via-green-950/50 dark:to-teal-950",
    "health": "bg-gradient-to-br from-red-50 via-pink-50/50 to-rose-50 dark:from-red-950 dark:via-pink-950/50 dark:to-rose-950",
    "poverty-alleviation": "bg-gradient-to-br from-green-50 via-emerald-50/50 to-cyan-50 dark:from-green-950 dark:via-emerald-950/50 dark:to-cyan-950",
    "refugees-homeless": "bg-gradient-to-br from-blue-50 via-sky-50/50 to-indigo-50 dark:from-blue-950 dark:via-sky-950/50 dark:to-indigo-950",
    "women-children": "bg-gradient-to-br from-pink-50 via-rose-50/50 to-purple-50 dark:from-pink-950 dark:via-rose-950/50 dark:to-purple-950",
    "environmental": "bg-gradient-to-br from-emerald-50 via-green-50/50 to-lime-50 dark:from-emerald-950 dark:via-green-950/50 dark:to-lime-950",
    "religious-programs": "bg-gradient-to-br from-orange-50 via-amber-50/50 to-yellow-50 dark:from-orange-950 dark:via-amber-950/50 dark:to-yellow-950",
    "emergency-relief": "bg-gradient-to-br from-orange-50 via-red-50/50 to-pink-50 dark:from-orange-950 dark:via-red-950/50 dark:to-pink-950",
    "youth-development": "bg-gradient-to-br from-purple-50 via-violet-50/50 to-indigo-50 dark:from-purple-950 dark:via-violet-950/50 dark:to-indigo-950",
    "professional-development": "bg-gradient-to-br from-indigo-50 via-blue-50/50 to-cyan-50 dark:from-indigo-950 dark:via-blue-950/50 dark:to-cyan-950",
    "research-data": "bg-gradient-to-br from-cyan-50 via-blue-50/50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950/50 dark:to-indigo-950",
    "social-business": "bg-gradient-to-br from-yellow-50 via-amber-50/50 to-orange-50 dark:from-yellow-950 dark:via-amber-950/50 dark:to-orange-950",
    "volunteering": "bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950/50 dark:to-cyan-950",
    "new-muslim-support": "bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 dark:from-blue-950 dark:via-indigo-950/50 dark:to-purple-950",
    "social-safety-net": "bg-gradient-to-br from-violet-50 via-purple-50/50 to-pink-50 dark:from-violet-950 dark:via-purple-950/50 dark:to-pink-950",
    "technology-platforms": "bg-gradient-to-br from-slate-50 via-gray-50/50 to-zinc-50 dark:from-slate-950 dark:via-gray-950/50 dark:to-zinc-950",
    "transparency": "bg-gradient-to-br from-blue-50 via-cyan-50/50 to-teal-50 dark:from-blue-950 dark:via-cyan-950/50 dark:to-teal-950"
  };

  const currentBg = backgroundClass[serviceId as keyof typeof backgroundClass] || "bg-gradient-to-br from-orange-50 via-purple-50/30 to-pink-50 dark:from-orange-950 dark:via-purple-950/30 dark:to-pink-950";

  return (
    <motion.div 
      className={`min-h-screen ${currentBg} transition-all duration-1000`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      
      {/* Animated Hero Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white/70 via-white/40 to-transparent dark:from-gray-900/70 dark:via-gray-900/40 dark:to-transparent relative overflow-hidden backdrop-blur-sm">
        {/* Enhanced Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-islamic-gold rotate-45 rounded-lg animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-primary-start rotate-12 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-islamic-green rotate-45 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border-2 border-primary-end rounded-full animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="mb-8 hover:bg-primary-start/10 group transition-all duration-300"
              data-testid="button-back-to-home"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </motion.div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl mb-6 shadow-lg animate-pulse`}>
                <service.icon className={`h-10 w-10 ${service.iconColor}`} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary-start to-primary-end dark:from-white dark:via-primary-start dark:to-primary-end bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
                {service.title}
              </h1>
              <div className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-300 mb-8">
                <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                  <Sparkles className="mr-2 h-5 w-5 text-primary-start" />
                  <span className="font-medium">Transform Your Spiritual Journey</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="modern-card group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-0 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                <div className="modern-card-content p-8 text-center">
                  <Quote className="h-8 w-8 text-primary-start mx-auto mb-4 animate-bounce-slow" />
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    "{service.description}"
                  </p>
                  <div className="mt-6 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-start to-primary-end rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-start to-primary-end rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-start to-primary-end rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Target className="h-12 w-12 text-primary-start mx-auto mb-4 animate-bounce-slow" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-primary-start dark:from-white dark:to-primary-start bg-clip-text text-transparent mb-6">
              Transform Your Life Through This Service
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-start to-primary-end mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits?.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card h-full group hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 ring-1 ring-black/5 dark:ring-white/10">
                  <div className="modern-card-content p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-start/20 to-primary-end/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-primary-start" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="modern-card group hover:scale-105 transition-all duration-500">
                  <div className="modern-card-content p-8">
                    <div className="flex items-center mb-6">
                      <Sparkles className="h-8 w-8 text-primary-start mr-3 animate-bounce-slow" />
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-start dark:from-white dark:to-primary-start bg-clip-text text-transparent">
                        What's Included
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start bg-gradient-to-r from-primary-start/5 to-primary-end/5 rounded-lg p-3 hover:from-primary-start/10 hover:to-primary-end/10 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-primary-start to-primary-end rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse"></div>
                          <p className="text-gray-700 dark:text-gray-200 font-medium">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="modern-card group hover:scale-105 transition-all duration-500">
                  <div className="modern-card-content p-8">
                    <div className="flex items-center mb-6">
                      <Award className="h-8 w-8 text-primary-end mr-3 animate-bounce-slow" />
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-end dark:from-white dark:to-primary-end bg-clip-text text-transparent">
                        Registration Process
                      </h2>
                    </div>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-start bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-lg">1</div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">Contact Us</h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">Call or visit the center to express your interest and learn more about our programs</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-lg">2</div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">Assessment & Placement</h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">Brief discussion to determine your current level and find the most suitable program</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start bg-gradient-to-r from-orange-50/50 to-purple-50/50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-lg">3</div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">Begin Your Journey</h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">Start attending classes immediately and begin your transformative learning experience</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="modern-card group">
                  <div className="modern-card-content p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Schedule</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.schedule}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Age Group</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.age}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <GraduationCap className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Instructor</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Heart className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">Fee</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.fee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="modern-card group">
                  <div className="modern-card-content p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="text-primary-start h-5 w-5 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">(217) 555-0123</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-primary-start h-5 w-5 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">info@assaadah.org</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-primary-start h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">123 Islamic Center Drive, Springfield, IL 62701</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Button
                  className="modern-button w-full hover:glow-primary text-lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      setLocation("/");
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                >
                  Register Now
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {service.testimonials && (
        <section className="py-16 bg-gradient-to-br from-primary-start/5 via-white to-primary-end/5 dark:from-primary-start/10 dark:via-gray-800 dark:to-primary-end/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Heart className="h-12 w-12 text-islamic-gold mx-auto mb-4 animate-bounce-slow" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-islamic-gold dark:from-white dark:to-islamic-gold bg-clip-text text-transparent mb-4">
                Success Stories from Our Community
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-islamic-gold to-islamic-green mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.testimonials.map((testimonial: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="modern-card group hover:scale-105 transition-all duration-500 h-full">
                    <div className="modern-card-content p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-islamic-gold fill-current" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-200 italic mb-4 text-sm leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                        <p className="text-primary-start text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call-to-Action Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-start to-primary-end relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of community members who have transformed their lives through our {service.title.toLowerCase()}. Your spiritual growth begins with a single step!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-start hover:bg-gray-100 group relative overflow-hidden font-bold"
                data-testid="button-register-service-cta"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    setLocation("/");
                    setTimeout(() => {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-start/0 via-primary-start/20 to-primary-start/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-start group transition-all duration-300"
                data-testid="button-explore-services-cta"
                onClick={() => setLocation("/")}
              >
                Explore More Services
                <ArrowLeft className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-bounce-slow"></div>
      </section>

      <Footer />
    </motion.div>
  );
}