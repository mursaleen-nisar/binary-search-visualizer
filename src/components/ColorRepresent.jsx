import React from 'react'

const ColorRepresent = () => {
  return (
    <div className="flex justify-center items-center mb-8">
    <div className="flex items-center mr-4">
      <div className="w-8 h-6 bg-green-500/60 mr-2"></div>
      <span>Start</span>
    </div>
    <div className="flex items-center mr-4">
      <div className="w-8 h-6 bg-purple-500/60 mr-2"></div>
      <span>Mid</span>
    </div>
    <div className="flex items-center mr-4">
      <div className="w-8 h-6 bg-red-500/60 mr-2"></div>
      <span>End</span>
    </div>
    <div className="flex items-center mr-4">
      <div className="w-8 h-6 bg-zinc-300/60 mr-2"></div>
      <span>Discarded</span>
    </div>
  </div>
  )
}

export default ColorRepresent