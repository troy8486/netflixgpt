import React from 'react'
import { img_cdn } from '../constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 mr-4 mb-6 pr-4'>
        <img 
            alt="Poster" 
            src={img_cdn + poster_path}
        ></img>
    </div>
  )
}

export default MovieCard