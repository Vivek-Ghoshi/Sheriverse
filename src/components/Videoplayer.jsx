import React from 'react'

const Videoplayer = () => {
  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden shadow-lg">
      <video controls className="w-full h-full object-cover">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Videoplayer
