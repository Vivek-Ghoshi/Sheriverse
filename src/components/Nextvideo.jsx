import image from "../Images/nextVideo.png"
const Nextvideo = ({currentIndex , videos, onVideoSelect}) => {

  return (
     <div className="nextVideo h-full overflow-y-auto p-2 space-y-4">
      {videos.map((video, index) => (
        <div key={index} onClick={() => onVideoSelect(index)} className="relative rounded-xl overflow-hidden shadow-lg group">
          <img src={image} alt={video.title} className="w-full h-40 object-cover bg-black" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm font-semibold px-2">{index + 1}:{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Nextvideo
