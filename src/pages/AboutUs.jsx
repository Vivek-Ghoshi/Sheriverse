import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <motion.h1
        className="text-5xl font-bold text-blue-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Sheriverse
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-3xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Sheriverse is a cutting-edge Learning Management System (LMS) designed to
        empower students and instructors with seamless course creation,
        interactive assignments, and real-time learning tools. Our platform
        leverages modern technologies to provide an intuitive and effective
        learning experience.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/** Feature Cards **/}
        {["Interactive Courses", "Real-time Collaboration", "AI-powered Assistance"].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-xl font-semibold text-blue-300">{feature}</h3>
            <p className="text-gray-400 mt-2">Enhancing your learning experience with technology.</p>
          </motion.div>
        ))}
      </motion.div>

      {/** Developer Section **/}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400">Developed by</h2>
        <p className="text-lg text-gray-300">Vivek Ghoshi - Passionate MERN Stack Developer</p>
        <a
          href="https://www.linkedin.com/in/your-linkedin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mt-2 inline-block hover:underline"
        >
          Connect with me on LinkedIn
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
