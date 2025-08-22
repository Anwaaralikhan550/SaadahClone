import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-start/10 via-blue-secondary/5 to-blue-tertiary/10 dark:from-primary-start/20 dark:via-blue-secondary/10 dark:to-blue-tertiary/20 flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-primary-start mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary-start text-white px-6 py-3 rounded-lg hover:bg-blue-secondary transition-colors"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}