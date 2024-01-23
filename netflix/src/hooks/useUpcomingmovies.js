import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

const useUpcomingmovies = () => {
    const dispatch = useDispatch();

  const Ratedmovies = async () => {
    try {
      const data = await fetch(
        " https://api.themoviedb.org/3/movie/upcoming?page=1",
        OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    Ratedmovies();
  }, []); 

}

export default useUpcomingmovies
