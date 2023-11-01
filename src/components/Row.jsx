import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";


function Row({ title, fetchURL, rowID }) {
    const [movies, setMovies] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState('');
    const Api_Key = "7dc32f45f176caf0f3e2d7ff7c8dcb1c";

    const openModal = (movieId) =>{
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${Api_Key}`).then((response) =>{
        const trailer = response.data.results.find((video)=>
          video.type === 'Trailer')
          if (trailer) {
            setTrailerKey(trailer.key)
          }
        });
        setModalOpen(true);
      };
    

  const closeModal = () => {
    setModalOpen(false);
  };

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
        </div>

        <div className="flex gap-7 mt-5 overflow-x-auto overflow-auto no-scrollbar">
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
                  onClick={(e) => openModal(movies.id)}
                >
                    {" "}
                   <AiOutlinePlayCircle /> {" "}
                
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
  <div className="fixed inset-0  flex items-center justify-center z-50">
    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
    <div className="modal bg-black p-8 rounded-lg z-50 relative">
      <button onClick={closeModal} className="close-button absolute top-2 right-2 text-white hover:text-gray-300 z-10">
        Close
      </button>
      <div className="">
        <iframe
          width="950"  
          height="404"  
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}  
          title=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)}


  </div>
    )
}

export default Row;