import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addInstructor, allInstructors } from "../redux/features/AdminSlice";
import { useNavigate } from "react-router-dom";

const AddInstructor = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,reset} = useForm();
  const dispatch = useDispatch();
  const{instructors} = useSelector(state =>state.admin);
  
  const instructorHandler = (data)=>{
   const result = dispatch(addInstructor(data));
     navigate('/admin/dashboard');
  }

  return (
    <div className="w-5/5 h-[85vh] mx-auto flex items-center justify-center bg-gray-900 text-white">
    <form onSubmit={handleSubmit(instructorHandler)}>
       <div className="w-screen h-[41vw] max-w-screen bg-gray-800 p-10 shadow-xl border border-gray-700 flex">

        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center p-5 border-r border-gray-700">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 mb-6 text-center">
            Add New Instructor
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Provide details to onboard a new instructor to your LMS platform.
          </p>
          
          <div className="space-y-4">
            {/* Instructor Name */}
            <div>
              <label className="block text-lg mb-2">Instructor Name</label>
              <input
                {...register("name",{required:"Name is required"})}
                type="text"
                placeholder="Enter full name"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                {...register("email",{required:"email is required"})}

                placeholder="Enter email address"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-lg mb-2">Password</label>
              <input
                type="password"
                {...register("password",{required:"password is required"})}

                placeholder="Enter password"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 p-5">
          <div className="space-y-4">
            {/* Specialization */}
            <div>
              <label className="block text-lg mb-2">Specialization</label>
              <input
                type="text"
                {...register("specialization",{required:"spc is required"})}

                placeholder="Enter specialization"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-lg mb-2">Experience</label>
              <input
                type="text"
                {...register("experience",{required:"required is required"})}
                placeholder="Enter no. of students taught..."
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Courses Taught */}
            {/* <div>
              <label className="block text-lg mb-2">Courses Taught</label>
              <input
                type="text"
                {...register("courses")}
                placeholder="Enter courses taught"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div> */}

            {/* Role */}
            {/* <div>
              <label className="block text-lg mb-2">Role</label>
              <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition">
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-green-500/50"
            >
              Add Instructor
            </button>
      
          </div>
        </div>
      </div>
        </form>
    </div>
  );
};

export default AddInstructor;
