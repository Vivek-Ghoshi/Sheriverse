import { MonitorSmartphone, UsersRound, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  return (
  <div className="min-h-[42vw] bg-[#0F172A] text-white flex">
  {/* Sidebar - Stays on top on small screens, side on larger */}
  <Sidebar />

  {/* Main Content */}
  <div className="w-full px-4 sm:px-6 md:px-8 py-10 min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000] text-white">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] to-[#007CF0] animate-pulse">
        ⚙ Admin Dashboard
      </h1>

      <p className="text-lg md:text-xl text-center opacity-80 mb-12">
        Manage users, courses, and monitor AI analytics.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
        {/* USERS CARD */}
        <Link
          to="/admin/users"
          className="bg-[#1c1c1c]/80 border border-[#2e2e2e] rounded-2xl p-6 backdrop-blur-md hover:shadow-[0_0_25px_#00FFF0] hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center"
        >
          <UsersRound className="text-[#00FFF0] w-12 h-12 mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold mb-2">Manage Users</h2>
          <p className="text-gray-400">Add, view, or delete students and admins</p>
        </Link>

        {/* COURSES CARD */}
        <Link
          to="/admin/manage-courses"
          className="bg-[#1c1c1c]/80 border border-[#2e2e2e] rounded-2xl p-6 backdrop-blur-md hover:shadow-[0_0_25px_#00FFAB] hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center"
        >
          <BookOpen className="text-[#00FFAB] w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-2xl font-bold mb-2">Manage Courses</h2>
          <p className="text-gray-400">Create, update or delete any course data</p>
        </Link>

        {/* ANALYTICS CARD */}
        <Link
          to="/admin/analytics"
          className="bg-[#1c1c1c]/80 border border-[#2e2e2e] rounded-2xl p-6 backdrop-blur-md hover:shadow-[0_0_25px_#7F00FF] hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center"
        >
          <MonitorSmartphone className="text-[#7F00FF] w-12 h-12 mb-4 animate-wiggle" />
          <h2 className="text-2xl font-bold mb-2">AI Analytics</h2>
          <p className="text-gray-400">Monitor platform usage and AI reports</p>
        </Link>
      </div>
    </div>
</div>


  );
};

export default AdminDashboard;
