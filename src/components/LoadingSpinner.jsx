import React from "react";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0F0F1A]">
      <motion.div
        className="flex flex-col items-center gap-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        >
          <BookOpen className="w-14 h-14 text-blue-400 drop-shadow-lg" />
        </motion.div>
        <p className="text-md text-gray-300 font-medium">Loading Sheriverse content...</p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
