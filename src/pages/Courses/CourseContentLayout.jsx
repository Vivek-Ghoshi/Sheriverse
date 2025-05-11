import Nextvideo from "../../components/Nextvideo";
import Videoinfo from "../../components/Videoinfo";
import Videoplayer from "../../components/Videoplayer";

const CourseContentLayout = () => {
  return (
    <div className="w-full h-auto bg-black text-white p-4 box-border">
      <div className="flex h-full space-x-4">
        {/* Left Section 70% */}
        <div className="w-[70%] flex flex-col space-y-4">
          {/* Top 70% Video */}
          <div className="flex-grow-[7]">
            <Videoplayer/>
          </div>
          {/* Bottom 20% Info */}
          <div className="flex-grow-[2]">
            <Videoinfo/>
          </div>
        </div>

        {/* Right Section 30% */}
        <div className="w-[30%] h-[90vh] bg-zinc-900 rounded-xl p-2 shadow-inner">
          <Nextvideo/>
        </div>
      </div>
    </div>
  );
};

export default CourseContentLayout;
