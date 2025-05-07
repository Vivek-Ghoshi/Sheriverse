import { Link } from "react-router-dom";
import AiLogo from "./AiLogo";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {role} = useSelector(state=> state.auth);
  const menuItems = {
    student: [
      { label: "My Courses", link: "/enrolled-courses" },
      // { label: "AI Tutor", link: "#" },
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
    <div className="w-64 min-h-[70vh] bg-gradient-to-t from-[#E63946] via-[#6D597A] via-[#457B9D] to-[#1D3557]  text-white p-6 flex flex-col justify-between shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center justify-between mb-6 border-b-2 pb-2">
        <h2 className="text-md font-semibold tracking-wide">Get Assistance</h2>
        <AiLogo />
      </div>

      {/* Menu Items */}
      <ul className="flex-1">
        {menuItems && menuItems[role].map((item, index) => (
          <li key={index} className="mb-4">
            <Link
              to={item.link}
              className="block px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-zinc-200 hover:text-[#4F46E5]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="text-center text-sm text-gray-300 mt-4">
        © 2025 SheriVerse. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
