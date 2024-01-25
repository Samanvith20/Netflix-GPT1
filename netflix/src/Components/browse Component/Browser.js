import React from 'react'
import Header from '../login Component/Header'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

import GptPage from '../gptComponent/GptPage'
import { useSelector } from 'react-redux'
import useNowplayingmovies from '../../utils/hooks/useNowplayingmovies'
import usePopularMovies from '../../utils/hooks/usePopularmovies'
import useTopRatedmovies from '../../utils/hooks/useTopRatedmovies'
import useUpcomingmovies from '../../utils/hooks/useUpcomingmovies'




const Browser = () => {
  
  useNowplayingmovies()
  usePopularMovies()
  useTopRatedmovies()
  useUpcomingmovies()
   
   const GptSearch= useSelector((store)=>store.Gpt.showGptSearch)
  return (
    <div>
      <Header/>
      {
      GptSearch ? 
      <GptPage /> : 
      (
      <>
      
      <Maincontainer />
      <Secondarycontainer />
      </>
      )
      }

      
     
    </div>
  )
}

export default Browser
