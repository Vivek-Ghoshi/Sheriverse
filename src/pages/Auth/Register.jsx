import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/AuthSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" }); // Enables real-time validation

  const onSubmit = async (data) => {
    const result = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(result)) {
      navigate("/student/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-center mb-8 animate-pulse">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-[#457B9D] ${
                  errors.name ? "border-red-500" : "border-zinc-300"
                }`}
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-[#457B9D] ${
                  errors.email ? "border-red-500" : "border-zinc-300"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Create a password"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-[#457B9D] ${
                  errors.password ? "border-red-500" : "border-zinc-300"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3 text-white font-bold rounded-lg transition-transform transform ${
                isValid
                  ? "bg-[#457B9D] hover:bg-[#1D3557] hover:scale-105"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Register Now
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#1D3557] font-semibold hover:underline"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
