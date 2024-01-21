import React from 'react'
import { LOGO } from '../utils/constants'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/Firebase'
const Header = () => {
   const user=useSelector((store)=>store.user)
   const navigate=useNavigate()
   const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div>
       <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
        <img src= {LOGO} alt="Netflix-logo" className="w-44"/>
        {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
      
      </div>
    </div>
  )
}

export default Header
