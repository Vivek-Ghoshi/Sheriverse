import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/features/AuthSlice";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,role,loading,error} = useSelector((state)=> state.auth);
  const [acType, setAcType] = useState("admin");
  const {register,handleSubmit} = useForm();
  
  const loginHandler = (data)=>{
    try {
      dispatch(loginUser({role:acType,credentials: data})); 
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    if(user){
        if(role === "admin") navigate('/admin/dashboard')
        else if(role === "student") navigate('/student/dashboard')
        else if (role === "instructor") navigate('/instructor/dashboard')
    }
  },[user, role]);
  
  return (
    <div className="login flex justify-center items-center bg-zinc-300 max-h-screen h-screen">
    <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-10 transform transition-all duration-300 hover:scale-[1.02]">
      <h2 className="text-3xl font-extrabold text-[#1D3557] mb-8 text-center">
        Welcome Back!
      </h2>
      
      {/* Role Selection Buttons */}
      <div className="flex justify-between mb-4">
        {["student", "instructor", "admin"].map((item) => (
          <button
            key={item}
            onClick={() => setAcType(item)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform ${
              acType === item
                ? "bg-[#E63946] text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
  
      {/* Input Fields */}
      <form onSubmit={handleSubmit(loginHandler)}>
        <label className="font-semibold text-sm"  htmlFor="">Email</label>
        <input {...register("email",{required: "email is required"})} className="w-full h-full mb-3 rounded-lg outline-none border-2 border-zinc-400 font-semibold text-zinc-600 px-10 py-3" type="email" placeholder="Your email" />
        <label  className="font-semibold text-sm" htmlFor="">Password</label>
        <input {...register("password",{required: "password is required"})} className="w-full h-full mb-3 rounded-lg outline-none border-2 border-zinc-400 font-semibold text-zinc-600 px-10 py-3" type="password" placeholder="Your Password" />

         {/* Login Button */}
      <button className="w-full py-3 mt-4  rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105
        bg-[#22C55E] hover:bg-[#FF6B81]">
        Login as {acType.charAt(0).toUpperCase() + acType.slice(1)}
      </button>
      </form>
  
     
  
      {/* Register Link */}
      <p className="mt-6 text-center text-gray-500">
        Don't have an account?{" "}
        <Link to={'/register'} className="text-[#457B9D] font-medium hover:underline transition-all">
          Register here
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default Login;