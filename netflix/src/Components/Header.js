import React from 'react'
import { LOGO } from '../utils/constants'
const Header = () => {
  return (
    <div>
       <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img src= {LOGO} alt="Netflix-logo" className="w-44"/>
      </div>
    </div>
  )
}

export default Header
