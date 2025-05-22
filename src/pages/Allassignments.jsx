import { motion } from "framer-motion";
import { CalendarDays, FileText, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, getAssignments } from "../redux/features/InstructorSlice";
import { useNavigate } from "react-router-dom";


const Allassignments = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector(state => state.instructor);
    const[refresh,setRefresh] = useState(true);
    
    useEffect(()=>{
        if(refresh){
            dispatch(getAssignments());
            setRefresh(false);
        }
    },[dispatch,refresh]);
    
    const editHandler = (assignment)=>{
         navigate('/instructor/create-assignment',{
            state:{isEdit:true, oldData:assignment},
         });
    }
    const deleteHandler = (id)=>{
        try {
            dispatch(deleteAssignment(id));
            setRefresh(true);
        } catch (error) {
        console.log(error);    
        }
    }
    
  return (
     <div className="min-h-screen bg-[#0F0F1A] text-white px-4 py-8 md:px-8">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Created Assignments
      </motion.h1>

      {/* Assignment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {assignments && assignments.length > 0 ? (
          assignments.map((assignment) => (
            <motion.div
              key={assignment._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#1E1E2F] border border-gray-700 rounded-2xl shadow-xl hover:shadow-blue-500/20 transition-shadow p-6">
                {/* Title */}
                <div className="flex items-center gap-2 text-lg font-semibold text-blue-400 capitalize mb-2">
                  <FileText className="w-5 h-5" />
                  {assignment.title}
                </div>

                {/* Due Date */}
                <p className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <CalendarDays className="w-4 h-4" />
                  Due Date: {assignment.dueDate}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 capitalize line-clamp-3">
                  {assignment.description}
                </p>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => editHandler(assignment)}
                    className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-xl transition"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHandler(assignment._id)}
                    className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-xl transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No assignments are created by you</p>
        )}
      </div>
    </div>
  )
}

export default Allassignments
