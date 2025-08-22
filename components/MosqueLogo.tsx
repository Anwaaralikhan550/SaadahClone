import { motion } from "framer-motion";

interface MosqueLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function MosqueLogo({ 
  className = "", 
  size = 40, 
  animated = true 
}: MosqueLogoProps) {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const Component = animated ? motion.svg : 'svg';
  const PathComponent = animated ? motion.path : 'path';
  const CircleComponent = animated ? motion.circle : 'circle';

  return (
    <Component
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      variants={animated ? containerVariants : undefined}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
    >
      {/* Main Dome */}
      <PathComponent
        d="M20 60 Q20 40 50 40 Q80 40 80 60 L80 80 L20 80 Z"
        fill="url(#mosqueGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={animated ? pathVariants : undefined}
      />
      
      {/* Central Minaret */}
      <PathComponent
        d="M45 40 L45 15 L55 15 L55 40"
        fill="url(#minaretGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={animated ? pathVariants : undefined}
      />
      
      {/* Left Minaret */}
      <PathComponent
        d="M25 55 L25 25 L35 25 L35 55"
        fill="url(#minaretGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={animated ? pathVariants : undefined}
      />
      
      {/* Right Minaret */}
      <PathComponent
        d="M65 55 L65 25 L75 25 L75 55"
        fill="url(#minaretGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={animated ? pathVariants : undefined}
      />
      
      {/* Crescent and Star on Main Minaret */}
      <CircleComponent
        cx="50"
        cy="12"
        r="2"
        fill="url(#starGradient)"
        variants={animated ? pathVariants : undefined}
      />
      <PathComponent
        d="M48 8 Q50 6 52 8 Q50 10 48 8"
        fill="url(#crescentGradient)"
        variants={animated ? pathVariants : undefined}
      />
      
      {/* Entrance Arch */}
      <PathComponent
        d="M40 80 L40 65 Q40 60 50 60 Q60 60 60 65 L60 80"
        fill="rgba(0,0,0,0.3)"
        variants={animated ? pathVariants : undefined}
      />
      
      {/* Base */}
      <PathComponent
        d="M15 80 L85 80 L85 85 L15 85 Z"
        fill="url(#baseGradient)"
        stroke="currentColor"
        strokeWidth="1"
        variants={animated ? pathVariants : undefined}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="mosqueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
        
        <linearGradient id="minaretGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6B800" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        
        <linearGradient id="crescentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        
        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>
    </Component>
  );
}