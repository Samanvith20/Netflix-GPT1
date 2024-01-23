import React from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import useNowplayingmovies from '../hooks/useNowplayingmovies'
import usepopularmovies from '../hooks/usePopularmovies'

import useTopRatedmovies from '../hooks/useTopRatedmovies'
import useUpcomingmovies from '../hooks/useUpcomingmovies'

const Browser = () => {
  useNowplayingmovies()
  usepopularmovies()
  useTopRatedmovies()
  useUpcomingmovies()
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
     
    </div>
  )
}

export default Browser
