import React from 'react';
import useTrailerplayingvideo from '../hooks/useTrailerplayingvideo';
import { useSelector } from 'react-redux';

const Videobackground = ({ movieID }) => {
   const trailerVideo= useSelector((store)=>store?.movies.addTrailerVideo)
   useTrailerplayingvideo(movieID);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};


export default Videobackground;
