import React from 'react'
import MovieList from './MovieList'



import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
   const movies=useSelector((store)=>store.movies)
  return (
     movies.NowPlayingMovies&&(
    <div className='bg-black'>
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList  title={"Now Playing"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.addpopularVideos}/>
      <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies}/>
      <MovieList title={"upComing Movies"} movies={movies.addUpcomingMovies}/>
      </div>
    </div>
  )
  )
  
}

export default Secondarycontainer
