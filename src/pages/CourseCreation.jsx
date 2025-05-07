import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCourse } from "../redux/features/AdminSlice";
import { useNavigate } from "react-router-dom";

const CourseCreation = () => {
  const navigate = useNavigate();
  const {register,handleSubmit , reset, formState:{errors}} = useForm();
  const dispatch = useDispatch();

  const courseHandler = (data)=>{
    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("price",data.price);
    formData.append("instructor",data.instructor);
    formData.append("duration",data.duration);
    if(data.image[0]){
      formData.append("image",data.image[0])
    }
    if(data.video[0]){
      formData.append("video",data.video[0])
    }

    dispatch(createCourse(formData));
    navigate('/courses');
  }
  return (
    <div className="w-5/5 max-h-[90vh] flex flex-col items-center justify-center text-white pt-[9.2vw]">
      <div className="bg-gray-800 w-screen h-[20vh] pt-6  text-center"><h1 className="text-5xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500">Create course</h1></div>
     <form onSubmit={handleSubmit(courseHandler)} encType="multipart/form-data" >
      <div className="w-screen h-fit max-w-full bg-gray-800 p-6 shadow-xl flex">
        {/* Left Section - Form */}
        <div className="w-1/2 p-5">
          <div className="space-y-4">
            {/* Course Title */}
            <div>
              <label className="block text-lg mb-2">Course Title</label>
              <input
                type="text"
                {...register("title",{required:"title is required"})}
                placeholder="Enter course title"
                className="w-full mb-3 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Course Description */}
            <div>
              <label className="block text-lg mb-2">Course Description</label>
              <textarea
                {...register("description",{required:"description is required"})}
                placeholder="Describe the course"
                rows="5"
                className="resize-none mb-3 w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Course Thumbnail */}
            <div>
              <label className="block text-lg mb-2">Course Thumbnail</label>
              <input
                type="file"
                {...register("image")}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 p-5">
          <div className="space-y-4">
             {/* Course Video */}
             <div>
              <label className="block text-lg mb-2">Course Intro </label>
              <input
                type="file"
                {...register("video",{required:"Intro video is required"})}
                placeholder="Choose file"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            {/* Course Price */}
            <div>
              <label className="block text-lg mb-2">Course Price</label>
              <input
                type="text"
                {...register("price",{required:"price is required"})}
                placeholder="Enter course price"
                className="w-full mb-3 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Instructor Name */}
            <div>
              <label className="block text-lg mb-2">Instructor Name</label>
              <input
                type="text"
                {...register("instructor",{required:"instructor is required"})}

                placeholder="Enter instructor name"
                className="w-full mb-3 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Course Duration */}
            <div>
              <label className="block text-lg mb-2">Course Duration (in hours)</label>
              <input
                type="text"
                {...register("duration",{required:"duration is required"})}

                placeholder="Enter course duration"
                className="w-full mb-3 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-purple-500/50 mt-6"
            >
              Create Course
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default CourseCreation;