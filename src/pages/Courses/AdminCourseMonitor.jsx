import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AdminCourseMonitor = () => {
const {id} = useParams();
const {courses} = useSelector(state => state.comman);
const filterd = courses.filter(video => video._id == id );
const [{videoUrls , title,description}] = filterd;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white capitalize">{title}</h1>
          <p className="text-gray-400 mt-2 max-w-3xl capitalize">{description}</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#1f1f1f] px-6 py-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-400">Students Enrolled</p>
            <h2 className="text-xl font-semibold">120</h2>
          </div>
          <div className="bg-[#1f1f1f] px-6 py-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-400">Total Videos</p>
            <h2 className="text-xl font-semibold">{videoUrls.length}</h2>
          </div>
        </div>
      </div>

      {/* Videos List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoUrls && videoUrls?.length > 0 ? (
          videoUrls?.map((video, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="aspect-video bg-black">
                <video
                  src={video.url}
                  controls
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{video.description}</p>
                {/* <p className="text-xs text-gray-500 mt-2">Order: {video.order}</p> */}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full mt-10 text-gray-500">
            No videos uploaded yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCourseMonitor;
