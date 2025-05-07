import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-gray-900 text-white p-6">
    <motion.h1
      className="text-3xl font-bold mb-6 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Your Created Assignments
    </motion.h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => (
        <motion.div
          key={assignment._id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow px-6 py-4">
            <div>
              <div className="text-lg font-semibold text-blue-400 capitalize">
                {assignment.title}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-400">Due Date: {assignment.dueDate}</p>
              <p className="text-gray-300 capitalize text-sm">{assignment.description}</p>
              <div className="flex justify-evenly mt-4 px-15">
                <button
                 onClick={()=> editHandler(assignment)}
                 className="text-white border-blue-400 hover:bg-blue-500 hover:text-white bg-blue-400 font-semibold text-sm px-4 py-1 rounded-xl">
                  Edit
                </button>
                <button
                 onClick={()=> deleteHandler(assignment._id)}
                  className="bg-red-600 px-4 py-1 font-semibold text-sm rounded-xl hover:bg-red-700"
                > Delete
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  )
}

export default Allassignments
