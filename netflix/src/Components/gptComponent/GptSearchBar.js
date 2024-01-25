import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/Languageconstants";
import { useRef } from "react";

import { OPTIONS, } from "../../utils/constants";
import { addMovies } from "../../utils/Store/GptSlice";
import OpenAI from "openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
    const defaultlanguage="en"
    const selectedLanguage = lang[langKey] ? langKey : defaultlanguage
    const input=useRef()
    const dispatch=useDispatch()
    // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
     const handleGptSearch =async()=>{
      //console.log(input.current.value);s
      const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;
       const GptQuery=`Act as a Tollywood Movie Recommendation system and suggest some Tollywood movies for the query: "${input.current.value}". Only give me names of 5 Tollywood movies, comma-separated, like the example result given ahead. Example Result: Bahubali, Arjun Reddy, Ala Vaikunthapurramuloo, Jersey, Geetha Govindam`;
       const openai = new OpenAI({
        apiKey: openaiApiKey,
        dangerouslyAllowBrowser: true
      });
       const data=await openai.chat.completions.create({
        messages: [{ role: "user", content: GptQuery }],
        model: "gpt-3.5-turbo",
      });
       console.log(data.choices?.[0].message?.content);
       const gptMovies = data.choices?.[0]?.message?.content.split(",");
         // it will create the data as in  a array form
         // then search for each movie in TMDBAPI
       const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie))
       // return as  a promise as a five promises[movies]
       const tmdbResults = await Promise.all(promiseArray);
       console.log(tmdbResults);
       dispatch(addMovies({ movieName:gptMovies,movieResults:tmdbResults}))

     }
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
         ref={input}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearch}>
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;