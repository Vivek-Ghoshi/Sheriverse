import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

const InstructorDashboard = () => {
  const {user} = useSelector(state => state.auth);
  
  return (
    <>
    <div className="flex max-w-screen overflow-x-hidden">
      <Sidebar role="instructor" />
    <div className="max-h-screen w-[79.5vw] h-[45vw] bg-gray-900 text-white p-8 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-yellow-400 capitalize underline">{user.instructor.name}'<span className="lowercase">s</span></span>  Dashboard
      </motion.h1>
      
      <motion.div
        className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-6 border-b border-gray-700 pb-4">
          <motion.img
            src="https://via.placeholder.com/100"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div>
            <h2 className="text-2xl font-semibold capitalize text-blue-400">{user.instructor.name}</h2>
            <p className="text-gray-400">Email: {user.instructor.email}</p>
            <p className="text-gray-300 capitalize">{user.instructor.specialization}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-6 text-center">
          <motion.div
            className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">{user.instructor.coursesTaught.length}</h3>
            <p className="text-gray-300">Courses Taught</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold"> {user.instructor.experience}</h3>
            <p className="text-gray-300">Students Taught</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">instructor.assignments</h3>
            <p className="text-gray-300">Assignments Given</p>
          </motion.div>
        </div>
        
        <p className="mt-6 text-center text-gray-400">Very talented instructor</p>
      </motion.div>
    </div>
    </div>
    </>
  );
};

export default InstructorDashboard;
