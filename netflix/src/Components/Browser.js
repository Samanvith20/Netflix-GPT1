import React from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import useNowplayingmovies from '../hooks/useNowplayingmovies'
import usepopularmovies from '../hooks/usePopularmovies'

import useTopRatedmovies from '../hooks/useTopRatedmovies'
import useUpcomingmovies from '../hooks/useUpcomingmovies'
import GptPage from './GptPage'
import { useSelector } from 'react-redux'

const Browser = () => {
  useNowplayingmovies()
  usepopularmovies()
  useTopRatedmovies()
  useUpcomingmovies()
   const GptSearch= useSelector((store)=>store.Gpt.showGptSearch)
  return (
    <div>
      <Header/>
      {GptSearch ? (<GptPage />) : (<><Maincontainer /><Secondarycontainer /></>)}

      
     
    </div>
  )
}

export default Browser
