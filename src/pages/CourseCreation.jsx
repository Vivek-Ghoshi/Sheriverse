import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCourse } from "../redux/features/AdminSlice";
import { useNavigate } from "react-router-dom";
import {
  FiBookOpen,
  FiImage,
  FiVideo,
  FiUser,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";
import { useState } from "react";

const CourseCreation = () => {
  const navigate = useNavigate();
  const[popup, setPopup] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  
  const courseHandler = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("instructor", data.instructor);
    formData.append("duration", data.duration);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }
    if (data.video[0]) {
      formData.append("video", data.video[0]);
    }
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 6000);
    const response = await dispatch(createCourse(formData));
    reset();
    if (createCourse.fulfilled.match(response)) {
      navigate("/courses");
    }
  };
  return (
    <div className="w-full min-h-screen bg-[#0F0F1A] text-white flex flex-col items-center">
      {popup && (
        <div className="fixed top-6 right-6 z-50">
          <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-white px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border border-white/10 animate-bounce transition-all duration-300 ease-in-out flex items-center space-x-4">
            <span className="text-2xl animate-spin-slow">🚀</span>
            <div>
              <h3 className="font-semibold text-lg">Creating</h3>
              <p className="text-sm text-gray-200">
                Just wait for a while
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="w-full bg-[#1E1E2F] h-[20vh] flex items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-500">
          Create Course
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(courseHandler)}
        encType="multipart/form-data"
        className="w-full max-w-7xl mx-auto px-4 py-8 animate-fade-in"
      >
        <div className="flex flex-col lg:flex-row gap-6 bg-[#1E1E2F] rounded-xl shadow-2xl p-6">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Course Title */}
            <div>
              <label className="block text-lg mb-2 flex items-center gap-2">
                <FiBookOpen /> Course Title
              </label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter course title"
                className="w-full p-3 bg-[#2A2A3B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Course Description */}
            <div>
              <label className="block text-lg mb-2">Course Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Describe the course"
                rows="5"
                className="w-full p-3 resize-none bg-[#2A2A3B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Course Thumbnail */}
            <div>
              <label className="block text-lg mb-2 flex items-center gap-2">
                <FiImage /> Course Thumbnail
              </label>
              <input
                type="file"
                {...register("image")}
                className="w-full p-3 bg-[#2A2A3B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Intro Video */}
            <div>
              <label className="block text-lg mb-2 flex items-center gap-2">
                <FiVideo /> Course Intro
              </label>
              <input
                type="file"
                {...register("video", {
                  required: "Intro video is required",
                })}
                className="w-full p-3 bg-[#2A2A3B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-lg mb-2 flex items-center gap-2">
                <FiDollarSign /> Course Price
              </label>
              <input
                type="text"
                {...register("price", { required: "Price is required" })}
                placeholder="Enter course price"
                className="w-full p-3 bg-[#2A2A3B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Instructor Name */}
            <div>
              <label className="block text-lg mb-2 flex items-center gap-2">
                <FiUser /> Instructor Name
              </label>
              <input
                type="text"
                {...register("instructor", {
                  required: "Instructor is required",
                })}
                placeholder="Enter instructor name"
                className="w-full p-3 bg-[#2A2A3B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-lg mb-2 flex items-center gap-2">
                <FiClock /> Course Duration (in hours)
              </label>
              <input
                type="text"
                {...register("duration", {
                  required: "Duration is required",
                })}
                placeholder="Enter course duration"
                className="w-full p-3 bg-[#2A2A3B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-purple-500/50 mt-4"
            >
              Create Course
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseCreation;
