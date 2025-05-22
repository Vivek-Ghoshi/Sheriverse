import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../redux/features/StudentSlice";
import { Link } from "react-router-dom";
import { getAllCourses } from "../redux/features/CommanSlice";
import { BookOpen } from "lucide-react";

const MyCourses = () => {
  const dispatch = useDispatch();
    const {enrollCourses} = useSelector(state => state.student);
    const courseList = Array.isArray(enrollCourses)? enrollCourses : [enrollCourses];
    
    useEffect(()=>{
        dispatch(getEnrolledCourses());
        dispatch(getAllCourses());
    },[dispatch]);
  
    return (
     <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
  <h1 className="text-4xl font-extrabold mb-10 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-600 animate-pulse">
    My Courses
  </h1>
   {courseList.length > 0 ? 
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {courseList && courseList.map((course) => (
      <div
        key={course._id}
        className="bg-gray-800 h-fit rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 p-4 group"
      >
        <img
          src={course.thumbnailUrl}
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
            {course.title}
          </h2>
          <h3 className="text-sm text-gray-400 mt-1">{course.description}</h3>

          <div className="mt-3 mb-6">
            <p className="text-sm mb-1">Progress: 40%</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                style={{ width: `40%` }}
              ></div>
            </div>
          </div>

          <Link
            to={`/student/course-content/${course._id}`}
            className="px-6 py-3 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Resume Course
          </Link>
        </div>
      </div>
    ))}
  </div> : <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
      <BookOpen className="w-16 h-16 text-blue-400 mb-4 animate-bounce-slow" />
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
        You are not enrolled in any course yet
      </h1>

      <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-md">
        Start your learning journey with SheriVerse! Browse our collection of curated and expert-led courses.
      </p>

      <Link
        to="/courses"
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        Explore Courses 🚀
      </Link>
    </div> }
</div>

    );
  };
  
  export default MyCourses;
  