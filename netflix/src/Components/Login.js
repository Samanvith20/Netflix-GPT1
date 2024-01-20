import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'

const Login = () => {
     const [issignform,setIssignform]=useState(true)
     const handlesigninform =()=>{
       setIssignform(!issignform)
     }
  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src={BG_URL} alt="Netflix-bg"/>
    </div>
       <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 
        className='font-bold text-3xl py-4'>
            {issignform? "Sign in" : "Sign up" } 
            </h1>
       {!issignform &&
       <input 
       type="text" 
       placeholder='Enter your name'  
       className='my-4  w-full p-4 bg-gray-600'/>}
        <input 
        type="text" 
        placeholder='Enter your email address' 
        className='my-4  w-full p-4 bg-gray-600'/>
        <input 
        type="password" 
        placeholder='Enter your Password' 
        className='my-4 w-full p-4 bg-gray-600 '/>
        <button 
        className='p-4 my-6 bg-red-700 w-full rounded-lg'>
            {issignform? "Sign in" : "Sign up" }
            </button>
        <p className="py-4 cursor-pointer" onClick={handlesigninform}> 
        {issignform
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</p>
     </form>
    </div>
  )
}

export default Login
