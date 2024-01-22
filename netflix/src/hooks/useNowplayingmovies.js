import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import {useDispatch} from "react-redux"
import { addmovies } from "../utils/movieSlice";


const useNowplayingmovies = () => {
    const dispatch = useDispatch();
  
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          OPTIONS
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
  
        const json = await response.json();
        // console.log(json);
        dispatch(addmovies(json.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };
  
    useEffect(() => {
      fetchNowPlayingMovies();
    }, []); // Make sure to include an empty dependency array to run the effect only once
  
    
  };
  
  
  
 
  export default useNowplayingmovies