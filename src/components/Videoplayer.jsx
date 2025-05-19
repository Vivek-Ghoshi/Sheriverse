import Hls from "hls.js";
import { useEffect, useRef } from "react";

const Videoplayer = ({videoUrl , onVideoEnd, publicId}) => {
   const videoRef = useRef(null);
   const cloudName = import.meta.env.VITE_CLOUD_FOLDER;
      useEffect(()=>{
        const hls = new Hls();
        const video = videoRef.current;
        const encodedPublicId = encodeURIComponent(publicId)
        const hlsUrl = `https://res.cloudinary.com/${cloudName}/video/upload/sp_auto/${encodedPublicId}.m3u8`;
  
        if(Hls.isSupported()){
          hls.loadSource(hlsUrl);
          hls.attachMedia(video);
          
    hls.on(Hls.Events.ERROR, function (event, data) {
      console.error("HLS.js error:", data);
    });
        }else if(video.canPlayType("application/vnd.apple.mpegurl")){
          video.src = hlsUrl;
        }
        return ()=> hls.destroy();
      },[publicId]);
  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden shadow-lg">
      <video  ref={videoRef} controlsList="nodownload" controls  onEnded={() => onVideoEnd()}
         onContextMenu={(e) => e.preventDefault()}  className="w-full h-full object-cover"/>
        {/* <source  src={videoUrl} type="video/mp4" /> */}

      {/* </video> */}
    </div>
  )
}

export default Videoplayer
