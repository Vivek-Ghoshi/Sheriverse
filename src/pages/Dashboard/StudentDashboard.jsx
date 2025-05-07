import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

const StudentDashboard = () => {
   const {user} = useSelector(state => state.auth);
  return (
    <div className="flex">
      <Sidebar role="student" />
      <div className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold mb-8 text-[#4F46E5]">! Hey <span className="capitalize">{user?.user.name}</span> 👋</h1>

        <div className="flex w-full bg-zinc-900 rounded-xl py-3">
          <div className="left w-1/2 p-6 border-r-2 border-zinc-600">
           <img className="w-26 border-3 border-green-600 h-26 bg-zinc-500 object-cover rounded-full mx-auto overflow-hidden" src="https://media.istockphoto.com/id/2160473960/photo/happy-satisfied-math-teacher-in-elementary-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=88SRHMeAozO221getjzwDbXMBKHyYN7qEbGWTZPHV7A=" alt="your img" />
           <h3 className="mx-auto text-center mt-3 font-semibold text-zinc-400 capitalize">{user.user.name}</h3>
           <h4 className="text-center font-semibold capitalize text-xs mt-2 text-red-600">full stack devloper</h4>
           <div className="batches w-full h-10 flex  items-center justify-evenly mt-4">
            <h4 className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-2xl hover:bg-blue-700">J33</h4>
            <h4 className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-2xl hover:bg-blue-700">B25</h4>
            <h4 className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-2xl hover:bg-blue-700">N18</h4>
            <h4 className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-2xl hover:bg-blue-700">TNP01</h4>
            <h4 className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-2xl hover:bg-blue-700">R15</h4>
           </div>
           <div className="others w-full px-4 py-3 border-t-2 border-zinc-300 flex justify-evenly mt-2">
            <Link className="px-4 py-2 text-sm font-semibold bg-green-600 rounded-full text-white hover:bg-green-900">LinkedIn</Link>
            <Link className="px-4 py-2 text-sm font-semibold bg-green-600 rounded-full text-white hover:bg-green-900">Github</Link>
            <Link className="px-4 py-2 text-sm font-semibold bg-green-600 rounded-full text-white hover:bg-green-900">Resume</Link>
            <Link className="px-4 py-2 text-sm font-semibold bg-green-600 rounded-full text-white hover:bg-green-900">Mail</Link>
           </div>
          </div>
          <div className="right w-1/2 grid grid-cols-2 p-6 gap-6">
          <div className="bg-[#f5b041] w-48 p-6 rounded-xl shadow-md">
            <h2 className="text-xl  font-bold mb-4">Pending Assignments</h2>
            <p className="text-gray-600"></p>
          </div>

          <div className="bg-[#CCCCFF] w-48 p-6 rounded-xl shadow-md">
            <h2 className="text-xl  font-bold mb-4">Completed Assignments</h2>
            <p className="text-gray-600"></p>
          </div>

          <div className="bg-[#6495ED] w-48 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Personalized Learning</h2>
            <p className="text-gray-600"></p>
          </div>

          <div className="bg-[#76d7c4] w-48 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Job Matching</h2>
            <p className="text-gray-600"></p>
          </div>
          </div>
        </div>
        <div className="bottom w-full h-40 bg-zinc-600 mt-4">
          
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;