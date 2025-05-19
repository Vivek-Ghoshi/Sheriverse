import React from 'react'

const Videoinfo = ({currentVideo}) => {
  return (
     <div className="w-full h-full bg-zinc-900 rounded-xl text-white p-4 overflow-y-auto shadow-inner">
      <h2 className="text-xl font-semibold mb-2 capitalize">Video Title: {currentVideo.title}</h2>
      <hr className="border-zinc-700 mb-4" />
      <p className="text-sm text-gray-300 mb-4 capitalize">{currentVideo.description}.</p>
      {/* <div>
        <h3 className="text-lg font-medium mb-2">Comments</h3>
        <ul className="space-y-2">
          <li className="text-sm text-gray-400">💬 Very informative, thanks!</li>
          <li className="text-sm text-gray-400">💬 Can you explain useEffect again?</li>
          <li className="text-sm text-gray-400">💬 Great video! Loving the content 🔥</li>
        </ul>
      </div> */}
    </div>
  )
}

export default Videoinfo
