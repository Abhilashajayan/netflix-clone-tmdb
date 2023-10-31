import axios from 'axios';
import React, { useEffect, useState } from 'react'
import moviesWithVideos from '../constants/constants';

const Main = () => {
  const [movie, setMovies] = useState([]);
  
  useEffect(() => {
    const getRandomFunction = () => {
      const randomIndex = Math.floor(Math.random() * moviesWithVideos.moviesWithVideos.length) ;
      const movieVideo =  moviesWithVideos.moviesWithVideos[randomIndex];
      setMovies(movieVideo);
    } 
    getRandomFunction()
  }, [])
 
   
  
  const truncateString = (str, num) => {
    if( str?.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str;
    }
  }
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          poster={movie?.thumbnailUrl}
          src={movie?.videoUrl}
        ></video>
        <div className='absolute w-full ml-4 top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
          <button className="bg-white text-black px-5 py-2 mr-3 mt-3 rounded-md">
                Play
              </button>
              <button className="bg-gray-600 text-white px-5  py-2 mt-3 rounded-md">
              More info
              </button>
          </div>
          <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.description, 200)}</p>
        </div>
      </div>
    </div>
  )
}

export default Main;