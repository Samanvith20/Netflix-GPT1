import React from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import useNowplayingmovies from '../hooks/useNowplayingmovies'

const Browser = () => {
  useNowplayingmovies()
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
     
    </div>
  )
}

export default Browser
