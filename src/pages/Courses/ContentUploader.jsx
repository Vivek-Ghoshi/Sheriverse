import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SortableItem from "../../components/SortableItem";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { uploadContent } from "../../redux/features/AdminSlice";


const ContentUploader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [popup, setPopup] = useState(false);
  const fileInputRef = useRef(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleFiles = (files) => {
    const videoFiles = Array.from(files)
      .filter((file) => file.type.startsWith("video/"))
      .map((file, index) => ({
        id: uuidv4(),
        file,
        title: file.name.replace(/\.[^/.]+$/, ""),
        description: "",
        order: videos.length + index + 1,
      }));

    setVideos((prev) => [...prev, ...videoFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleChange = (id, field, value) => {
    setVideos((prev) =>
      prev.map((video) =>
        video.id === id ? { ...video, [field]: value } : video
      )
    );
  };

  const handleRemove = (id) => {
    setVideos((prev) => prev.filter((v) => v.id !== id));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = videos.findIndex((v) => v.id === active.id);
      const newIndex = videos.findIndex((v) => v.id === over?.id);
      setVideos((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const uploadHandler = (id) => {
    const formData = new FormData();

    videos.forEach((video) => {
      formData.append("titles", video.title);
      formData.append("descriptions", video.description);
      formData.append("orders", video.order);
      formData.append("videos", video.file);
    });
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 3000);
    dispatch(uploadContent({ formData, id }));
    setVideos([]);
    // navigate('/admin/manage-courses')
  };
  return (
    <div className="bg-black min-h-screen p-8 text-white">
      {popup && (
        <div className="fixed top-6 right-6 z-50">
          <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-white px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border border-white/10 animate-bounce transition-all duration-300 ease-in-out flex items-center space-x-4">
            <span className="text-2xl animate-spin-slow">🚀</span>
            <div>
              <h3 className="font-semibold text-lg">Uploading Soon!</h3>
              <p className="text-sm text-gray-200">
                Your videos will be uploaded shortly...
              </p>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6">📥 Upload Content</h1>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="video/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Drop zone */}
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-600 rounded-xl p-12 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-all cursor-pointer mb-8"
      >
        <div className="text-center text-gray-300">
          <p className="text-xl">Drag & Drop videos here</p>
          <p className="text-sm text-gray-500 mt-1">or click to browse</p>
        </div>
      </div>

      {/* Video list */}
      {videos.length > 0 && (
        <div className="bg-zinc-900 p-4 rounded-xl shadow-lg overflow-x-auto">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={videos.map((v) => v.id)}
              strategy={verticalListSortingStrategy}
            >
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-left">File Name</th>
                    <th className="p-2 text-left">Title</th>
                    <th className="p-2 text-left">Description</th>
                    <th className="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video, index) => (
                    <SortableItem
                      key={video.id}
                      video={video}
                      index={index}
                      onChange={handleChange}
                      onRemove={handleRemove}
                    />
                  ))}
                </tbody>
              </table>
            </SortableContext>
          </DndContext>

          <button
            onClick={() => uploadHandler(id)} // Replace with your upload function
            className="mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl text-white font-medium shadow-md transition"
          >
            🚀 Submit Videos
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentUploader;
