// src/pages/Dashboard/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex ">
      < Sidebar/>
      <div className="w-[80vw] p-8">
      <h1 className="text-5xl font-bold mb-12 text-center">⚙ Admin Dashboard</h1>

<p className="text-xl opacity-80 text-center mb-12">
  Manage users, courses, and monitor AI analytics.
</p>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
  {/* User Management */}
  <Link to="/admin/users" className="bg-gradient-to-r from-blue-600 to-indigo-500 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-3xl font-bold mb-4">👥 Manage Users</h2>
    <p className="text-lg opacity-80">View, add, or remove users.</p>
  </Link>

  {/* Course Management */}
  <Link to="/admin/manage-courses" className="bg-gradient-to-r from-green-600 to-teal-500 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-3xl font-bold mb-4">📚 Manage Courses</h2>
    <p className="text-lg opacity-80">Create, update, or delete courses.</p>
  </Link>

  {/* AI Analytics */}
  <Link to="/admin/ai-analytics" className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-3xl font-bold mb-4">📊 AI Analytics</h2>
    <p className="text-lg opacity-80">Track AI tool usage and performance.</p>
  </Link>

  {/* System Analytics */}
  <Link to="/admin/system-analytics" className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-3xl font-bold mb-4">📈 System Analytics</h2>
    <p className="text-lg opacity-80">View platform statistics and performance.</p>
  </Link>
</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
