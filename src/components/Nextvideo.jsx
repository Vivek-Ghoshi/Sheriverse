import React from 'react'
const videoList = [
  { title: "React Props and State", thumbnail: "https://placehold.co/400x200?text=Video+1" },
  { title: "useEffect Deep Dive", thumbnail: "https://placehold.co/400x200?text=Video+2" },
  { title: "React Router Basics", thumbnail: "https://placehold.co/400x200?text=Video+3" },
];
const Nextvideo = () => {
  return (
     <div className="h-full overflow-y-auto p-2 space-y-4">
      {videoList.map((video, index) => (
        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
          <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-sm font-semibold px-2">{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Nextvideo
