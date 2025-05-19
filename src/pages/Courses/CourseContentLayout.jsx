import { useParams } from "react-router-dom";
import Nextvideo from "../../components/Nextvideo";
import Videoinfo from "../../components/Videoinfo";
import Videoplayer from "../../components/Videoplayer";
import { useSelector } from "react-redux";
import { useState } from "react";


const CourseContentLayout = () => {
  const { id } = useParams();
  const { courses } = useSelector((state) => state.comman);
  const currentCourse = courses.filter((course) => course._id == id);
  const [{ videoUrls,title }] = currentCourse;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = videoUrls?.[currentIndex];
  const videoEndHandler = () => {
    if (currentIndex < videoUrls.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="w-full h-auto bg-black text-white p-4 box-border">
      {/* <div className="w-full h-20 text-3xl font-bold text-red-600 mb-5 uppercase flex items-center "><p className="text-white">currently watching :</p> {title}</div> */}
      <div className="flex h-full space-x-4">
        {/* Left Section 70% */}
        <div className="w-[70%] flex flex-col space-y-4">
          {/* Top 70% Video */}
          <div className="flex-grow-[7]">
            <Videoplayer
              videoUrl={currentVideo?.url}
              publicId={currentVideo.public_id}
              onVideoEnd={() => videoEndHandler()}
            />
          </div>
          {/* Bottom 20% Info */}
          <div className="flex-grow-[2]">
            <Videoinfo
              currentVideo={currentVideo}
            />
          </div>
        </div>

        {/* Right Section 30% */}
        <div className="w-[30%] h-[90vh] bg-zinc-900 rounded-xl p-2 shadow-inner">
          <Nextvideo
            currentIndex={currentIndex}
            videos={videoUrls}
            onVideoSelect={(index) => setCurrentIndex(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseContentLayout;
