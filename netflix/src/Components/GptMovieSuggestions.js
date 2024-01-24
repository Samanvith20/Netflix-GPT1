import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  
  const store = useSelector((store) => store.Gpt);

  // Destructure values from the stored Redux state
  const { movieNames, movieResults } = store;

  // Check if either movieNames or movieResults is falsy
  if (!movieNames || !movieResults) {
    return null;
  }

  return (
    <>
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GptMovieSuggestions;
