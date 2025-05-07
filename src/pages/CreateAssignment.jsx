import {motion} from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { createAssignment, updateAssignment } from '../redux/features/InstructorSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CreateAssignment = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const {register,handleSubmit ,reset,setValue} = useForm();
    const{ isEdit , oldData } = location.state || {};

    useEffect(()=>{
      if(isEdit && oldData){
        setValue("title",oldData.title);
        setValue("dueDate",oldData.dueDate);
        setValue("description",oldData.description);
      }
    },[isEdit,oldData]);

    const assignmentHandler = (data)=> {
        try {
            const formData = new FormData();
            formData.append("title",data.title);
            formData.append("description",data.description);
            formData.append("dueDate", data.dueDate);
            if(isEdit && oldData){
              dispatch(updateAssignment({id:oldData._id,formData}));
            }else{
              dispatch(createAssignment(formData));
            }
            navigate('/instructor/all-assignment',{state: {isEdit:false}});

        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <div className='w-[99vw] h-[42vw] bg-zinc-900 flex items-center justify-center'>
       {/* Assignment Creation Form */}
       <form onSubmit={handleSubmit(assignmentHandler)} encType='multipart/form-data'>
       <motion.div 
        className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500">Create Assignment</h2>
        <input {...register("title",{required:"title is required"})} type="text" placeholder="Title" className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white outline-none" />
        <input {...register("dueDate",{required:"dueDate is required"})} type="text" placeholder="Due Date (DD/MM/YY)" maxLength={8} minLength={8} className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white outline-none" />
        <textarea {...register("description",{required:"description is required"})} placeholder="Description" className="resize-none w-full p-3 mb-4 rounded-lg bg-gray-700 text-white outline-none h-24"></textarea>
        {/* <div className="flex items-center gap-3 mb-4">
          <label className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg cursor-pointer flex items-center">
            <input type="file" className='w-28'/>
          </label>
        </div> */}
        <button className="w-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-lg hover:shadow-purple-500/50 py-2 rounded-xl">Create</button>
      </motion.div>
      </form>
    </div>
   
  )
}

export default CreateAssignment
