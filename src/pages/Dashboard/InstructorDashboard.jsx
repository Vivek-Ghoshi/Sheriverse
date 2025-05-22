import { User, Mail, BookOpenCheck, BadgeCheck, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import DefaultImg from "../../Images/DefaultImg.png";

const InstructorDashboard = () => {
  const {user} = useSelector(state => state.auth);
  
  return (
    <>
     <div className="flex lg:flex-row min-h-screen bg-[#0F0F1A] text-white overflow-hidden">
      <Sidebar role="instructor" />

      <div className="w-full lg:w-[80%] h-full px-4 md:px-8 py-8">
        {/* Dashboard Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-yellow-400 capitalize underline">
            {user.instructor.name}'<span className="lowercase">s</span>
          </span>{" "}
          Dashboard
        </motion.h1>

        {/* Profile Card */}
        <motion.div
          className="bg-[#1E1E2F] rounded-xl shadow-lg p-6 md:p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-700 pb-6">
            <motion.img
              src={DefaultImg}
              alt="Instructor Avatar"
              className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="text-center md:text-left space-y-1">
              <h2 className="text-2xl font-semibold capitalize text-blue-400 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-300" />
                {user.instructor.name}
              </h2>
              <p className="text-gray-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {user.instructor.email}
              </p>
              <p className="text-gray-300 capitalize flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                {user.instructor.specialization || "No specialization"}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-center">
            <motion.div
              className="bg-[#2A2A3D] p-5 rounded-lg shadow-md hover:shadow-blue-400/30 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpenCheck className="mx-auto w-6 h-6 text-green-400 mb-2" />
              <h3 className="text-2xl font-bold">{user.instructor.coursesTaught.length}</h3>
              <p className="text-gray-300 text-sm">Courses Taught</p>
            </motion.div>

            <motion.div
              className="bg-[#2A2A3D] p-5 rounded-lg shadow-md hover:shadow-pink-400/30 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <User className="mx-auto w-6 h-6 text-pink-400 mb-2" />
              <h3 className="text-2xl font-bold">{user.instructor.experience || 0}</h3>
              <p className="text-gray-300 text-sm">Students Taught</p>
            </motion.div>

            <motion.div
              className="bg-[#2A2A3D] p-5 rounded-lg shadow-md hover:shadow-yellow-400/30 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <ClipboardList className="mx-auto w-6 h-6 text-yellow-300 mb-2" />
              <h3 className="text-2xl font-bold">{user.instructor.assignments || 0}</h3>
              <p className="text-gray-300 text-sm">Assignments Given</p>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <p className="mt-6 text-center text-gray-400 italic">"A dedicated and talented instructor guiding future minds!"</p>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default InstructorDashboard;
