import React from 'react'
import Videotitle from './videotitle'
import Videobackground from './videobackground'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
     const movies=useSelector((store)=>store.movies?.NowPlayingMovies)
      if(movies==null) return
           const mainmovie=movies[0]
           const{id, original_title,overview}=mainmovie
  return (
    <div>
       <Videotitle  title={original_title} description={overview}/>
       <Videobackground movieID={id}  />

    </div>
  )
}

export default Maincontainer
