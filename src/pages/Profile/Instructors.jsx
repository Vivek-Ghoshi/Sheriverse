import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { Trash2, Users } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { allInstructors, removeInstructor } from '../../redux/features/AdminSlice';


const Instructors = () => {
    const dispatch = useDispatch();
    const {instructors,loading} = useSelector(state => state.admin);
    
    const removeHandler = (id)=>{
      dispatch(removeInstructor(id));
    }
    useEffect(()=>{
        dispatch(allInstructors())
    },[dispatch]);
    
   
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white px-6 md:px-12 py-10">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#E63946] via-[#6D597A] to-[#457B9D]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Users className="inline mr-2 w-8 h-8 text-blue-400" />
        All Instructors
      </motion.h1>

      {/* Grid */}
      {loading ? (
        <p className="text-center text-gray-400 text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor._id}
              className="bg-[#1E1E2F] rounded-xl p-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-3">
                <h2 className="text-xl font-semibold text-white">{instructor.name}</h2>
                <p className="text-sm text-gray-400">{instructor.email}</p>
              </div>
              <p className="text-gray-300">
                <span className="font-medium text-blue-400">Specialization:</span>{" "}
                {instructor.specialization || "Not specified"}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => removeHandler(instructor._id)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-md shadow hover:shadow-red-400/30 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Instructors
