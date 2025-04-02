import { useRef, useState } from "react";
import { bgLogo } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  selectEnglish,
  selectSpanish,
  selectHindi,
} from "../utils/redux/slices/languageSlice";
import glogo from "../../public/Assets/translate.png";
import genAI from "../utils/genAI";
import { option } from "../utils/constants";
import { addGptMovies} from "../utils/redux/slices/gptSlice";
import LoadingSpinner from "./LoadingSpinner";

const GPTSearchBar = () => {
  const bhasha = useSelector((store) => store.language.lang);
  const text = useRef("");
  const [showOptions, setShowOptions] = useState("invisible");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleOptions = () => {
    setShowOptions(showOptions === "invisible" ? "visible" : "invisible");
  };

  const handleEnglish = () => {
    dispatch(selectEnglish());
  };

  const handleSpanish = () => {
    dispatch(selectSpanish());
  };
  const handleHindi = () => {
    dispatch(selectHindi());
  };

const fetchGptMovies = async(movie)=>{
 
  
  const res = await fetch(process.env.Search_Movies+movie,option);
  return await res.json();  
  
}


  const handleGptSearch = async () => {
    setLoading(true);
    console.log(text.current.value);

    gptQuery =
      "Act as Movies recomendation system and suggest some movies for the query : " +
      text.current.value +
      ".give me the name of only 6 movies, comma seperated like the example result given ahead. Example Result: Ugly, 99, No-smoking, Go goa gone, Delhi-Belly, Gangs of Wasseypur.";

    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });
    console.log(response.text);

    const searchedMovies = response.text.split(",");
    const arrayOfMovies = searchedMovies.map((movie)=>(fetchGptMovies(movie)))
    const details = await Promise.all(arrayOfMovies);
    dispatch(addGptMovies({movieNames:searchedMovies,movieDetails:details}));
    setLoading(false);
  };

  

  return (
    <div>
      <div className="fixed inset-0">
        <img src={bgLogo} alt="logo" className="h-full w-full object-cover" />
      </div>
      <div className="w-screen my-[45%] md:my-[7%] ">
        <form
          className="w-screen p-6 bg-[rgba(0,0,0,0.6)] relative z-10"
          onClick={(e) => e.preventDefault()}
        >
          <input
            className="w-60 md:w-[50%] p-4 m-4 md:m-4 h-15 align-middle -mx-5  md:mx-[20%] text-2xl bg-amber-200 rounded-lg"
            type="text"
            ref={text}
            placeholder={bhasha.gptPlaceHolderSearch}
          />
          <button
            className="h-15 py-2 px-4 align-middle text-white bg-red-700 text-2xl ml-9 md:-mx-[19%] rounded-lg cursor-pointer"
            onClick={handleGptSearch}
          >
            {loading?<LoadingSpinner />:bhasha.search}
          </button>
        </form>
      </div>
      <div className="md:relative md:z-40 md:w-[8%] md:p-2 md:rounded-lg md:shadow-md md:-my-[22.5%] md:mx-[77%] ">
        <img
          className=" w-10 cursor-pointer hover:scale-110 transition-transform duration-200"
          src={glogo}
          alt="translate"
          onClick={handleOptions}
        />
        <ul
          className={` mt-2 rounded-md shadow-lg overflow-hidden ${showOptions} bg-[rgba(0,0,0,0.88)] rounded-lg`}
        >
          <li>
            <button
              className="w-full px-4 py-2 text-white transition cursor-pointer"
              onClick={handleHindi}
            >
              Hindi
            </button>
          </li>
          <li>
            <button
              className="w-full px-4 py-2 text-white transition cursor-pointer"
              onClick={handleEnglish}
            >
              English
            </button>
          </li>
          <li>
            <button
              className="w-full px-4 py-2 text-white transition cursor-pointer"
              onClick={handleSpanish}
            >
              Spanish
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default GPTSearchBar;
