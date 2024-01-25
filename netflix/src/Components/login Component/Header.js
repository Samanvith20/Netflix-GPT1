import React, { useEffect } from 'react';
import { LOGO, USER_IAMGE } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeuser } from '../../utils/Store/userSlice';
import { addToogle } from '../../utils/Store/GptSlice';
import { SUPPORTED_LANGUAGES } from '../../utils/constants';
import { changeLanguage } from '../../utils/Store/languageSlice';

const Header = ({ onToggleForm, showSignInForm }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const GptSearch= useSelector((store)=>store.Gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };
   const  searchTogglefunction =()=>{
     dispatch(addToogle())
   }
    const handleLanguagechange =(e)=>{
      dispatch(changeLanguage(e.target.value))
    }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, password, displayName } = user;
        const uid = user.uid;
        dispatch(
          addUser({
            email: email,
            password: password,
            uid: uid,
            displayName: displayName,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeuser());
        navigate('/');
      }
    });
  }, []);

  return (
    <div>
      <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
        <img src={LOGO} alt="Netflix-logo" className="w-44" />
        <div className="flex p-2">
          {user ? (
            <>
            <div>
            {
              GptSearch&&(
                 <select className='p-2 m-2 bg-gray-900 text-white'
                 onChange={handleLanguagechange}>
                  {SUPPORTED_LANGUAGES.map((language)=>{
                  return  <option 
                  key={language.identifier} 
                  value={language.identifier}>
                    {language.name}</option>
                 })}
                 </select>
              )
            }
              <button className='text-white p-2 mx-2 my-2 bg-blue-800 mr-5'onClick={searchTogglefunction}>
              {GptSearch ? "Homepage" : "GPT Search"}
                </button>
            </div>
            
              <img className="w-12 h-12" alt="usericon" src={USER_IAMGE} />
              <button onClick={handleSignOut} className="font-bold text-white">
                (Sign Out)
              </button>
            </>
          ) : (
            <div className="bg-red-700 p-2 rounded-md mb-2 mt-1">
              <button
                className="text-white text-sm focus:outline-none hover:text-gray-300 transition duration-300"
                onClick={onToggleForm}
              >
                {showSignInForm ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
