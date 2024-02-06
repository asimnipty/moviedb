import React from 'react'
import { useEffect, useState } from 'react'
import search from './search-512.webp'
import { FcSearch } from "react-icons/fc";
import MovieCard from './MovieCard';


//import './App.css';

//API Key - a7c4c8c1
 
const API_URL = "https://www.omdbapi.com?apikey=a7c4c8c1"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const serachMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);    

  }
  
  useEffect(() => {
    serachMovies();

  }, []);

  return (
    <div className=' p-16 flex justify-center items-center flex-col'>
      <h1 className=' text-5xl text-red-500 font-bold  font-serif cursor-pointer' onClick={() => (API_URL)} >Movie Land</h1>
      <div className=' w-[71%] flex items-center justify-center mt-16 mb-8 mx-0 px-7 py-6 rounded-[3rem] bg-slate-300'>
        <input className='flex text-3xl font-medium text-[#8d3a3a] bg-transparent'
          placeholder='Serach for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={search} 
          className='w-10 h-10 cursor-pointer'
          onClick={() => serachMovies(searchTerm)} 
        />
      </div>
      {movies?.length > 0 
        ? (
          <div className=' w-[100%] mt-[3rem] flex flex-wrap items-center justify-center'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div>
            <h1 className=' text-xl'>NO Movies </h1>
          </div>
        )
      }     
    </div>   
  );
}

export default App