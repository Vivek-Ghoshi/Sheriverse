import { Link } from "react-router-dom";
import { UserCog, Users, UserPlus } from "lucide-react";

const AdminManageUsers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1e] to-[#121212] flex flex-col items-center py-16 px-4 sm:px-6 lg:px-12 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] to-[#007CF0] mb-12 text-center animate-pulse">
        Admin User Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Manage Admins Card */}
        <Link
          to="/admin/manage-admins"
          className="group p-6 bg-[#1f1f1f] rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 border border-[#2a2a2a] hover:border-[#00FFF0]"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <UserCog size={48} className="text-[#00FFF0] group-hover:animate-spin" />
            <h3 className="text-xl font-semibold">Manage Admins</h3>
            <p className="text-sm text-gray-400">
              View, add, or remove admin-level users.
            </p>
          </div>
        </Link>

        {/* Manage Students Card */}
        <Link
          to="/admin/manage-students"
          className="group p-6 bg-[#1f1f1f] rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 border border-[#2a2a2a] hover:border-[#00FFF0]"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Users size={48} className="text-[#00FFF0] group-hover:animate-pulse" />
            <h3 className="text-xl font-semibold">Manage Students</h3>
            <p className="text-sm text-gray-400">
              View enrolled students and manage accounts.
            </p>
          </div>
        </Link>

        {/* Add New User Card */}
        <Link
          to="/admin/add-admin-account"
          className="group p-6 bg-[#1f1f1f] rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 border border-[#2a2a2a] hover:border-[#00FFF0]"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <UserPlus size={48} className="text-[#00FFF0] group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold">Add New Admin</h3>
            <p className="text-sm text-gray-400">
              Create a new Admin account.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminManageUsers;
