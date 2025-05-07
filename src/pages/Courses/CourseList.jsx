
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/features/StudentSlice";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../redux/features/CommanSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  const {courses} = useSelector(state => state.comman);
  useEffect(()=>{
     dispatch(getAllCourses())
  },[dispatch]);

    const courseDetsHandler = (id)=>{
      dispatch(getDetails(id));
    }
  
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12">Explore Courses</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses && courses.map((course) => (
          <div key={course._id} className="bg-[#1E293B] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={course.thumbnailUrl} alt={course.title} className="w-full h-40 rounded-lg mb-6" />
            <h2 className="text-3xl font-semibold mb-3">{course.title}</h2>
            <p className="text-lg opacity-75 ">{course.description}</p>
            <p className="text-blue-400 mb-4">Students Enrolled: {course.studentsEnrolled?.length}</p>
            <p className="text-blue-400 mb-6">Instructor: {course.instructor?.name}</p>
            <span className="w-60 h-fit bg-sky-400 px-4 py-2 rounded-lg font-bold">Price: {course.price}</span>
            {/* <span className="w-60 h-fit bg-green-500 ml-24 px-4 py-2 rounded-lg font-bold">Buy Course</span> */}
            <Link
              onClick={()=>courseDetsHandler(course._id)}
              to={`/courses/${course._id}`}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;