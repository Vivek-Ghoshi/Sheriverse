
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "../../redux/features/StudentSlice";
import { useNavigate, useParams } from "react-router-dom";


const CourseDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const {courseDetails} = useSelector(state => state.student);
  
  const enrollHandler = (id)=>{
        dispatch(enrollCourse(id))
        navigate('/student/dashboard');
  }
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8 mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* <div className="relative w-120 h-40 rounded-xl">
        <img src={courseDetails.thumbnailUrl} alt={courseDetails.title} className="rounded-xl w-full h-full object-cover  mb-8" />
        </div> */}
        <div  className="relative mx-auto w-[60vw] h-100 bg-zinc-900 rounded-xl mt-10">
         <video controls autoPlay muted loop src={courseDetails.videoUrl} className="w-full h-full object-contain">Intro Video</video>
        </div>

        <h1 className="text-5xl font-bold mb-4 capitalize mt-10 ">{courseDetails.title}</h1>
        <p className="text-lg opacity-75 mb-6">{courseDetails.description}</p>

        <div className="mb-6">
          <p className="text-xl font-semibold">Instructor: {courseDetails.instructor?.name}</p>
          <p className="text-xl">Duration: {courseDetails.duration}</p>
          <p className="text-xl">Price: {courseDetails.price}</p>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Course Syllabus</h2>
        {/* <ul className="list-disc ml-8 space-y-2">
          {courseDetails.syllabus.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul> */}

        <button onClick={()=>enrollHandler(id)} className="mt-8 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-lg font-semibold text-xl">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;