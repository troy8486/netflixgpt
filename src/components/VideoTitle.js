import React from 'react'

const VideoTitle = ({title, desc}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-xl w-1/2 pt-4'>{desc}</p>

        <div>
            <button className='bg-white rounded-lg text-black mt-10 p-4 px-12 text-xl font-semibold hover:bg-opacity-70'>Play</button>
            <button className='bg-black rounded-lg text-white mx-4 p-4 px-12 text-xl font-semibold hover:bg-opacity-70'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle