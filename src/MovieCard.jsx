import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className=' w-[310px] h-[460px] m-[1.5rem] rounded-[12px] overflow-hidden border-hidden'>
            <div className=' text-center text-2xl text-red-600'>
              <p>{movie.Year}</p>
            </div>
            <div>
            <img src={movie.Poster !== 'N/A'? movie.Poster : 'https://via.placeholder.com/400' } alt={movie.Title}/>
            </div>
            <div>
              <span>{movie.Type}</span>
              <h2 className=' text-2xl text-blue-900'>{movie.Title}</h2>
            </div>
        </div>
  )
}

export default MovieCard