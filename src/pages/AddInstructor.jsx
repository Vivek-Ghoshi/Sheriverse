import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addInstructor, allInstructors } from "../redux/features/AdminSlice";
import { useNavigate } from "react-router-dom";

const AddInstructor = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,reset} = useForm();
  const dispatch = useDispatch();
  const{instructors} = useSelector(state =>state.admin);
  
  const instructorHandler = async(data)=>{
   const result = await dispatch(addInstructor(data));
   if(addInstructor.fulfilled.match(result)){
     navigate('/admin/all-instructors');
   }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10 flex items-center justify-center">
  <form onSubmit={handleSubmit(instructorHandler)} className="w-full max-w-6xl bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
    <div className="flex flex-col md:flex-row w-full">
      
      {/* Left Section */}
      <div className="md:w-1/2 w-full p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-700">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
          Add New Instructor
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Provide details to onboard a new instructor to your LMS platform.
        </p>

        <div className="space-y-4">
          {/* Instructor Name */}
          <div>
            <label className="block text-lg mb-1">Instructor Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter full name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter email address"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter password"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-6 md:p-10">
        <div className="space-y-4">
          {/* Specialization */}
          <div>
            <label className="block text-lg mb-1">Specialization</label>
            <input
              type="text"
              {...register("specialization", { required: "Specialization is required" })}
              placeholder="e.g. Web Development"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-lg mb-1">Experience</label>
            <input
              type="text"
              {...register("experience", { required: "Experience is required" })}
              placeholder="e.g. 5 years or 200 students"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-purple-500/40"
            >
              Add Instructor
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

  );
};

export default AddInstructor;
