import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterdStudents } from "../../redux/features/AdminSlice";


const AdminManageStudents = () => {
  const dispatch = useDispatch();
  const {students} = useSelector(state => state.admin.students);
  useEffect(()=>{
     dispatch(getRegisterdStudents());
  },[dispatch]);
  
  const handleDelete = (id) => {
    // TODO: Add confirmation + backend API call
    console.log("Delete student with ID:", id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000] text-white py-10 px-4 sm:px-6 lg:px-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] to-[#007CF0] animate-pulse">
        Manage Student Accounts
      </h1>

      <div className="space-y-8 max-w-7xl mx-auto">
        {students && students.map((student) => (
          <div
            key={student._id}
            className="w-full bg-[#1c1c1c] rounded-3xl p-6 md:p-8 border border-[#2a2a2a] hover:border-[#00FFF0] shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Left - Details */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#00FFF0]">{student.name}</h2>
                <p className="text-sm text-gray-400">Email: {student.email}</p>
                {/* <p className="text-sm text-gray-400">Roll No: {student.rollNumber}</p> */}
                <p className="text-sm text-gray-400">
                  Enrolled Courses:{student.enrolledCourses.length}
                  {/* <span className="text-white font-medium">
                    {student.enrolledCourses.join(", ")}
                  </span> */}
                </p>
              </div>

              {/* Right - Delete Button */}
              <button
                onClick={() => handleDelete(student._id)}
                className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl flex items-center gap-2 transition-all hover:scale-105"
              >
                <Trash2 size={20} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminManageStudents;
