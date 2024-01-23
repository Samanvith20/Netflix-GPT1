import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated, } from "../utils/movieSlice";

const useTopRatedmovies = () => {
  const dispatch = useDispatch();

  const Ratedmovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRated(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    Ratedmovies();
  }, []); 
};

export default useTopRatedmovies;
