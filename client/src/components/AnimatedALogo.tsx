import { motion } from "framer-motion";

interface AnimatedALogoProps {
  className?: string;
  size?: number;
}

export default function AnimatedALogo({ 
  className = "", 
  size = 40 
}: AnimatedALogoProps) {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 1
      }
    }
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{ width: size, height: size }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="relative z-10"
      >
        {/* Main "A" Structure */}
        <motion.path
          d="M30 85 L45 25 L55 25 L70 85 M38 65 L62 65"
          fill="none"
          stroke="url(#letterGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
        
        {/* Islamic Crescent Accent */}
        <motion.path
          d="M45 15 Q50 10 55 15 Q50 20 45 15"
          fill="url(#crescentGradient)"
          variants={pathVariants}
        />
        
        {/* Decorative Star */}
        <motion.circle
          cx="50"
          cy="12"
          r="2"
          fill="url(#starGradient)"
          variants={pathVariants}
        />
        
        {/* Geometric Pattern Base */}
        <motion.path
          d="M25 90 L75 90 M30 87 L70 87"
          stroke="url(#baseGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          
          <linearGradient id="crescentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Shimmer Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={shimmerVariants}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
        }}
      />
    </motion.div>
  );
}