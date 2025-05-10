import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { Edit, Trash } from "lucide-react";
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
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Instructors
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && <p>Loading...</p> }
        {instructors.map((instructor) => (
          <motion.div 
            key={instructor._id} 
            className="bg-gray-800 p-5 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold">{instructor.name}</h2>
            <p className="text-gray-400 text-sm">{instructor.email}</p>
            <p className="mt-2 text-gray-300">Specialization: <span className="font-medium">{instructor.specialization}</span></p>
            <div className="flex gap-3 mt-4 items-center justify-center">
              <div onClick={()=>removeHandler(instructor._id)} className="bg-red-500 hover:bg-red-600 rounded-lg flex items-center px-3 py-1 text-sm font-semibold">
                <Trash className="w-6 h-3 font-semibold" /> Remove
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Instructors
