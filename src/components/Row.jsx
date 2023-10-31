import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Row({ title, fetchURL, rowID }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL])
    console.log()

    return (
        <div className='bg-black'>
           
           <div className=" bg-gray/50 p-10 mt-20 md:mt-0 rounded-lg ">
        <div className="flex flex-row mt-20 md:mt-0">
          <h1 className="text-white text-2xl mt-20  md:mt-0 ">{title}</h1>
          <svg
            className="mt-20 md:mt-0 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="flex gap-7 overflow-x-auto overflow-auto no-scrollbar">
          {movies.map((movies, index) => (
            <div className="flex-shrink-0 relative w-60 h-44 " key={index}>
              <img
                className="w-full h-full object-cover hover:transform hover:scale-110 transform  transition-transform  duration-300"
                src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
                alt={`Movie image: ${movies.title}`}
                title={movies.title}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white text-lg font-bold">{movies.title}</h5>
                <button
                  className="text-white text-4xl"
                  
                >
                
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

        </div>
    )
}

export default Row;