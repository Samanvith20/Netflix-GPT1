import React, { useEffect } from 'react'
import { OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addtrailer } from '../utils/movieSlice'

const useTrailerplayingvideo = (movieID) => {
      const dispatch= useDispatch()
    const getMovieVideos = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      OPTIONS)
       const json =await data.json()
       console.log(json.results);
        const filterdData= json.results.filter((video)=>video.type="Trailer")
        const trailer =filterdData.length? filterdData[0]:json.results[0]
         dispatch(addtrailer(trailer))
    }
   useEffect(()=>{
      getMovieVideos()
   },[])
    return (
     
     
    <div>
       
    </div>
  )
}

export default useTrailerplayingvideo
