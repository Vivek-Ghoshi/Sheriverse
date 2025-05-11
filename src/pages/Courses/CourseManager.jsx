import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllCourses } from "../../redux/features/CommanSlice";


const CourseManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {courses} = useSelector(state => state.comman);

  useEffect(()=>{
    dispatch(getAllCourses());
  },[dispatch]);


  const handleDelete = (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      console.log("Deleting course", courseId);
      // TODO: call delete API
    }
  };

  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">📚 Manage Courses</h1>
        <Link to={'/admin/create-course'} 
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"> ➕ Create New Course</Link>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1 capitalize">{course.title}</h2>
              <p className="text-gray-400 text-sm mb-4">
                {course.description}
              </p>
              <div className="flex justify-between">
                <Link to={`/admin/courses/${course._id}/add-content`}
                 className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold">
                    📥 Add Content 
                 </Link>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManager;
