import { Link } from "react-router-dom";
import AiLogo from "./AiLogo";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {role} = useSelector(state=> state.auth);
  const menuItems = {
    student: [
      { label: "My Courses", link: "/enrolled-courses" },
      { label: "All Courses", link: "/courses" },
      { label: "Assignments", link: "/student/assignments-quiz" },
    ],
    instructor: [
      { label: "Assignment Submissions", link: "#" },
      { label: "Create Assignment", link: "/instructor/create-assignment" },
      { label: "All Assignments", link: "/instructor/all-assignment" },
    ],
    admin: [
      { label: "Add Instructor", link: "/admin/add-instructor" },
      { label: "Create Course", link: "/admin/create-course" },
      { label: "Registerd Courses", link: "/courses" },
      { label: "All Instructors", link: "/admin/all-instructors"},
    ],
  };

  return (
    <div className="w-64 min-h-[70vh] bg-[#0F0F0F] text-white p-6 flex flex-col justify-between shadow-xl  border border-gray-800 backdrop-blur-md">
  {/* Logo Section */}
  <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-3">
    <h2 className="text-lg font-bold tracking-wide text-gray-100">Get Assistance</h2>
    <AiLogo className="text-[#E63946] animate-pulse" />
  </div>

  {/* Menu Items */}
  <ul className="flex-1 space-y-3">
    {menuItems && menuItems[role].map((item, index) => (
      <li key={index}>
        <Link
          to={item.link}
          className="block px-4 py-2 rounded-lg text-xs  font-semibold text-gray-300 transition-all duration-300 hover:bg-[#1F1F1F] hover:text-[#E63946] hover:pl-6 group"
        >
          <span className="transition-all duration-300 group-hover:tracking-wide">
            {item.label}
          </span>
        </Link>
      </li>
    ))}
  </ul>

  {/* Footer */}
  <div className="text-center text-xs text-gray-500 mt-6">
    © 2025 <span className="text-[#E63946] font-semibold">SheriVerse</span>. All rights reserved.
  </div>
</div>

  );
};

export default Sidebar;
