import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/features/StudentSlice";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../redux/features/CommanSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  const {role} = useSelector(state => state.auth);
  const {courses} = useSelector(state => state.comman);
  useEffect(()=>{
     dispatch(getAllCourses())
  },[dispatch]);

    const courseDetsHandler = (id)=>{
      dispatch(getDetails(id));
    }
  
  return (
   <div className="min-h-screen bg-[#0F172A] text-white p-6 sm:p-8">
  <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse">
    Explore Courses
  </h1>

  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
    {courses && courses.map((course) => (
      <div
        key={course._id}
        className="bg-[#1E293B] p-4 sm:p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 group flex flex-col justify-between h-full"
      >
        {/* Thumbnail */}
        <img
          src={course.thumbnailUrl}
          alt={course.title}
          className="w-full h-36 sm:h-40 rounded-lg mb-4 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {course.title}
        </h2>

        {/* Description (2-line clamp) */}
        <p className="text-sm sm:text-base opacity-75 line-clamp-2 mb-2">
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="text-xs sm:text-sm text-blue-400 space-y-1 mb-3">
          <p>👥 Students Enrolled: {course.studentsEnrolled?.length}</p>
          <p>🎓 Instructor: {course.instructor?.name}</p>
        </div>

        {/* Price + Button */}
        <div className="mt-auto">
          <span className="block w-full bg-sky-500 text-white text-sm font-bold text-center py-2 rounded-md mb-3">
            ₹{course.price}
          </span>

          <Link
            onClick={() => courseDetsHandler(course._id)}
            to={
              role === 'student'
                ? `/courses/${course._id}`
                : `/admin/monitor-course/${course._id}`
            }
            className="block text-center bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default CourseList;