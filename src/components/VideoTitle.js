import React from 'react'

const VideoTitle = ({title, desc}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-xl w-1/2 pt-4'>{desc}</p>

        <div>
            <button className='bg-slate-300 rounded-lg text-black p-4 px-12 text-xl'>Play</button>
            <button className='bg-black rounded-lg text-white mx-4 p-4 px-12 text-xl'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle