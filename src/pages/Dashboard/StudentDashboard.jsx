import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEnrolledCourses, studentProfile } from "../../redux/features/StudentSlice";
import { getAllCourses } from "../../redux/features/CommanSlice";
import DefaultImg from "../../Images/DefaultImg.png"
import LoadingSpinner from "../../components/LoadingSpinner";
const StudentDashboard = () => {
  const dispatch = useDispatch();
   const user = useSelector(state => state.student?.student);
   const { enrollCourses } = useSelector(state => state.student);
   const courseList = Array.isArray(enrollCourses)? enrollCourses : [enrollCourses];
   useEffect(()=>{
       dispatch(studentProfile());
       dispatch(getEnrolledCourses());
       dispatch(getAllCourses());
   },[dispatch])
   
  return (
    <>
    {user ? <div className="flex">
      <Sidebar />
     <div className="w-full min-h-[88.8vh] bg-black text-white flex justify-center items-center px-4 py-[2.9vw]">
      <div className="w-full max-w-5xl bg-[#1a1c2c] rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col gap-6 max-h-[95vh] overflow-y-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#457B9D]">
              <img
                src={DefaultImg} 
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold capitalize">{user.name}</h2>
              <p className="text-sm text-gray-400 capitalize">{user.role} | {user.bio}</p>
            </div>
          </div>
          <Link to={'/student/edit-profile'} className="bg-[#457B9D] hover:bg-[#6D597A] px-4 py-2 rounded-xl text-sm font-medium transition">
            ✏️ Edit Profile
          </Link>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base text-gray-300">
          <div className="bg-[#2b2d42] p-4 rounded-lg shadow">
            <p className="text-gray-400 mb-1">Email:</p>
            <p className="font-semibold text-white lowercase">{user.email}</p>
          </div>
          <div className="bg-[#2b2d42] p-4 rounded-lg shadow">
            <p className="text-gray-400 mb-1">Phone:</p>
            <p className="font-semibold text-white">{user.phone}</p>
          </div>
          <div className="bg-[#2b2d42] p-4 rounded-lg shadow">
            <p className="text-gray-400 mb-1">Courses Enrolled:</p>
            <p className="font-semibold text-white">{courseList.length}</p>
          </div>
        </div>

        {/* Enrolled Courses (Compact & Scrollable) */}
        <div>
          <h3 className="text-xl font-semibold mb-2">📚 Enrolled Courses</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-40 overflow-y-auto pr-2">
            {courseList.length > 0 ?  courseList.map((course, index) => (
              <div
                key={index}
                className="bg-[#33354d] rounded-lg p-3 text-sm flex flex-col items-start justify-between hover:bg-[#3b3d5c] transition"
              >
                <h4 className="font-semibold text-white mb-1 truncate">
                  {course?.title}
                </h4>
                <p className="text-gray-400 text-xs">Progress: 40%</p>
              </div>
            )) : <p className="text-sm font-medium ml-2 text-yellow-400">No courses enrolled</p> }
           
          </div>
        </div>
      </div>
    </div>
    </div> : <LoadingSpinner/>}
    </>
  );
};

export default StudentDashboard;