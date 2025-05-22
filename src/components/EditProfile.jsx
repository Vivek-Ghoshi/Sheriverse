import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editProfile } from "../redux/features/StudentSlice";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [showPopup, setShowPopup] = useState(false);
  const [preview, setPreview] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log(typeof(data.phone));
    formData.append("name",data.name);
    formData.append("phone",data.phone)
    formData.append("bio", data.bio);
    console.log(data.image[0]);
    if(data.image[0]){
      formData.append("image",data.image[0]);
    }
    const result = await dispatch(editProfile(formData));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    if(editProfile.fulfilled.match(result)){
      navigate('/student/dashboard');
    }
    reset();
    setPreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-[#1E293B] p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Edit Your Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Personal Info */}
          <div className="space-y-6">
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center gap-3">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#E63946]"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center text-sm text-gray-300">
                  Upload
                </div>
              )}
              <input
                type="file"
                {...register("image")}
                onChange={handleImageChange}
                className="text-sm"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                {...register("name")}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                {...register("phone")}
                placeholder="+91 9876543210"
                minLength={10}
                maxLength={10}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-[#E63946]"
              />
            </div>
          </div>

          {/* Right Side - Bio and Button */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Bio */}
            <div>
              <label className="block text-sm mb-1">Bio</label>
              <textarea
                {...register("bio")}
                rows={7}
                placeholder="Tell us about yourself"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-[#457B9D]"
              />
            </div>

            {/* Update Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-[#E63946] via-[#457B9D] to-[#1D3557] rounded-md font-semibold hover:scale-105 transition-all"
              >
                Update Profile
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-10 right-10 bg-[#4ade80] text-black px-6 py-3 rounded-md shadow-xl animate-bounce z-50">
          ✅ Profile updated successfully!
        </div>
      )}
    </div>
  );
}
