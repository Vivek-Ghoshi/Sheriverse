import { FaUserShield, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterdAdmins } from "../../redux/features/AdminSlice";

const AdminAccounts = () => {
  const dispatch = useDispatch();
  const { admins } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getRegisterdAdmins());
  }, [dispatch]);

  const handleDelete = (id) => {
    // Add real delete API call here
    // setAdmins(prev => prev.filter(admin => admin.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in">
          Registered Admin Accounts
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {admins &&
            admins.map((admin) => (
              <div
                key={admin._id}
                className="relative bg-gradient-to-br from-[#1F1D36] via-[#3F3351] to-[#1F1D36] rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <FaUserShield className="text-4xl text-white bg-black/30 rounded-full p-2" />
                  <div>
                    <h2 className="text-xl font-semibold">{admin.name}</h2>
                    <p className="text-sm opacity-80">{admin.email}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(admin.id)}
                  className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-all"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            ))}
        </div>

        {admins?.length === 0 && (
          <p className="text-center text-lg mt-16 animate-pulse opacity-70">
            No admin accounts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminAccounts;
