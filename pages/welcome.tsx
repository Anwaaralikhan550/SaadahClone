import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Welcome() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auto-redirect to home after 3.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => router.push("/"), 500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-start/10 via-blue-secondary/5 to-blue-tertiary/10 dark:from-primary-start/20 dark:via-blue-secondary/10 dark:to-blue-tertiary/20 flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-start/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-secondary/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-blue-tertiary/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-start via-blue-secondary to-blue-tertiary bg-clip-text text-transparent">
              AS-SAADAH
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide">
            ISLAMIC ORGANIZATION
          </p>
        </motion.div>

        {/* Arabic Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-200 font-arabic leading-relaxed">
            بسم الله الرحمن الرحيم
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 font-light">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </p>
        </motion.div>

        {/* 3-Color Spinner Loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-16 h-16">
            {/* First circle - Primary Blue */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-start"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Second circle - Secondary Blue */}
            <motion.div
              className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-secondary"
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Third circle - Tertiary Blue */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-transparent border-t-blue-tertiary"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium tracking-wider">
            LOADING EXPERIENCE
          </p>
          
          {/* Animated dots */}
          <div className="flex justify-center space-x-1 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary-start rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress indication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <div className="w-full max-w-xs mx-auto bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-primary-start to-blue-secondary h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}