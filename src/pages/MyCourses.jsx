import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../redux/features/StudentSlice";

const MyCourses = () => {
  const dispatch = useDispatch();
    const {enrollCourses} = useSelector(state => state.student);
    const courseList = Array.isArray(enrollCourses)? enrollCourses : [enrollCourses];

    useEffect(()=>{
        dispatch(getEnrolledCourses());
    },[]);
  
    return (
      <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
        <h1 className="text-4xl font-bold mb-10">My Courses</h1>
  
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* {!courseList.course?"No courses to show":"No courses to show"} */}
          {courseList && courseList.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 h-fit rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 p-4"
            >
              <img src={course.thumbnailUrl} alt={course.title} className="w-full h-48 object-cover rounded-xl " />
              <div className="p-4">
                <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500">{course.title}</h2>
                <h2 className="text-2xl font-semibold text-sm mt-1 capitalize">{course.description}</h2>
                {/* <p className="text-gray-400 mt-2">Instructor: {course.instructor}</p> */}
  
                <div className="mt-3">
                  <p className="text-sm mb-1">Progress: 40%</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 h-2.5 rounded-full"
                      style={{ width: `40%` }}
                    ></div>
                  </div>
                </div>
  
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 py-2 rounded-lg transition duration-300">
                  Resume Course
                </button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    );
  };
  
  export default MyCourses;
  