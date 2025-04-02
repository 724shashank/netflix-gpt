import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
  const { gptMovieNames, gptMoviesDetails} = useSelector(
    (store) => store?.gpt
  );


  if (!gptMovieNames) return null;

  return (
    <div className="bg-[rgba(0,0,0,0.88)] relative z-10  -my-20 md:my-[35%] p-5 m-5 ">
      {gptMovieNames?.map((movie, index) => (
        <MovieList
          key={index}
          title={movie}
          movies={gptMoviesDetails[index].results || []}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
