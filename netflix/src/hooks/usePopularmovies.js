import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addpopular } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularmovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        OPTIONS
      );
      const json = await data.json();
      dispatch(addpopular(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    popularmovies();
  }, []); 
};

export default usePopularMovies;
