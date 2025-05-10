import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Register = () => {
  return (
    <div className="max-h-screen bg-zinc-300">
     <div className="flex justify-center items-center max-h-screen bg-zinc-400 py-12">
  <div className="max-w-sm h-1/2 w-full bg-white shadow-2xl rounded-2xl py-6 px-10 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
    
    {/* Heading */}
    <h2 className="text-3xl font-extrabold text-[#1D3557] mb-8 text-center">
      Create an Account
    </h2>

    {/* Input Fields */}
    <form action="">
      <label className="font-semibold" htmlFor="">Name</label>
      <input className="w-full px-5 py-2 border-b-2 mb-4 rounded-lg outline-none border-zinc-400 font-semibold " type="text" placeholder="Enter your name" />
      <label className="font-semibold " htmlFor="">Email</label>
      <input className="w-full px-5 py-2 border-b-2  mb-4 rounded-lg outline-none border-zinc-400 font-semibold" type="email" placeholder="Enter your email" />
      <label className="font-semibold " htmlFor="">Password</label>
      <input className="w-full px-5 py-2 border-b-2 mb-4 rounded-lg outline-none border-zinc-400 font-semibold" type="password" placeholder="Create a password" />
      {/* <label className="font-semibold text-emerald-400" htmlFor="">Confirm Password</label> */}
      {/* <input className="w-full px-5 py-2 border-b-2 mb-2 rounded-lg outline-none border-zinc-400 font-semibold" type="password" placeholder="Confirm your password" /> */}
    </form>
    {/* Register Button */}
    <button className="w-full py-3 mt-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105
      bg-[#E63946] hover:bg-[#FF6B81]">
      Register Now
    </button>

    {/* Login Link */}
    <div className="mt-4 text-center text-gray-500">
      Already have an account?{" "}
      <Link to={'/login'} className="text-[#457B9D] font-medium hover:underline transition-all">Login here</Link>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Register;