import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
    <div className="flex flex-col ">
    <GPTSearchBar />
    <div className="relative mt-[-17%] ">
    <GPTMovieSuggestions />
    </div>
    </div>
    </>
  );
};

export default GPTSearch;
