import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerAdmin } from "../../redux/features/AdminSlice";
import { useNavigate } from "react-router-dom";

const AddAdminAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async(data) => {
    const response = await dispatch(registerAdmin(data));
    if(registerAdmin.fulfilled.match(response)){
      navigate('/admin/manage-admins');
    }
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000] text-white flex justify-center items-center px-4 py-12">
      <div className="w-full max-w-xl bg-[#1c1c1c] p-10 rounded-3xl shadow-2xl border border-[#333] hover:shadow-[#00FFF0]/30 transition-all duration-500 transform hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] to-[#007CF0] animate-pulse">
          Add New Admin
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter full name"
              className={`w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white border focus:outline-none focus:ring-2 focus:ring-[#00FFF0] ${
                errors.name ? "border-red-500" : "border-zinc-600"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="admin@example.com"
              className={`w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white border focus:outline-none focus:ring-2 focus:ring-[#00FFF0] ${
                errors.email ? "border-red-500" : "border-zinc-600"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Create a strong password"
              className={`w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white border focus:outline-none focus:ring-2 focus:ring-[#00FFF0] ${
                errors.password ? "border-red-500" : "border-zinc-600"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#00FFF0] to-[#007CF0] text-black font-bold rounded-lg hover:from-[#00ccff] hover:to-[#0055cc] transition-all duration-300 transform hover:scale-105"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdminAccount;
