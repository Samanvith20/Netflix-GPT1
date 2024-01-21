import React, { useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constants';
import Validation from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [issignform, setIssignform] = useState(true);
  const [erromessage, seterrormessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
    
  const navigate=useNavigate()

  const handlesigninform = () => {
    setIssignform(!issignform);
  };

  const handlesubmitform = (e) => {
    e.preventDefault();

    // Validate form inputs
    const message = Validation(email, password,);
    seterrormessage(message);

     if(message) return
     if(!issignform){
         //signup logic
         createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
     navigate("/browse")
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "-" + errorMessage);

  });

     }
     else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
         navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode + "-" + errorMessage);
      });
     }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt="Netflix-bg" />
      </div>
      <form
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className='font-bold text-3xl py-4'>{issignform ? 'Sign in' : 'Sign up'}</h1>
        {!issignform && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
            autoComplete="current-name"
            className='my-4 w-full p-4 bg-gray-600'
          />
        )}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email address'
          autoComplete="current-email"
          className='my-4 w-full p-4 bg-gray-600'
        />
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="my-4 w-full p-4 bg-gray-600"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <p className="text-red-500 font-bold text-lg py-2">{erromessage}</p>
        <button className='py-4 my-6 bg-red-700 w-full rounded-lg' onClick={handlesubmitform} type="submit">
          {issignform ? 'Sign in' : 'Sign up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={handlesigninform}>
          {issignform ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
