import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { image_url } from "../constants";

const GptSearch = () => {
  return (
    <div className=''>
      <div className='absolute -z-10'>
      <img
          src={image_url}
          alt="login"
        />
      </div>

      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>

  )
}

export default GptSearch